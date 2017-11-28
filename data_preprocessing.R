install.packages("stringr")
library(rjson)
library(tidyr)
library(stringr)
library(dplyr)

files <- dir("~/Work/MCC/git-mcc/cosub_novelty/sandbox-results")

d.raw <- data.frame()

for (f in files) {

  jf <- paste("~/Work/MCC/git-mcc/cosub_novelty/sandbox-results/",f,sep="")

  jd <- fromJSON(paste(readLines(jf), collapse=""))

  id <- data.frame(workerid = jd$WorkerId, 

                   data = jd$answers$data$data

)

  d.raw <- bind_rows(d.raw, id)

}


d.pretty <- d.raw %>%

  group_by(workerid) %>%

  mutate(category = data.trial)

  






