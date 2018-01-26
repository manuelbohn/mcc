
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

// disabling next button in preview mode

$("#button").click(function() {
    //disable accept button if in turk preview mode
    if (turk.previewMode) {
      showSlide("instructions");
      alert("Please accept HIT to view");
    } else {
      showSlide('training')
    }
});

// Progress bar

$("#progressbar").progressbar();
$("#progressbar").progressbar( "option", "max", 10);

// move progress bar

function move() {
	$("#progressbar").progressbar("option", "value", 
        ($("#progressbar").progressbar( "option", "value")+1));
}


// preloading images and sounds

var folder = "images/";

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(png)$/) ) { 
                $("preload").append( "<img src='"+ folder + val +"'>" );
            } 
        });
    }
});


var folder2 = "sound/";

$.ajax({
    url : folder2,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(mp3)$/) ) { 
                $("body").append( "<audio src='"+ folder2 + val +"'>" );
            } 
        });
    }
});

// ## Configuration settings - create all the variables that are necesary for the experiment, figute our how to call them later 

var trial = ["train","train","finTrain",1,2,3,4,5,6]

var trainAgents = ["Elephant","Pig"]

var allAgents = ["Mouse","Dog","Tiger","Cat","Sheep","Bear","Monkey","Frog","Bunny"];
var testAgents = allAgents.sort(() => .5 - Math.random()).slice(0,6);
var remainingAgent = $.grep(allAgents, function(value) {
    return $.inArray(value, testAgents) < 0;});
var testAltAgent = remainingAgent.sort(() => .5 - Math.random()).slice(0,3);
var agents = trainAgents.concat(testAgents);
var altAgents = testAltAgent;

var trainSpeakerChange = [["false","false"]];
var testSpeakerChange = shuffle([shuffle(["true","false"]),shuffle(["false","true"]),shuffle(["false","true"])]);
var speakerChange = trainSpeakerChange.concat(testSpeakerChange);

var trainFruitLeft = ["car","duck"];
var trainFruitRight = ["bear","ball"];
var fruits = ["t1","t2","t3","t18","t5","t6","t7","t8","t17","t10", "t11","t12","t13","t15","t16"];
var testRightFruit = fruits.sort(() => .5 - Math.random()).slice(0,8);
var remainingFruits = $.grep(fruits, function(value) {
    return $.inArray(value, testRightFruit) < 0;});
var testLeftFruit = remainingFruits.sort(() => .5 - Math.random()).slice(0,8);
var leftFruit = trainFruitLeft.concat(testLeftFruit);
var rightFruit = trainFruitRight.concat(testRightFruit);


var agentOrientations = [
    ["straight","point_r1", "point_l1","disappear","straight2","point_l2", "point_r2","disappear","gone","down"],
    ["straight","point_l1", "point_r1","disappear","straight2","point_r2", "point_l2","disappear","gone","down"],
    ["straight","point_l1", "point_r1","disappear","straight2","point_l2", "point_r2","disappear","gone","down"],
    ["straight","point_r1", "point_l1","disappear","straight2","point_r2", "point_l2","disappear","gone","down"],
    ["straight","point_l1", "point_r1","disappear","straight2","point_l2", "point_r2","disappear","gone","down"],
    ["straight","point_r1", "point_l1","disappear","straight2","point_l2", "point_r2","disappear","gone","down"],
    ["straight","point_l1", "point_r1","disappear","straight2","point_r2", "point_l2","disappear","gone","down"],
    ["straight","point_r1", "point_l1","disappear","straight2","point_r2", "point_l2","disappear","gone","down"]];


var agentOrient = shuffle(agentOrientations);

var trainNovel = ["left","right"];
var testNovel = shuffle(["left","right","left","right","left","right"]);
var novel = trainNovel.concat(testNovel)

// Show the instructions slide .
showSlide("instructions");
  


