
library("ggplot2")
library("ggthemes")
library("viridis")
library("ggpubr")


## importing data
#pref.data.full =read.csv(file="~/Work/MCC/stats/pref.data.csv", header=T, sep=",")
#novel.data.full =read.csv(file="~/Work/MCC/stats/novel.data.csv", header=T, sep=",")

load("mcc_pilot.RData")

## sanity checks
# number of participants in each experiment
unique(pref.data.full$id)
unique(novel.data.full$id)

# select training trials
# check performance in training trials
novel.training=subset(novel.data.full, novel.data.full$trial=="train")
table(novel.training$id,novel.training$correct)

pref.training=subset(pref.data.full, pref.data.full$trial=="train")
table(pref.training$id,pref.training$correct)

## remove training trials for plotting
novel.data=subset(novel.data.full, trial!="train")
pref.data=subset(pref.data.full, trial!="train")

### merging datasets
cg.data=rbind(pref.data,novel.data)

#plot for two common ground conditions
ggplot(cg.data, 
       aes(x = change, y = correct, fill = change, frame = condition))+
  stat_summary_bin(aes(y = correct), fun.y = "mean", geom = "bar")+
  stat_summary(fun.data = "mean_cl_normal", colour = "black", size = 1, width = .1, geom = "errorbar", show.legend = FALSE)+
  facet_wrap(~ condition,
             labeller = as_labeller(c(`novelty`="Novelty", `preference`="Preference")))+
  geom_hline(yintercept = 0.5, size = 0.5, lty=2)+
  labs(x="",y="Proportion Expected Choice")+
  ylim(0,1.05)+
  guides(fill = guide_legend(keywidth = 2, keyheight = 2))+
  theme(axis.text.x=element_blank(),axis.ticks.x=element_blank())+
  scale_fill_solarized(name="Speaker Change",
                     breaks=c("false", "true"),
                     labels=c("No", "Yes"))+
  #scale_fill_viridis(discrete=TRUE,name="Speaker Change",
  #                     breaks=c("false", "true"),
  #                     labels=c("No", "Yes"))+
  theme_few(base_size = 12)+
  theme(axis.text.x=element_blank(),axis.ticks.x=element_blank())

save.image("mcc_pilot.RData")


