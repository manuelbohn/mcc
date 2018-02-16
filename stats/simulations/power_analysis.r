library(lme4)
source("X:/Statistics/R scripts/Roger/intercept_optimization.r")
n.children=c(12, 18, 24, 32, 40)
subj.contrib=c(0.1, 0.2, 0.4, 0.8, 1.6)
conds=as.factor(c("ton", "geste", "both"))
ages=as.factor(c(18, 24))
trial.effect=0.1
trial.RS=0.05
age.cond.probs=c(0.5, 0.6, 0.7, 0.6, 0.7, 0.8)
logit.age.cond.probs=log(age.cond.probs/(1-age.cond.probs))

do.all<-function(index, nc, sc){
	keepWarnings<-function(expr){
		localWarnings <- list()
		value <- withCallingHandlers(expr,
			warning = function(w) {
				localWarnings[[length(localWarnings)+1]] <<- w
				invokeRestart("muffleWarning")
			}
		)
		list(value=value, warnings=localWarnings)
	}
	N=n.children[nc]*length(conds)*length(ages)
	xdata=data.frame(expand.grid(conds, ages))
	colnames(xdata)=c("cond", "age")
	xdata$cond=factor(xdata$cond, levels=c("ton", "geste", "both"))
	xdata=xdata[rep(x=1:nrow(xdata), each=n.children[nc]), ]
	xdata$subject=as.factor(1:N)
	n.trials=sample(1:4, N, replace=T, prob=c(0.4, 0.3, 0.2, 0.1))
	xdata=xdata[rep(x=1:nrow(xdata), times=n.trials), ]
	xdata$trial.nr=unlist(lapply(X=n.trials, FUN=function(input){1:input}))
	xdata$z.trial.nr=as.vector(scale(xdata$trial.nr))
	both.fac=as.factor(paste(xdata$age, xdata$cond, sep="_"))
	both.fac=factor(both.fac, levels(both.fac)[c(3, 2, 1, 6, 5, 4)])
	
	resp=logit.age.cond.probs[as.numeric(both.fac)]+
		xdata$z.trial.nr*(trial.effect+rnorm(n=N, mean=0, sd=trial.RS)[as.numeric(xdata$subject)])+
		rnorm(n=N, mean=0, sd=subj.contrib[sc])[as.numeric(xdata$subject)]
	resp=rbinom(n=nrow(xdata), size=1, prob=exp(resp)/(1+exp(resp)))
	full=keepWarnings(glmer(resp~age*cond+z.trial.nr+(1|subject)+(0+z.trial.nr|subject), data=xdata, family=binomial))
	null=keepWarnings(glmer(resp~z.trial.nr+(1|subject)+(0+z.trial.nr|subject), data=xdata, family=binomial))
	red=keepWarnings(glmer(resp~age+cond+z.trial.nr+(1|subject)+(0+z.trial.nr|subject), data=xdata, family=binomial))
	n.warnings=c(length(unlist(full$warnings)), length(unlist(null$warnings)), length(unlist(red$warnings)))
	full=full$value
	null=null$value
	red=red$value
	fn.test=as.data.frame(anova(null, full, test="Chisq"))
	int.test=as.data.frame(anova(red, full, test="Chisq"))
	main.tests=as.data.frame(drop1(red, test="Chisq"))
	ind.tests=matrix(NA, nrow=6, ncol=5)
	#browser()
	for(age.index in 1:2){
		for(cond.ind in 1:3){
			take=xdata$cond==levels(xdata$cond)[cond.ind] & xdata$age==levels(xdata$age)[age.index]
			#browser()
			xdata$new.age=relevel(xdata$age, ref=levels(xdata$age)[age.index])
			xdata$new.cond=relevel(xdata$cond, ref=levels(xdata$cond)[cond.ind])
			ired=keepWarnings(glmer(resp~new.age+new.cond+z.trial.nr+(
				1|subject)+(0+z.trial.nr|subject), data=xdata, family=binomial))
			icpt.test=pv.adj.fnc(ad.data=xdata, response=resp, model.res=ired$value, pvs2adj="z.trial.nr", resp2consider=take, 
				lower=-10, upper=10, contr=glmerControl())
			#if(cond.ind==3 & age.index==2){browser()}
			ind.tests[(age.index-1)*3+cond.ind, ]=c(summary(icpt.test$model.result)$coefficients["(Intercept)", ], length(unlist(ired$warnings)))
			#if(age.index==2 & cond.ind==3){browser()}
		}
	}
	rownames(ind.tests)=levels(both.fac)
	colnames(ind.tests)=c(colnames(summary(icpt.test$model.result)$coefficients), "n.warnings")
	mean.resp=tapply(resp, xdata[, c("age", "cond")], mean)
	return(list(fn.test=fn.test, int.test=int.test, main.tests=main.tests, ind.tests=ind.tests, mean.resp=mean.resp, n.warnings))
}
xx=do.all(index=1, nc=5, sc=1)

