

// Full screen 

function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
      document.documentElement.requestFullScreen();  
    } else if (document.documentElement.mozRequestFullScreen) {  
      document.documentElement.mozRequestFullScreen();  
    } else if (document.documentElement.webkitRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
  } else {  
    if (document.cancelFullScreen) {  
      document.cancelFullScreen();  
    } else if (document.mozCancelFullScreen) {  
      document.mozCancelFullScreen();  
    } else if (document.webkitCancelFullScreen) {  
      document.webkitCancelFullScreen();  
    }  
  }  
}



// ## Helper functions


function showSlide(id) {
  // Hide all slides
	$(".slide").hide();
	// Show just the slide we want to show
	$("#"+id).show();
}

function showText(id) {
  // Hide all slides
	$(".text").hide();
	// Show just the slide we want to show
	$("#"+id).show();
}


function showAgent(id, orient) {
  // Hide all slides
	$(".agent").hide();
    $(".point_agent_l").hide();
    $(".point_agent_r").hide();
	// Show just the slide we want to show
	$("#"+id+"_"+orient).show();
}

function hideAgent() {
  // Hide all slides
	$(".agent").hide();
}


function choiceAgent(id) {
  // Hide all slides
	$(".agent").hide();
	// Show just the agent we want to show
	$("#"+id+"_choice").show();
}

function sourceRightFruit(a) {
        document.getElementById("fruit_r").src=a;
    };

function sourceLeftFruit(b) {
        document.getElementById("fruit_l").src=b;
    };

function showRightFruit() {
    document.getElementById('fruit_r').style.visibility='visible';
      };

function hideRightFruit() {
    document.getElementById('fruit_r').style.visibility='hidden';
      };

function showLeftFruit() {
    document.getElementById('fruit_l').style.visibility='visible';
      };

function hideLeftFruit() {
    document.getElementById('fruit_l').style.visibility='hidden';
      };

function showEat(id) {
	$(".agent_eat").hide();
	$("#"+id+"_eat").show();
};

function choiceLeftFruit(a) {
        document.getElementById("choiceFruit_l").src=a;
    };

function choiceRightFruit(a) {
        document.getElementById("choiceFruit_r").src=a;
    };

function getTime1() {
    return startTime = (new Date()).getTime();
};

// Get a random integer less than n.
function randomInteger(n) {
	return Math.floor(Math.random()*n);
};

function randomElement(array) {
  return array[randomInteger(array.length)];
};

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


function sourceSound(c) {
        document.getElementById("sound").src=c;
    };
function playSound() {
    document.getElementById("sound").play();
      };



  function pause(id,time){
      $("#"+id).hide();
      setTimeout(function() {
           $("#"+id).show();    
       }, time); 
    };

// ## Configuration settings - create all the variables that are necesary for the experiment, figute our how to call them later 

var trial = ["train","train","finTrain",1]

var trainAgents = ["Dog","Tiger"]
var trainAltAgent = ["Bunny"]
var allAgents = ["Frog","Beaver","Mouse","Ape","Bunny","Elefant","Dog","Bear","Tiger","Pig","Cat","Sheep"];
var testAgents = allAgents.sort(() => .5 - Math.random()).slice(0,4);
var remainingAgent = $.grep(allAgents, function(value) {
    return $.inArray(value, testAgents) < 0;});
var testAltAgent = remainingAgent.sort(() => .5 - Math.random()).slice(0,2);
var agents = trainAgents.concat(testAgents);
var altAgents = trainAltAgent.concat(testAltAgent);

var trainSounds = [["fball","mball"],["fcar","mcar"]]
var testSounds = shuffle([
        shuffle(["furbe","murbe"]),
        shuffle(["fkepel","mkepel"]),
        shuffle(["ftutta","mtutta"]),
        shuffle(["foskot","moskot"]),
        shuffle(["fmodi","mmodi"]),
        shuffle(["fzoyar","mzoyar"]),
        shuffle(["fwiso","mwiso"]),
        shuffle(["fchikon","mchikon"])]);

var sounds = trainSounds.concat(testSounds);

var trainSpeakerChange = [["false","false"]];
var testSpeakerChange = shuffle([shuffle(["true","false"]),shuffle(["false","true"])]);
var speakerChange = trainSpeakerChange.concat(testSpeakerChange);

