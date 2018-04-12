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
files <- dir("~/Work/MCC/git-mcc/cosub_Ex3_novel/sandbox-results")

#combine files into one dataframe
raw <- data.frame()
for (f in files) {
  jf <- paste("~/Work/MCC/git-mcc/cosub_novelty/anonymized-results/",f,sep="")
  
  jd <- fromJSON(paste(readLines(jf), collapse=""))
  id <- data.frame(workerid = jd$WorkerId, 
                   data = jd$answers$data$data
)
  raw <- bind_rows(raw, id)
}

# convert into short format, drop unnecessary columns, rename variables and sort by id
novel.data= melt(setDT(raw), measure = patterns( "^data.condition","^data.agent","^data.altAgent","^data.leftFruit","^data.rightFruit","^data.pick","^data.novel","^data.trial","^data.speakerChange","^data.rt", "^data.correct"))
names(novel.data) = c("id","alltrial","condition","agent","altAgent","leftObject","rightObject","pick","target","trial","change","rt","correct") 
novel.data$pick= str_sub(novel.data$pick,73,str_length(novel.data$pick)-4)
novel.data = novel.data[!duplicated(novel.data), ]
novel.data = novel.data[order(id)]
novel.data$id = paste(novel.data$id,novel.data$condition,sep="_")
# check resulting datafile
str(novel.data)
head(novel.data)
# write csv file for further analysis
write.csv(novel.data, file="novel.data.csv")

################################################################################################################


############################
######## preference ###########
################################################################################################################


files <- dir("~/Work/MCC/git-mcc/cosub_Ex3_pref/sandbox-results")

#combine files into one dataframe
raw <- data.frame()
for (f in files) {
  jf <- paste("~/Work/MCC/git-mcc/cosub_Ex3_pref/sandbox-results/",f,sep="")
  jd <- fromJSON(paste(readLines(jf), collapse=""))
  id <- data.frame(workerid = jd$WorkerId, 
                   data = jd$answers$data$data
)
  raw <- bind_rows(raw, id)
}

# convert into short format, drop unnecessary columns, rename variables and sort by id
pref.data= melt(setDT(raw), measure = patterns( "^data.experiment","^data.agent","^data.altAgent","^data.corrFruit_inf","^data.corrFruit_pref","^data.pick","^data.pref","^data.inf","^data.trial","^data.alignment","^data.speakerChange","^data.rt", "^data.correct_inf","^data.correct_pref"))
names(pref.data) = c("id","alltrial","experiment","agent","altAgent","cortObjInf","cortObjPref","pick","pref","inf","trial","alignment","change","rt","correct_inf","correct_pref") 
pref.data$pick= str_sub(pref.data$pick,76,str_length(pref.data$pick)-4)
pref.data = pref.data[!duplicated(pref.data), ]
pref.data = pref.data[order(id)]
pref.data $id = paste(pref.data $id, pref.data $condition,sep="_")
# check resulting datafile
str(pref.data)
head(pref.data)
# write csv file for further analysis
write.csv(pref.data, file="pref.data.csv")

################################################################################################################



