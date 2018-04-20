install.packages("stringr")
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
#files <- dir("~/Work/MCC/git-mcc/cosub_Ex3_novel/sandbox-results")
files <- dir("~/Work/MCC/git-mcc/cosub_Ex3_novel/production-results")

#combine files into one dataframe
raw <- data.frame()
for (f in files) {
  #jf <- paste("~/Work/MCC/git-mcc/cosub_Ex3_novel/sandbox-results/",f,sep="")
  jf <- paste("~/Work/MCC/git-mcc/cosub_Ex3_novel/production-results/",f,sep="")
  jd <- fromJSON(paste(readLines(jf), collapse=""))
  id <- data.frame(workerid = jd$WorkerId, 
                   data = jd$answers$data$data
)
  raw <- bind_rows(raw, id)
}

# convert into short format, drop unnecessary columns, rename variables and sort by id
novel.data= melt(setDT(raw), measure = patterns( "^data.experiment","^data.agent","^data.altAgent","^data.rightFruit","^data.leftFruit","^data.corrFruit_inf","^data.corrFruit_novel","^data.pick","^data.novel","^data.inf","^data.trial","^data.alignment","^data.speaker","^data.rt", "^data.correct_inf","^data.correct_novel"))
names(novel.data) = c("id","alltrial","experiment","agent","altAgent","rightFruit","leftFruit","corObjInf","corObjPrior","pick","prior","inf","trial","alignment","change","rt","correct_inf","correct_prior") 
novel.data$pick= str_sub(novel.data$pick,63,str_length(novel.data$pick)-4)
novel.data = novel.data[!duplicated(novel.data), ]
novel.data = novel.data[order(id)]
novel.data$id = paste(novel.data$id,novel.data$condition,sep="_")
# Problem with t1: is seen as correct from both perspectives if other object is t10 -t18. Recode this
novel.data <- novel.data %>%
  mutate(correct_inf = ifelse(pick == corObjInf,1,0),
         correct_prior = ifelse(pick == corObjPrior,1,0)) 
# check resulting datafile
str(novel.data)
head(novel.data)
# write csv file for further analysis
write.csv(novel.data, file="ex3.novel.data.csv")

################################################################################################################


############################
######## preference ###########
################################################################################################################


#files <- dir("~/Work/MCC/git-mcc/cosub_Ex3_pref/sandbox-results")
files <- dir("~/Work/MCC/git-mcc/cosub_Ex3_pref/production-results")

#combine files into one dataframe
raw <- data.frame()
for (f in files) {
  jf <- paste("~/Work/MCC/git-mcc/cosub_Ex3_pref/production-results/",f,sep="")
  jd <- fromJSON(paste(readLines(jf), collapse=""))
  id <- data.frame(workerid = jd$WorkerId, 
                   data = jd$answers$data$data
)
  raw <- bind_rows(raw, id)
}

# convert into short format, drop unnecessary columns, rename variables and sort by id
pref.data= melt(setDT(raw), measure = patterns( "^data.experiment","^data.agent","^data.altAgent","^data.rightFruit","^data.leftFruit","^data.corrFruit_inf","^data.corrFruit_pref","^data.pick","^data.pref","^data.inf","^data.trial","^data.alignment","^data.speaker","^data.rt", "^data.correct_inf","^data.correct_pref"))
names(pref.data) = c("id","alltrial","experiment","agent","altAgent","rightFruit","leftFruit","corObjInf","corObjPrior","pick","prior","inf","trial","alignment","change","rt","correct_inf","correct_prior") 
pref.data$pick= str_sub(pref.data$pick,63,str_length(pref.data$pick)-4)
pref.data = pref.data[!duplicated(pref.data), ]
pref.data = pref.data[order(id)]
pref.data $id = paste(pref.data $id, pref.data $experiment,sep="_")
# Problem with t1: is seen as correct from both perspectives if other object is t10 -t18. Recode this
pref.data <- pref.data %>%
  mutate(correct_inf = ifelse(pick == corObjInf,1,0),
         correct_prior = ifelse(pick == corObjPrior,1,0)) 
# check resulting datafile
str(pref.data)
head(pref.data)
# write csv file for further analysis
write.csv(pref.data, file="ex3.pref.data.csv")

################################################################################################################