library(parallel)
cl <- makeCluster(getOption("cl.cores", detectCores()))
cl=cl[1:(length(cl)-1)]
parLapply(cl=cl, 1:length(cl), fun=function(x){
	library(lme4)
	return(invisible(""))
})
clusterExport(cl = cl, varlist=c("n.children", "conds", "ages", "subj.contrib", "trial.effect", "trial.RS", "logit.age.cond.probs", "pv.adj.fnc"))

for(nc in 1:length(n.children)){
	for(sc in 1:length(subj.contrib)){
		all.res=parLapply(cl=cl, X=1:1000, fun=do.all, nc=nc, sc=sc)
		save(file=paste(c(paste(c("E:/temp/manuel", paste(c(nc, sc), collapse="_")), collapse="/"), "RData"), collapse="."), list="all.res")
	}
}
parLapply(cl=cl, X=1:length(cl), fun=function(x){rm(list=ls())})
stopCluster(cl=cl)

flist=list.files(path="E:/temp/manuel", full.names=T)
n.children=c(12, 18, 24, 32, 40)
subj.contrib=c(0.1, 0.2, 0.4, 0.8, 1.6)
all.mean.resp=c()
all.fn=c()
all.int=c()
all.main=c()
all.ind.tests=c()
for(i in 1:length(flist)){
	load(flist[i])
	mean.resp=matrix(0, ncol=3, nrow=2)
	for(j in 1:length(all.res)){
		mean.resp=mean.resp+all.res[[j]]$mean.resp
	}
	mean.resp=mean.resp/length(all.res)
	colnames(mean.resp)=colnames(all.res[[1]]$mean.resp)
	rownames(mean.resp)=rownames(all.res[[1]]$mean.resp)
	mean.resp=as.data.frame(as.table(mean.resp))
	comb=unlist(strsplit(gsub(x=flist[i], pattern=".RData", replacement="", fixed=T), split="/", fixed=T))[4]
	comb=as.numeric(unlist(strsplit(comb, split="_", fixed=T)))
	all.mean.resp=rbind(all.mean.resp, data.frame(simu=j, nc=n.children[comb[1]], sc=subj.contrib[comb[2]], mean.resp))
	xx=lapply(all.res, function(x){
		x$fn.test[2, c("Chisq", "Chi Df", "Pr(>Chisq)")]
	})
	xx=matrix(unlist(xx), ncol=3, byrow=2)
	colnames(xx)=c("Chisq", "Chi Df", "Pr(>Chisq)")
	all.fn=rbind(all.fn, data.frame(nc=n.children[comb[1]], sc=subj.contrib[comb[2]], xx))
	xx=lapply(all.res, function(x){
		x$int.test[2, c("Chisq", "Chi Df", "Pr(>Chisq)")]
	})
	xx=matrix(unlist(xx), ncol=3, byrow=2)
	colnames(xx)=c("Chisq", "Chi Df", "Pr(>Chisq)")
	all.int=rbind(all.int, data.frame(nc=n.children[comb[1]], sc=subj.contrib[comb[2]], xx))
	for(j in 1:length(all.res)){
		all.main=rbind(all.main, data.frame(simu=j, nc=n.children[comb[1]], sc=subj.contrib[comb[2]], term=rownames(all.res[[j]]$main.tests), all.res[[j]]$main.tests))
	}
	for(j in 1:length(all.res)){
		all.ind.tests=rbind(all.ind.tests, data.frame(simu=j, nc=n.children[comb[1]], sc=subj.contrib[comb[2]], term=rownames(all.res[[j]]$ind.tests), all.res[[j]]$ind.tests))
	}
}
save.image("E:/temp/manuel_all_res.RData")
str(all.mean.resp)
aggregate(all.mean.resp$Freq, all.mean.resp[, c("nc", "sc", "age", "cond")], mean)
aggregate(all.mean.resp$Freq, all.mean.resp[, c("cond", "age")], mean)
aggregate(all.mean.resp$Freq, all.mean.resp[, c("age", "cond")], sd)