// ## The main event
var experiment = {
  // Parameters for this sequence.
  trial: trial,
  speakerChange: speakerChange,
  agents: agents,
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
    setTimeout(function() { turk.submit(experiment) }, 8000);
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
        
   
    $("#text2").text("Click on the animal to continue")
        
    var endTime = (new Date()).getTime();    
    
    var corrFruit = $(".fruit_"+novel[0][0]).attr("src");
      
    var pick = event.target.src;
    
    if (pick.indexOf(corrFruit) > -1) {
        var correct =1
        } else {
        var correct = 0
        };
      
        
      data = {
        condition: "novelty",
        trial: trial[0],
        speakerChange: speakerChange[0][0],
        agent: agents[0],
        altAgent: altAgents[0],
        leftFruit: leftFruit[0],
        rightFruit: rightFruit[0],
        novel: novel[0],
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
     
    sourceRightFruit("images/empty.png");
    showRightFruit();
    sourceLeftFruit("images/empty.png");
    showLeftFruit();  
     
   
     if(speakerChange[0][0] == "true") {
        experiment.altAgents.shift()};
     
    experiment.trial.shift();  
    experiment.agentOrient.shift();   
    experiment.agents.shift();
    experiment.novel.shift();
    experiment.speakerChange[0].shift();
    experiment.rightFruit.shift();
    experiment.leftFruit.shift();
     
    if(speakerChange[0].length == 0) {
        experiment.speakerChange.shift();
    }
     
    // move progress bar 
   move()
     
    experiment.next();
  },
// Slide recording the choice


  choice: function(event) {
    
    showSlide("choice"); 
   
    setTimeout(function() {$("#text2").text("Click on the object")}, 13000);
    
      
    choiceLeftFruit("images/"+leftFruit[0]+".png");
    choiceRightFruit("images/"+rightFruit[0]+".png");
    
      
    if (speakerChange[0][0] == "true") {
        choiceAgent(altAgents[0]);
        $("#text2").text("");  
        $("#text3").text(agents[0]+" is gone ... now "+altAgents[0]+" is here");
    }else {
       choiceAgent(agents[0]);
        $("#text2").text("");  
        $("#text3").text(agents[0]+" is here");
    };
    
    
     if (experiment.trial[0] == "train"){
    } else {   
        
    $("#"+agents[0]+"_choice").animate({height: "380px",opacity: '0.3', queue: false, duration: "slow"});
    $("#"+agents[0]+"_choice").animate({height: "280px",opacity: '1', queue: false, duration: "slow"});
      
    $("#"+altAgents[0]+"_choice").animate({height: "380px",opacity: '0.3', queue: false, duration: "slow"});
    $("#"+altAgents[0]+"_choice").animate({height: "280px",opacity: '1', queue: false, duration: "slow"});
     };    
        
    if (experiment.trial[0] == "train"){
        sourceSound("sound/"+agents[0]+"_choice.mp3");
        playSound();
    } else { 
    
    if (experiment.speakerChange[0][0] == "true"){
        setTimeout(function() {
        sourceSound("sound/"+altAgents[0]+"_hello.mp3");
        playSound();}, 0);
       setTimeout(function() {
        sourceSound("sound/"+altAgents[0]+"_choice.mp3");
        playSound();}, 2500);
    } else {
       sourceSound("sound/"+agents[0]+"_return.mp3");
        setTimeout(function() {
        playSound();}, 0);
       setTimeout(function() {
        sourceSound("sound/"+agents[0]+"_choice.mp3");
        playSound();}, 2500);
            }; 
    }
      
      
setTimeout(function() {      
    $(".fruit_r").bind("click", experiment.eat);
    $(".fruit_l").bind("click", experiment.eat);
}, 9000);
  },
    
  train: function() {
      
    showSlide("stage");  
      
    showAgent(agents[0],experiment.agentOrient[0][0]);
    
    sourceRightFruit("images/"+rightFruit[0]+".png");
    showRightFruit();
    sourceLeftFruit("images/"+leftFruit[0]+".png");
    showLeftFruit();  

    if (experiment.agentOrient[0][0] == "point_l1" || experiment.agentOrient[0][0] == "point_r1") {
        experiment.choice();
        return;
    };  
   // play sound depending on agent orientation  
    
      
    if (experiment.agentOrient[0][0] == "straight") { 
    //inactivate next button for the time the sound is played 
        pause("next",2000); 
        sourceSound("sound/"+agents[0]+"_hello.mp3");
        playSound();
        $("#text").text(experiment.agents[0]+" is here");
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
        pause("next",2000); 
        sourceSound("sound/"+agents[0]+"_hello.mp3");
        playSound();
        $("#text").text(experiment.agents[0]+" is here");
    };  
    
    if (experiment.agentOrient[0][0] == "straight2") { 
    //inactivate next button for the time the sound is played 
        pause("next",1500); 
        sourceSound("sound/"+agents[0]+"_return.mp3");
        playSound();
        $("#text").text(experiment.agents[0]+" is here");
    };    
      
      
     if (experiment.novel[0] == "left"){
            if (experiment.agentOrient[0][0] == "point_r1"){
            pause("next",2300); 
            sourceSound("sound/"+agents[0]+"_point_old1.mp3");
            playSound();
            } else if (experiment.agentOrient[0][0] == "point_r2") {
            pause("next",2300); 
            sourceSound("sound/"+agents[0]+"_point_old2.mp3");
            playSound();
            } else if (experiment.agentOrient[0][0] == "point_l1") {
            pause("next",2300); 
            sourceSound("sound/"+agents[0]+"_point_nothing.mp3");
            playSound();
            }else if (experiment.agentOrient[0][0] == "point_l2") {
            pause("next",2300); 
            sourceSound("sound/"+agents[0]+"_point_nothing.mp3");
            playSound();
            };
        } else { 
            if (experiment.agentOrient[0][0] == "point_l1"){
            pause("next",2300); 
            sourceSound("sound/"+agents[0]+"_point_old1.mp3");
            playSound();
            } else if (experiment.agentOrient[0][0] == "point_l2") {
            pause("next",2300); 
            sourceSound("sound/"+agents[0]+"_point_old2.mp3");
            playSound();
            } else if (experiment.agentOrient[0][0] == "point_r1") {
            pause("next",2300); 
            sourceSound("sound/"+agents[0]+"_point_nothing.mp3");
            playSound();
            }else if (experiment.agentOrient[0][0] == "point_r2") {
            pause("next",2300); 
            sourceSound("sound/"+agents[0]+"_point_nothing.mp3");
            playSound();
            };
    }; 
            
    if (experiment.agentOrient[0][0].slice(0,-1) == "point_r") {
        setTimeout(function() {
            $("#fruit_r").animate({width: "300px",opacity: '0.3', queue: false, duration: 1000});
            $("#fruit_r").animate({width: "250px",opacity: '1', queue: false, duration: 1000})
        }, 1500)
    }; 
      
    if (experiment.agentOrient[0][0].slice(0,-1) == "point_l") {
        setTimeout(function() {
            $("#fruit_l").animate({width: "300px",opacity: '0.3', queue: false, duration: 1000});
            $("#fruit_l").animate({width: "250px",opacity: '1', queue: false, duration: 1000})
        }, 1500)
    }; 
    
    showSlide("stage");  
      
    showAgent(agents[0],experiment.agentOrient[0][0]);
 
    if (experiment.agentOrient[0][0] == "disappear") { 
        showAgent(agents[0],"straight")
        sourceSound("sound/ring.mp3")
        playSound();
        $("#text").text("");
        setTimeout(function()
            {showAgent(agents[0],"disappear")}, 1500);
        pause("next",3000);
        setTimeout(function()
            {$("#text").text(agents[0]+" is gone!")}, 3000);
        setTimeout(function(){hideAgent()}, 3000);
    };
      
      
     if (experiment.agentOrient[0][0] == "gone") {;
        pause("next",3000);
    };
    
      
    if (experiment.novel[0] == "right"){
            if (experiment.agentOrient[0][0] == "gone"){
            sourceRightFruit("images/"+rightFruit[0]+".png");
            showRightFruit();
            $("#fruit_r").css("bottom", "460px");     
            $("#fruit_r").animate({bottom: "165px"},{duration: 1500});
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
            $("#fruit_l").animate({bottom: "165px"},{duration: 1500});
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