var trainFruitLeft = ["ball","duck"];
var trainFruitRight = ["bear","car"];
var fruits = ["t1", "t2","t3","t4","t5","t6","t7","t8","t9","t10", "t11","t12","t13","t14","t15","t16"];
var testRightFruit = fruits.sort(() => .5 - Math.random()).slice(0,4);
var remainingFruits = $.grep(fruits, function(value) {
    return $.inArray(value, testRightFruit) < 0;});
var testLeftFruit = remainingFruits.sort(() => .5 - Math.random()).slice(0,4);
var leftFruit = trainFruitLeft.concat(testLeftFruit);
var rightFruit = trainFruitRight.concat(testRightFruit);


var agentOrientations = [
    ["straight","point_l", "point_r","disappear","gone","down"],
    ["straight","point_r", "point_l","disappear","gone","down"],
    ["straight","point_l", "point_r","disappear","gone","down"],
    ["straight","point_r", "point_l","disappear","gone","down"],
    ["straight","point_l", "point_r","disappear","gone","down"],
    ["straight","point_r", "point_l","disappear","gone","down"]];

var agentOrient = shuffle(agentOrientations);

var trainNovel = ["left","right"];
var testNovel = shuffle(["left","right","left","right"]);
var novel = trainNovel.concat(testNovel)

// Show the instructions slide .
showSlide("instructions");