#full null model comparison:
xx=aggregate(all.fn$Pr..Chisq.<=0.05, all.fn[, c("nc", "sc")], mean)
dev.off()
par(mar=c(3, 3, 0.2, 0.2), mgp=c(1.7, 0.4, 0), tcl=-0.2)
xcol=as.numeric(as.factor(xx$sc))
xcol=xcol/max(xcol)
plot(xx$nc, xx$x, las=1, xlab="sample size per cell", ylab="power", pch=19, col=grey(level=1-xcol), ylim=c(0, 1), yaxs="i")
#points(xx$nc, xx$x)
legend("topleft", legend=sort(unique(xx$sc)), pch=19, col=grey(level=1-sort(unique(xcol))), bty="n")
abline(h=0.8, lty=3)
savePlot(file="G:/Transfer/manuel_bohn/natref/full_null.pdf", type="pdf")


#tests of the interaction:
xx=aggregate(all.int$Pr..Chisq.<=0.05, all.int[, c("nc", "sc")], mean)
par(mar=c(3, 3, 0.2, 0.2), mgp=c(1.7, 0.4, 0), tcl=-0.2)
xcol=as.numeric(as.factor(xx$sc))
xcol=xcol/max(xcol)
plot(xx$nc, xx$x, las=1, xlab="sample size per cell", ylab="power", pch=19, col=grey(level=1-xcol), ylim=c(0, 1), yaxs="i")
#points(xx$nc, xx$x)
legend("topleft", legend=sort(unique(xx$sc)), pch=19, col=grey(level=1-sort(unique(xcol))), bty="n")
abline(h=0.8, lty=3)
savePlot(file="G:/Transfer/manuel_bohn/natref/interaction.pdf", type="pdf")

#main effects:
xx=droplevels(subset(all.main, term!="<none>"))
xx=aggregate(xx$Pr.Chi.<=0.05, xx[, c("nc", "sc", "term")], mean)
dev.off()
windows(height=3, width=9)
par(mar=c(3, 3, 0.2, 0.2), mgp=c(1.7, 0.4, 0), tcl=-0.2, mfrow=c(1, 3))
for(i in 1:3){
	sel.data=subset(xx, term==levels(term)[i])
	xcol=as.numeric(as.factor(sel.data$sc))
	xcol=xcol/max(xcol)
	plot(sel.data$nc, sel.data$x, las=1, xlab="sample size per cell", ylab="power", pch=19, col=grey(level=1-xcol), ylim=c(0, 1), yaxs="i")
	legend("topleft", legend=sort(unique(sel.data$sc)), pch=19, col=grey(level=1-sort(unique(xcol))), bty="n")
	abline(h=0.8, lty=3)
	mtext(text=levels(sel.data$term)[i], side=3, line=-1.2)
}	
savePlot(file="G:/Transfer/manuel_bohn/natref/main_effects.pdf", type="pdf")

#individual tests per cell:
xx=aggregate(all.ind.tests$Pr...z..<=0.05, all.ind.tests[, c("nc", "sc", "term")], mean)
dev.off()
windows(height=6, width=9)
par(mar=c(3, 3, 0.2, 0.2), mgp=c(1.7, 0.4, 0), tcl=-0.2, mfrow=c(2, 3))
for(i in c(3:1, 6:4)){
	sel.data=subset(xx, term==levels(term)[i])
	xcol=as.numeric(as.factor(sel.data$sc))
	xcol=xcol/max(xcol)
	plot(sel.data$nc, sel.data$x, las=1, xlab="sample size per cell", ylab="power", pch=19, col=grey(level=1-xcol), ylim=c(0, 1), yaxs="i")
	legend("topleft", legend=sort(unique(sel.data$sc)), pch=19, col=grey(level=1-sort(unique(xcol))), bty="n")
	abline(h=0.8, lty=3)
	mtext(text=levels(sel.data$term)[i], side=3, line=-1.2)
}
savePlot(file="G:/Transfer/manuel_bohn/natref/ind_cells.pdf", type="pdf")
save.image("E:/temp/manuel_all_res.RData")

#list(fn.test=fn.test, int.test=int.test, main.tests=main.tests, ind.tests=ind.tests, full=full, red=red, mean.resp=mean.resp)