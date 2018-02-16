
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
files <- dir("~/Work/MCC/git-mcc/kids_novel_data")

#combine files into one dataframe
raw <- data.frame()
for (f in files) {
  jf <- paste("~/Work/MCC/git-mcc/kids_novel_data/",f,sep="")
  jd <- fromJSON(paste(readLines(jf), collapse=""))
  id <- data.frame(
                   data = jd$data$data
)
  raw <- bind_rows(raw, id)
}

# convert into short format, drop unnecessary columns, rename variables and sort by id
novel.data= melt(setDT(raw), measure = patterns( "^data.subid","^data.condition","^data.agent","^data.altAgent","^data.leftFruit","^data.rightFruit","^data.pick","^data.novel","^data.trial","^data.speakerChange","^data.rt", "^data.correct"))
names(novel.data) = c("alltrial","id","condition","agent","altAgent","leftObject","rightObject","pick","target","trial","change","rt","correct") 
novel.data$pick= str_sub(novel.data$pick,72,str_length(novel.data$pick)-4)
novel.data = novel.data[!duplicated(novel.data), ]
novel.data = novel.data[order(id)]
# check resulting datafile
str(novel.data)
head(novel.data)
# write csv file for further analysis
write.csv(novel.data, file="kids_novel.data.csv")

################################################################################################################


############################
######## preference ###########
################################################################################################################

files <- dir("~/Work/MCC/git-mcc/kids_pref_data")

#combine files into one dataframe
raw <- data.frame()
for (f in files) {
  jf <- paste("~/Work/MCC/git-mcc/kids_pref_data/",f,sep="")
  jd <- fromJSON(paste(readLines(jf), collapse=""))
  id <- data.frame(
                   data = jd$data$data
)
  raw <- bind_rows(raw, id)
}

# convert into short format, drop unnecessary columns, rename variables and sort by id
pref.data= melt(setDT(raw), measure = patterns( "^data.subid","^data.condition","^data.agent","^data.altAgent","^data.leftFruit","^data.rightFruit","^data.pick","^data.pref","^data.trial","^data.speakerChange","^data.rt", "^data.correct"))
names(pref.data) = c("alltrial","id","condition","agent","altAgent","leftObject","rightObject","pick","target","trial","change","rt","correct") 
pref.data$pick= str_sub(pref.data$pick,75,str_length(pref.data$pick)-4)
pref.data = pref.data[!duplicated(pref.data), ]
pref.data = pref.data[order(id)]
# check resulting datafile
str(pref.data)
head(pref.data)
# write csv file for further analysis
write.csv(pref.data, file="kids_pref.data.csv")

################################################################################################################


####################################
######## informativeness ###########
################################################################################################################

files <- dir("~/Work/MCC/git-mcc/kids_info_data")

#combine files into one dataframe
raw <- data.frame()
for (f in files) {
  jf <- paste("~/Work/MCC/git-mcc/kids_info_data/",f,sep="")
  jd <- fromJSON(paste(readLines(jf), collapse=""))
  id <- data.frame( 
                   data = jd$data$data
)
  raw <- bind_rows(raw, id)
}

# convert into short format, drop unnecessary columns, rename variables and sort by id
inf.data= melt(setDT(raw), measure = patterns( "^data.subid","^data.condition","^data.agent","^data.leftFruit","^data.rightFruit","^data.tablePositionCorr","^data.pick","^data.inf","^data.trial","^data.control","^data.rt", "^data.correct"))
names(inf.data) = c("alltrial","id","condition","agent","leftObject","rightObject","targetOnTable","pick","target","trial","control","rt","correct") 
inf.data $pick= str_sub(inf.data $pick,80,str_length(inf.data $pick)-4)
inf.data = inf.data[!duplicated(inf.data), ]
inf.data = inf.data[order(id)]
inf.data$trial[inf.data$trial=="train1"]="train"
inf.data$trial[inf.data$trial=="train2"]="train"
# check resulting datafile
str(inf.data)
head(inf.data)
# write csv file for further analysis
write.csv(inf.data, file="kids_inf.data.csv")

################################################################################################################