// ## The main event
var experiment = {
  // Parameters for this sequence.
  trial: trial,
  speakerChange: speakerChange,
  agents: agents,
  sounds: sounds,
  altAgents: altAgents,
  agentOrient: agentOrient,
  rightFruit: rightFruit,
  leftFruit: leftFruit,
  novel: novel,
  data: [],
  end: function() {
    // Show the finish slide.
    showSlide("finished");
    // Wait 1.5 seconds and then submit the whole experiment object to Mechanical Turk (mmturkey filters out the functions so we know we're just submitting properties [i.e. data])
    setTimeout(function() { turk.submit(experiment) }, 1500);
  },
    
   endTraining: function() {
    showSlide("training2");
  }, 
    
   eat: function(event) {
    // Show the finish slide.
    showSlide("eat");
    
    sourceSound("sound/end.mp3");
    playSound();
        
    if (speakerChange[0][0] == "true"){
        showEat(altAgents[0])
    } else {
        showEat(agents[0])
    };
        
   
    $("#continue").text("Click on the animal to continue")
        
    var endTime = (new Date()).getTime();    
    
    var corrFruit = $(".fruit_"+novel[0][0]).attr("src");
      
    var pick = event.target.src;
    
    if (pick.indexOf(corrFruit) > -1) {
        var correct =1
        } else {
        var correct = 0
        };
      
        
      data = {
        trial: trial[0],
        speakerChange: speakerChange[0][0],
        agent: agents[0],
        altAgent: altAgents[0],
        leftFruit: leftFruit[0],
        rightFruit: rightFruit[0],
        novel: novel[0],
        sound: sounds[0],
        pick: pick,
        correct: correct,
        rt: endTime - startTime,
            };
      experiment.data.push(data);
        
     $(".agent_eat").bind("click", experiment.newtrial);     
  },
        
 newtrial: function() {
    
    $(".agent_eat").unbind("click"); 
    $(".fruit_r").unbind("click");
    $(".fruit_l").unbind("click");
    $("#text").text("");
    $("#text2").text("");
    $("#text3").text("");
   
     if(speakerChange[0][0] == "true") {
        experiment.altAgents.shift()};
     
    experiment.trial.shift();  
    experiment.agentOrient.shift();   
    experiment.agents.shift();
    experiment.novel.shift();
    experiment.speakerChange[0].shift();
    experiment.rightFruit.shift();
    experiment.leftFruit.shift();
    experiment.sounds.shift();
     
    if(speakerChange[0].length == 0) {
        experiment.speakerChange.shift();
    }
     
    experiment.next();
  },
// Slide recording the choice


  choice: function(event) {
    
    showSlide("choice"); 
   
    setTimeout(function() {$("#text2").text("Click on the  toy")}, 15000);
    
      
    choiceLeftFruit("images/"+leftFruit[0]+".png");
    choiceRightFruit("images/"+rightFruit[0]+".png");
       
      
    if (speakerChange[0][0] == "true") {
        choiceAgent(altAgents[0]);
        $("#text2").text("");  
        $("#text3").text(altAgents[0]+" is here");
    }else{
       choiceAgent(agents[0]);
        $("#text2").text("");  
        $("#text3").text(agents[0]+" is here");
    };
    
       
    $("#"+agents[0]+"_choice").animate({height: "180px",opacity: '0.3', queue: false, duration: "slow"});
    $("#"+agents[0]+"_choice").animate({height: "280px",opacity: '1', queue: false, duration: "slow"});
      
    $("#"+altAgents[0]+"_choice").animate({height: "180px",opacity: '0.3', queue: false, duration: "slow"});
    $("#"+altAgents[0]+"_choice").animate({height: "280px",opacity: '1', queue: false, duration: "slow"});
    
    if (experiment.speakerChange[0][0] == "true"){
        sourceSound("sound/"+sounds[0][1]+"_id.mp3");
        playSound();
       setTimeout(function() {
        sourceSound("sound/"+sounds[0][1]+"_choice.mp3");
        playSound();}, 2000);
    } else {
       sourceSound("sound/"+sounds[0][0]+"_id.mp3");
        playSound();
       setTimeout(function() {
        sourceSound("sound/"+sounds[0][0]+"_choice.mp3");
        playSound();}, 2000);
            }; 
      
      
setTimeout(function() {      
    $(".fruit_r").bind("click", experiment.eat);
    $(".fruit_l").bind("click", experiment.eat);
}, 6000);
  
  },
    
  train: function() {
      
    showSlide("stage");  
      
    showAgent(agents[0],experiment.agentOrient[0][0]);
    
    sourceRightFruit("images/"+rightFruit[0]+".png");
    showRightFruit();
    sourceLeftFruit("images/"+leftFruit[0]+".png");
    showLeftFruit();  

    if (experiment.agentOrient[0][0] == "disappear") {
        experiment.choice();
        return;
    };  
   // play sound depending on agent orientation  
    
      
    if (experiment.agentOrient[0][0] == "straight") { 
    //inactivate next button for the time the sound is played 
        pause("next",1500); 
        sourceSound("sound/"+sounds[0][0]+"_id.mp3");
        playSound();
        $("#text").text(experiment.agents[0]+" is here");
        };  
       
    if (experiment.agentOrient[0][0] == "point_l" ||experiment.agentOrient[0][0] == "point_r") { 
        pause("next",2300); 
        sourceSound("sound/"+sounds[0][0]+"_point.mp3");
        playSound();
    };  
      
    if (experiment.agentOrient[0][0] == "point_r") {
        setTimeout(function() {
            $("#fruit_r").animate({width: "300px",opacity: '0.3', queue: false, duration: 1000});
            $("#fruit_r").animate({width: "250px",opacity: '1', queue: false, duration: 1000})
        }, 1400)
    }; 
      
    if (experiment.agentOrient[0][0] == "point_l") {
        setTimeout(function() {
            $("#fruit_l").animate({width: "300px",opacity: '0.3', queue: false, duration: 1000});
            $("#fruit_l").animate({width: "250px",opacity: '1', queue: false, duration: 1000})
        }, 1400)
    }; 
      
      experiment.agentOrient[0].shift();
     
  },  
    
  // The work horse of the sequence - what to do on every trial.
  next: function() {
  // when no more trials are left, end experiment
     
    if (experiment.trial[0] == "train"){
        experiment.train();
        return;
    };
      
    if (experiment.trial[0] == "finTrain"){
        experiment.endTraining();
        experiment.trial.shift();
        return;
    };
      
    if (experiment.trial.length == 0){
        setTimeout(function() {experiment.end() }, 0);
      return;
    };  
  // after the agent trial sequence is finished, switch to choice      
    if (experiment.agentOrient[0][0] == "down") {
      setTimeout(function() {experiment.choice() }, 0);
      return;
    };  
   // play sound depending on agent orientation  
    
      
    if (experiment.agentOrient[0][0] == "straight") { 
    //inactivate next button for the time the sound is played 
        pause("next",1500); 
        sourceSound("sound/"+sounds[0][0]+"_id.mp3");
        playSound();
        $("#text").text(experiment.agents[0]+" is here");
    };  
    
      
      
    if (experiment.agentOrient[0][0] == "point_l" ||experiment.agentOrient[0][0] == "point_r") { 
        pause("next",2300); 
        sourceSound("sound/"+sounds[0][0]+"_point.mp3");
        playSound();
    };  
      
    if (experiment.agentOrient[0][0] == "point_r") {
        setTimeout(function() {
            $("#fruit_r").animate({width: "300px",opacity: '0.3', queue: false, duration: 1000});
            $("#fruit_r").animate({width: "250px",opacity: '1', queue: false, duration: 1000})
        }, 1400)
    }; 
      
    if (experiment.agentOrient[0][0] == "point_l") {
        setTimeout(function() {
            $("#fruit_l").animate({width: "300px",opacity: '0.3', queue: false, duration: 1000});
            $("#fruit_l").animate({width: "250px",opacity: '1', queue: false, duration: 1000})
        }, 1400)
    }; 
    
    showSlide("stage");  
      
    showAgent(agents[0],experiment.agentOrient[0][0]);
 
    if (experiment.agentOrient[0][0] == "disappear") { 
        showAgent(agents[0],"straight")
        sourceSound("sound/ring.mp3")
        playSound();
        $("#text").text("");
        setTimeout(function()
            {showAgent(agents[0],"disappear")}, 3000);
        pause("next",5500);
        setTimeout(function()
            {$("#text").text(agents[0]+" is gone!")}, 5000);
//        setTimeout(function() {showText()}, 4500);
        setTimeout(function(){hideAgent()}, 5000);
    };
      
      
     if (experiment.agentOrient[0][0] == "gone") {;
        $("#text").text("")
        pause("next",4000);
    };
    
      
    if (experiment.novel[0] == "right"){
            if (experiment.agentOrient[0][0] == "gone"){
            sourceRightFruit("images/"+rightFruit[0]+".png");
            showRightFruit();
            $("#fruit_r").css("bottom", "460px");     
            $("#fruit_r").animate({bottom: "160px"},{duration: 1500});
            sourceLeftFruit("images/"+leftFruit[0]+".png");
            showLeftFruit();
            setTimeout(function() { 
            $("#fruit_r").animate({width: "300px", opacity: '0.3', queue: false, duration: "slow"});
            $("#fruit_l").animate({width: "300px",opacity: '0.3', queue: false, duration: "slow"});
            $("#fruit_l").animate({width: "250px",opacity: '1', queue: false, duration: "slow"});
            $("#fruit_r").animate({width: "250px",opacity: '1', queue: false, duration: "slow"})}, 2500)
            } else {
            sourceRightFruit("images/"+rightFruit[0]+".png");
            hideRightFruit();
            sourceLeftFruit("images/"+leftFruit[0]+".png");
            showLeftFruit();
            }
    } else {if (experiment.agentOrient[0][0] == "gone"){
            sourceLeftFruit("images/"+leftFruit[0]+".png");
            showLeftFruit();
            $("#fruit_l").css("bottom", "460px");     
            $("#fruit_l").animate({bottom: "160px"},{duration: 1500});
            sourceRightFruit("images/"+rightFruit[0]+".png");
            showRightFruit();
            setTimeout(function() { 
            $("#fruit_l").animate({width: "300px", opacity: '0.3', queue: false, duration: "slow"});
            $("#fruit_r").animate({width: "300px",opacity: '0.3', queue: false, duration: "slow"});
            $("#fruit_r").animate({width: "250px",opacity: '1', queue: false, duration: "slow"});
            $("#fruit_l").animate({width: "250px",opacity: '1', queue: false, duration: "slow"})}, 2500);
            } else {
            sourceRightFruit("images/"+rightFruit[0]+".png");
            showRightFruit();
            sourceLeftFruit("images/"+leftFruit[0]+".png");
            hideLeftFruit();
            }
    };
      
    experiment.agentOrient[0].shift();
  }
};