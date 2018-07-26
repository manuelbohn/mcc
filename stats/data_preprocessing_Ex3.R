
library(rjson)
library(tidyr)
library(stringr)
library(dplyr)
library(data.table)
library("stringr")


##
setwd("~/Work/MCC/git-mcc/mcc/stats/")

############################
######## novelty ###########
################################################################################################################


# select all files from individual workers
#files <- dir("~/Work/MCC/git-mcc/nosub_Ex3_novel_weak/sandbox-results")
#files <- dir("~/Work/MCC/git-mcc/nosub_Ex3_novel_strong/production-results")
#files <- dir("~/Work/MCC/git-mcc/nosub_Ex3_novel_medium/production-results")
files <- dir("~/Work/MCC/git-mcc/nosub_Ex3_novel_weak/production-results")


#combine files into one dataframe
raw <- data.frame()
for (f in files) {
  #jf <- paste("~/Work/MCC/git-mcc/nosub_Ex3_novel_weak/sandbox-results/",f,sep="")
  #jf <- paste("~/Work/MCC/git-mcc/nosub_Ex3_novel_strong/production-results/",f,sep="")
  #jf <- paste("~/Work/MCC/git-mcc/nosub_Ex3_novel_medium/production-results/",f,sep="")
  jf <- paste("~/Work/MCC/git-mcc/nosub_Ex3_novel_weak/production-results/",f,sep="")
  jd <- fromJSON(paste(readLines(jf), collapse=""))
  id <- data.frame(workerid = jd$WorkerId, 
                   data = jd$answers$data$data
)
  raw <- bind_rows(raw, id)
}

# convert into short format, drop unnecessary columns, rename variables and sort by id
novel.data= melt(setDT(raw), measure = patterns( "^data.experiment","^data.agent","^data.altAgent","^data.rightFruit","^data.leftFruit","^data.corrFruit_inf","^data.corrFruit_novel","^data.pick","^data.novel","^data.inf","^data.trial","^data.alignment","^data.speaker","^data.rt", "^data.correct_inf","^data.correct_novel"))
names(novel.data) = c("id","alltrial","experiment","agent","altAgent","rightFruit","leftFruit","corObjInf","corObjPrior","pick","prior","inf","trial","alignment","change","rt","correct_inf","correct_prior") 
novel.data$pick= str_sub(novel.data$pick,65,str_length(novel.data$pick)-4)
novel.data = novel.data[!duplicated(novel.data), ]
novel.data = novel.data[order(id)]
# Problem with t1: is seen as correct from both perspectives if other object is t10 -t18. Recode this
novel.data <- novel.data %>%
  mutate(correct_inf = ifelse(pick == corObjInf,1,0),
         correct_prior = ifelse(pick == corObjPrior,1,0),
         prior = substr(experiment,7,12))
# check resulting datafile
str(novel.data)
head(novel.data)
# write csv file for further analysis
#write.csv(novel.data, file="ex3.2.novel.strong.data.csv")
#write.csv(novel.data, file="ex3.2.novel.medium.data.csv")
write.csv(novel.data, file="ex3.2.novel.weak.data.csv")

################################################################################################################


############################
######## preference ###########
################################################################################################################


#files <- dir("~/Work/MCC/git-mcc/nosub_Ex3_preference_medium/sandbox-results")
files <- dir("~/Work/MCC/git-mcc/nosub_Ex3_preference_strong/production-results")
#files <- dir("~/Work/MCC/git-mcc/nosub_Ex3_preference_medium/production-results")

#combine files into one dataframe
raw <- data.frame()
for (f in files) {
  #jf <- paste("~/Work/MCC/git-mcc/nosub_Ex3_preference_medium/sandbox-results/",f,sep="")
  jf <- paste("~/Work/MCC/git-mcc/nosub_Ex3_preference_strong/production-results/",f,sep="")
  #jf <- paste("~/Work/MCC/git-mcc/nosub_Ex3_preference_medium/production-results/",f,sep="")
  jd <- fromJSON(paste(readLines(jf), collapse=""))
  id <- data.frame(workerid = jd$WorkerId, 
                   data = jd$answers$data$data
)
  raw <- bind_rows(raw, id)
}

# convert into short format, drop unnecessary columns, rename variables and sort by id
pref.data= melt(setDT(raw), measure = patterns( "^data.experiment","^data.agent","^data.altAgent","^data.rightFruit","^data.leftFruit","^data.corrFruit_inf","^data.corrFruit_pref","^data.pick","^data.pref","^data.inf","^data.trial","^data.alignment","^data.speaker","^data.rt", "^data.correct_inf","^data.correct_pref"))
names(pref.data) = c("id","alltrial","experiment","agent","altAgent","rightFruit","leftFruit","corObjInf","corObjPrior","pick","prior","inf","trial","alignment","change","rt","correct_inf","correct_prior") 
pref.data$pick= str_sub(pref.data$pick,65,str_length(pref.data$pick)-4)
pref.data = pref.data[!duplicated(pref.data), ]
pref.data = pref.data[order(id)]
# Problem with t1: is seen as correct from both perspectives if other object is t10 -t18. Recode this
pref.data <- pref.data %>%
  mutate(correct_inf = ifelse(pick == corObjInf,1,0),
         correct_prior = ifelse(pick == corObjPrior,1,0),
         prior = substr(experiment,6,11)) 
# check resulting datafile
str(pref.data)
head(pref.data)
# write csv file for further analysis
write.csv(pref.data, file="ex3.2.pref.strong.data.csv")
#write.csv(pref.data, file="ex3.2.pref.medium.data.csv")

################################################################################################################



