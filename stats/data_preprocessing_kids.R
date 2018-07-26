
library(rjson)
library(tidyr)
library(stringr)
library(dplyr)
library(data.table)
library(readxl)
library(lubridate)


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
novel.data= melt(setDT(raw), measure = patterns( "^data.subid","^data.subage","^data.condition","^data.agent","^data.altAgent","^data.leftFruit","^data.rightFruit","^data.pick","^data.novel","^data.trial","^data.speakerChange","^data.rt", "^data.correct"))
names(novel.data) = c("alltrial","id","age","condition","agent","altAgent","leftObject","rightObject","pick","target","trial","change","rt","correct") 
novel.data$pick= str_sub(novel.data$pick,115,str_length(novel.data$pick)-4)
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
  id <- data.frame(test_date= jf,
                   data = jd$data$data
  )
  raw <- bind_rows(raw, id)
}

# convert into short format, drop unnecessary columns, rename variables and sort by id
pref.data= melt(setDT(raw), measure = patterns( "^data.subid","^data.subage","^data.condition","^data.agent","^data.altAgent","^data.leftFruit","^data.rightFruit","^data.pick","^data.pref","^data.trial","^data.speakerChange","^data.rt", "^data.correct"))
names(pref.data) = c("test_date","alltrial","subid","age","condition","agent","altAgent","leftObject","rightObject","pick","target","trial","change","rt","correct") 
pref.data$pick= str_sub(pref.data$pick,118,str_length(pref.data$pick)-4)
pref.data = pref.data[!duplicated(pref.data), ]
pref.data = pref.data[order(subid)]

# calculating age
pref.data $test_date = as.Date(str_sub(pref.data $test_date,43,str_length(pref.data $test_date)-11))



# change subid for subjects so that they match the subject log file
pref.data <- pref.data%>%
  filter(subid != "Dryrun")%>%
  mutate(subid = ifelse(subid == "190718_9_pref" & age == 2,"190718_8_pref", subid),
         subid = ifelse(subid == "120503_2_pref","180503_2_pref", subid),
         subid = ifelse(subid == "209718_6_pref","200718_6_pref", subid),
         targetObj = ifelse(target == "left",leftObject, rightObject),
         correct = ifelse(pick == targetObj, 1, 0))


mean(pref.data$correct)

# load subject log file
log <- read_excel("../../MCC-subject_log.xlsx", 1)%>%
  filter(Condition == "pref")%>%
  select(subid,experimenter,keep_drop,sex,dob)

# join datasets
pref.data <- left_join(pref.data,log, by = "subid")

# calcualte numerical age at test
pref.data <- pref.data %>%
  filter(keep_drop == "keep")%>%
  mutate(age = str_replace(age, " ", ""),
         age = ifelse(subid == "180503_3_pref",2,age), # Wrong age group has been entered for that subject, did not match with dob on consent form
         dob = as.numeric(dob),
         dob = as.Date(dob,origin = "1899-12-30"),
         age_num = lubridate::time_length(difftime(test_date,dob), "years"),
         check_age = ifelse(substr(age_num,1,1) == age, T, F))

pref.data%>%
  filter(sex == "F")%>%
  group_by(age)%>%
  summarise(sex_ratio = length(unique(subid))/15)

# remove identifiable information
pref.data <- pref.data %>%
  select(-dob,-test_date,-check_age,-keep_drop,-experimenter,-sex)

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
  id <- data.frame(test_date= jf, 
                   data = jd$data$data
  )
  raw <- bind_rows(raw, id)
}

# convert into short format, drop unnecessary columns, rename variables and sort by id
inf.data= melt(setDT(raw), measure = patterns( "^data.subid","^data.subage","^data.condition","^data.agent","^data.leftFruit","^data.rightFruit","^data.tablePositionCorr","^data.pick","^data.inf","^data.trial","^data.control","^data.rt", "^data.correct"))
names(inf.data) = c("test_date","alltrial","subid","age","condition","agent","leftObject","rightObject","targetOnTable","pick","target","trial","control","rt","correct") 

inf.data = inf.data[!duplicated(inf.data), ]
inf.data = inf.data[order(subid)]
inf.data$trial[inf.data$trial=="train1"]="train"
inf.data$trial[inf.data$trial=="train2"]="train"


inf.data <- inf.data%>%
  mutate(pick = ifelse(subid == "180405_2_inf" | subid == "180718", str_sub(pick,123,str_length(pick)-4) , str_sub(pick,51,str_length(pick)-4)))


# calculating age
inf.data $test_date = as.Date(str_sub(inf.data $test_date,43,str_length(inf.data $test_date)-11))


# change subid for subjects so that they match the subject log file
# also chnage age group for one child to match dob
inf.data <- inf.data%>%
  filter(subid != "Dryrun")%>%
  mutate(subid = ifelse(subid == "180723_11_pref","180723_11_inf", subid),
         age = ifelse(subid == "200718_4_inf",2, age),
         age = ifelse(subid == "180725_1_inf",4, age),
         targetObj = ifelse(target == "left",leftObject, rightObject),
         correct = ifelse(pick == targetObj, 1, 0))



# load subject log file
log <- read_excel("../../MCC-subject_log.xlsx", 1)%>%
  filter(Condition == "inf")%>%
  select(subid,experimenter,keep_drop,sex,dob)

# koin datasets
inf.data <- left_join(inf.data,log, by = "subid")

# calcualte numerical age at test
inf.data <- inf.data %>%
  filter(keep_drop == "keep")%>%
  mutate(dob = as.numeric(dob),
         dob = as.Date(dob,origin = "1899-12-30"),
         age_num = lubridate::time_length(difftime(test_date,dob), "years"),
         check_age = ifelse(substr(age_num,1,1) == age, T, F))

# remove identifiable information
inf.data <- inf.data %>%
  select(-dob,-test_date,-check_age,-keep_drop,-experimenter,-sex)

# check resulting datafile
str(inf.data)
head(inf.data)
# write csv file for further analysis
write.csv(inf.data, file="kids_inf.data.csv")

################################################################################################################



