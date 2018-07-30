
library(rjson)
library(tidyr)
library(stringr)
library(dplyr)
library(data.table)


##
setwd("~/Work/MCC/git-mcc/mcc/stats/")

############################
######## novelty ###########
################################################################################################################


# select all files from individual workers
#files <- dir("~/Work/MCC/git-mcc/cosub_novelty/anonymized-results")
files <- dir("~/Work/MCC/git-mcc/nosub_novelty_weak2/production-results")
#files <- dir("~/Work/MCC/git-mcc/nosub_novelty_weak2/sandbox-results")

#combine files into one dataframe
raw <- data.frame()
for (f in files) {
  jf <- paste("~/Work/MCC/git-mcc/nosub_novelty_weak2/production-results/",f,sep="")
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
#novel.data$id = paste(novel.data$id,novel.data$condition,sep="_")
# check resulting datafile
str(novel.data)
head(novel.data)
# write csv file for further analysis
write.csv(novel.data, file="novel.weak.data2.csv")

################################################################################################################


############################
######## preference ###########
################################################################################################################

#files <- dir("~/Work/MCC/git-mcc/cosub_preference/anonymized-results")
#files <- dir("~/Work/MCC/git-mcc/nosub_preference_weak/production-results")
files <- dir("~/Work/MCC/git-mcc/nosub_preference_weak5/production-results")


#combine files into one dataframe
raw <- data.frame()
for (f in files) {
  jf <- paste("~/Work/MCC/git-mcc/nosub_preference_weak5/production-results/",f,sep="")
  jd <- fromJSON(paste(readLines(jf), collapse=""))
  id <- data.frame(workerid = jd$WorkerId, 
                   data = jd$answers$data$data
)
  raw <- bind_rows(raw, id)
}

# convert into short format, drop unnecessary columns, rename variables and sort by id
pref.data= melt(setDT(raw), measure = patterns( "^data.condition","^data.agent","^data.altAgent","^data.leftFruit","^data.rightFruit","^data.pick","^data.pref","^data.emo","^data.trial","^data.speakerChange","^data.rt", "^data.correct"))
names(pref.data) = c("id","alltrial","condition","agent","altAgent","leftObject","rightObject","pick","target","emotion","trial","change","rt","correct") 
pref.data$pick= str_sub(pref.data$pick,76,str_length(pref.data$pick)-4)
pref.data = pref.data[!duplicated(pref.data), ]
pref.data = pref.data[order(id)]
#pref.data $id = paste(pref.data $id, pref.data $condition,sep="_")
# check resulting datafile
str(pref.data)
head(pref.data)
# write csv file for further analysis
write.csv(pref.data, file="pref.weak.data5.csv")

################################################################################################################


####################################
######## informativeness ###########
################################################################################################################

files <- dir("~/Work/MCC/git-mcc/cosub_informativeness/anonymized-results")
files <- dir("~/Work/MCC/git-mcc/nosub_informativeness2/production-results")

#combine files into one dataframe
raw <- data.frame()
for (f in files) {
  jf <- paste("~/Work/MCC/git-mcc/nosub_informativeness2/production-results/",f,sep="")
  jd <- fromJSON(paste(readLines(jf), collapse=""))
  id <- data.frame(workerid = jd$WorkerId, 
                   data = jd$answers$data$data
)
  raw <- bind_rows(raw, id)
}

# convert into short format, drop unnecessary columns, rename variables and sort by id
inf.data= melt(setDT(raw), measure = patterns( "^data.condition","^data.agent","^data.leftFruit","^data.rightFruit","^data.tablePositionCorr","^data.pick","^data.inf","^data.trial","^data.control","^data.rt", "^data.correct"))
names(inf.data) = c("id","alltrial","condition","agent","leftObject","rightObject","targetOnTable","pick","target","trial","control","rt","correct") 
inf.data $pick= str_sub(inf.data $pick,80,str_length(inf.data $pick)-4)
inf.data = inf.data[!duplicated(inf.data), ]
inf.data = inf.data[order(id)]
inf.data$trial[inf.data$trial=="train1"]="train"
inf.data$trial[inf.data$trial=="train2"]="train"


inf.data <- inf.data%>%
  mutate(targetObj = ifelse(target == "right",rightObject, leftObject),
         correct = ifelse(pick == targetObj, 1, 0))


# check resulting datafile
str(inf.data)
head(inf.data)
# write csv file for further analysis
write.csv(inf.data, file="inf.2.data.csv")

################################################################################################################




