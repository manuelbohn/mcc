
// ## Helper functions

function showSlide(id) {
  // Hide all slides
	$(".slide").hide();
	// Show just the slide we want to show
	$("#"+id).show();
}

function showText(id) {
	$(".text").hide();
	$("#"+id).show();
}


function showAgent(id, orient) {
	$(".agent").hide();
    $(".point_agent_l").hide();
    $(".point_agent_r").hide();
	$("#"+id+"_"+orient).show();
}

function hideAgent() {
	$(".agent").hide();
}


function choiceAgent(id) {
	$(".agent").hide();
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
$("#progressbar").progressbar( "option", "max", 12);

// move progress bar

function move() {
	$("#progressbar").progressbar("option", "value", 
        ($("#progressbar").progressbar( "option", "value")+1));
}


// preloading images and sounds
// images

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

// sound

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


// Variables and randomization for the experiment

var trial = ["train","train","finTrain",1,2,3,4,5,6,7,8]

// agents for training and test
var trainAgents = ["Elephant","Pig"]
var allAgents = ["Elephant","Pig","Frog","Mouse","Monkey","Bunny","Dog","Bear","Tiger","Cat","Sheep","Beaver"];

// randomization of agent and speaker change agent order for test trials
var testAgents = allAgents.sort(() => .5 - Math.random()).slice(0,8);
var remainingAgent = $.grep(allAgents, function(value) {
    return $.inArray(value, testAgents) < 0;});
var testAltAgent = remainingAgent.sort(() => .5 - Math.random()).slice(0,4);
var agents = trainAgents.concat(testAgents);
var altAgents = testAltAgent;

// randomizing order of speaker change
var trainSpeakerChange = [["false","false"]];
var testSpeakerChange = shuffle([shuffle(["true","false"]),shuffle(["false","true"]),shuffle(["false","true"]),shuffle(["false","true"])]);
var speakerChange = trainSpeakerChange.concat(testSpeakerChange);

// objects on tables in training and test (fruits = toys)
var trainFruitLeft = ["car","duck"];
var trainFruitRight = ["bear","ball"];
var fruits = ["t1", "t2","t3","t4","t5","t6","t7","t8","t9","t10", "t11","t12","t13","t14","t15","t16","t17","t18"];

// randomizing order and combiantion of test objects
var testRightFruit = fruits.sort(() => .5 - Math.random()).slice(0,8);
var remainingFruits = $.grep(fruits, function(value) {
    return $.inArray(value, testRightFruit) < 0;});
var testLeftFruit = remainingFruits.sort(() => .5 - Math.random()).slice(0,8);
var leftFruit = trainFruitLeft.concat(testLeftFruit);
var rightFruit = trainFruitRight.concat(testRightFruit);

// orientation of agent during the exposure sequence
var agentOrientations = [
    ["straight","point","disappear","gone","down"],
    ["straight","point","disappear","gone","down"],
    ["straight","point","disappear","gone","down"],
    ["straight","point","disappear","gone","down"],
    ["straight","point","disappear","gone","down"],
    ["straight","point","disappear","gone","down"],
    ["straight","point","disappear","gone","down"],
    ["straight","point","disappear","gone","down"],
    ["straight","point","disappear","gone","down"],
    ["straight","point","disappear","gone","down"]];

// randomize agent orientations 
var agentOrient = shuffle(agentOrientations);

// randomizing location of target object (i.e. novel object)
var trainNovel = ["left","right"];
var testNovel = shuffle(["left","right","left","right","left","right","left","right"]);
var novel = trainNovel.concat(testNovel)

// Show the instructions slide .
showSlide("instructions");
  

// beginning of actual experiment
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
    
// end of the experiment
  end: function() {
    // Show the finish slide.
    showSlide("finished");
    setTimeout(function() { turk.submit(experiment) }, 8000);
  },
 
// end of training
   endTraining: function() {
    showSlide("training2");
  }, 
   
// what happens between trials - display agent from previous trial and click on it to move on to the next trial   
   eat: function(event) {

    showSlide("eat");
    
    sourceSound("sound/end.mp3");
    playSound();
    
    // display same agent as during choice
    if (speakerChange[0][0] == "true"){
        showEat(altAgents[0])
    } else {
        showEat(agents[0])
    };
        
   
    $("#text2").text("Click on the animal to continue")
    
    // get time for reaction time    
    var endTime = (new Date()).getTime();    
    // select correct object
    var corrFruit = $(".fruit_"+novel[0][0]).attr("src");
    // select chosen object    
    var pick = event.target.src;
    // code correct: does name of chosen object contain the name of the correct object
    if (pick.indexOf(corrFruit) > -1) {
        var correct =1
        } else {
        var correct = 0
        };
      
    // data collected 
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
  
// unbind and shif variables between trials     
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
     
    // move progress bar and move on
    move()
    experiment.next();
  },


// recording the choice 
  choice: function(event) {
    
    showSlide("choice"); 
   
    setTimeout(function() {$("#text2").text("Click on the object")}, 12000);
    
    // show objects  
    choiceLeftFruit("images/"+leftFruit[0]+".png");
    choiceRightFruit("images/"+rightFruit[0]+".png");
    
    // show agent depending on speaker change and write their name   
    if (speakerChange[0][0] == "true") {
        choiceAgent(altAgents[0]);
        $("#text2").text("");  
        $("#text3").text(agents[0]+" is gone ... now "+altAgents[0]+" is here");
    }else {
       choiceAgent(agents[0]);
        $("#text2").text("");  
        $("#text3").text(agents[0]+" is here");
    };
    
   
    // animate agent in test trials
     if (experiment.trial[0] == "train"){
    } else {     
    $("#"+agents[0]+"_choice").animate({height: "380px",opacity: '0.3', queue: false, duration: "slow"});
    $("#"+agents[0]+"_choice").animate({height: "280px",opacity: '1', queue: false, duration: "slow"});
      
    $("#"+altAgents[0]+"_choice").animate({height: "380px",opacity: '0.3', queue: false, duration: "slow"});
    $("#"+altAgents[0]+"_choice").animate({height: "280px",opacity: '1', queue: false, duration: "slow"});
     };    
    
    // play choice sound only in training
    if (experiment.trial[0] == "train"){
        sourceSound("sound/"+agents[0]+"_train.mp3");
        playSound();
    } else { 
   // play hello/return sound and choice depending on speaker chnage condition in test trials 
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
      
    // choice can be made by clicking the objects after - possible after 9s   
    setTimeout(function() {      
    $(".fruit_r").bind("click", experiment.eat);
    $(".fruit_l").bind("click", experiment.eat);
}, 7000);
  },
  
// sequence of events during training exposure
  train: function() {
      
    showSlide("stage");  
    // show agent 
    showAgent(agents[0],experiment.agentOrient[0][0]);
    
    // show objects on both sides
    sourceRightFruit("images/"+rightFruit[0]+".png");
    showRightFruit();
    sourceLeftFruit("images/"+leftFruit[0]+".png");
    showLeftFruit();   
    
    
    // agent says hello  
    if (experiment.agentOrient[0][0] == "straight") { 
    //inactivate next button for the time the sound is played 
        pause("next",2000); 
        sourceSound("sound/"+agents[0]+"_hello.mp3");
        playSound();
        $("#text").text(experiment.agents[0]+" is here");
        };  
    
     // move to choice after agent has said hello
        if (experiment.agentOrient[0][0] == "point") {
        experiment.choice();
        return;
    };   
      
      experiment.agentOrient[0].shift();
     
  },  
    
// moving on within a trial
  next: function() {
// if training trial, do training sequence
    if (experiment.trial[0] == "train"){
        experiment.train();
        return;
    };
// if training is over show sinished training slide
    if (experiment.trial[0] == "finTrain"){
        experiment.endTraining();
        experiment.trial.shift();
        return;
    };
// if no more trials are left, end experiment        
    if (experiment.trial.length == 0){
        setTimeout(function() {experiment.end() }, 0);
      return;
    };  

 // after exposure is finished, switch to choice      
    if (experiment.agentOrient[0][0] == "down") {
      setTimeout(function() {experiment.choice() }, 0);
      return;
    };  
   
    showSlide("stage");  
      
    showAgent(agents[0],experiment.agentOrient[0][0]);    
      
   // play sound depending on agent orientation 
// agent says hello
    if (experiment.agentOrient[0][0] == "straight") { 
        pause("next",2000); 
        sourceSound("sound/"+agents[0]+"_hello.mp3");
        playSound();
        $("#text").text(experiment.agents[0]+" is here");
    };  
// agent says hello when returning    
    if (experiment.agentOrient[0][0] == "straight2") { 
        pause("next",1500); 
        sourceSound("sound/"+agents[0]+"_return.mp3");
        playSound();
        $("#text").text(experiment.agents[0]+" is here");
    };    
      
// commenting on objects (or their absence) on the tables depending on condition    
      if (experiment.agentOrient[0][0] == "point" && experiment.novel[0] == "left"){
          pause("next",2300);    
          showAgent(agents[0],"point_r")
          // showAgent(agents[0],"point_l")
          
          sourceSound("sound/"+agents[0]+"_point_old1.mp3");
          // sourceSound("sound/"+agents[0]+"_point_nothing.mp3");
          
          playSound();
          
     } else if (experiment.agentOrient[0][0] == "point" && experiment.novel[0] == "right") {
         pause("next",2300);    
         showAgent(agents[0],"point_l")
          // showAgent(agents[0],"point_r")
          
          sourceSound("sound/"+agents[0]+"_point_old1.mp3");
          // sourceSound("sound/"+agents[0]+"_point_nothing.mp3");
          
          playSound();
    }; 
    
// animate object when visible and pointed at  
    if (experiment.agentOrient[0][0] == "point" && experiment.novel[0] == "left") {
        setTimeout(function() {
            $("#fruit_r").animate({width: "200px",opacity: '0.3', queue: false, duration: 1000});
            $("#fruit_r").animate({width: "130px",opacity: '1', queue: false, duration: 1000})
        }, 1500)
    }; 
      
    if (experiment.agentOrient[0][0] == "point" && experiment.novel[0] == "right") {
        setTimeout(function() {
            $("#fruit_l").animate({width: "200px",opacity: '0.3', queue: false, duration: 1000});
            $("#fruit_l").animate({width: "130px",opacity: '1', queue: false, duration: 1000})
        }, 1500)
    }; 
    

 // after agent has commented on both locations, play ring sound and briefly show disappearing agent and then hide agent
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
      
   
// while agent is gone the second time, the novel object appears. After appearing both objects quickly flash
     if (experiment.agentOrient[0][0] == "gone") {;
        pause("next",3000);
    }; 
    if (experiment.novel[0] == "right"){
            if (experiment.agentOrient[0][0] == "gone"){
            sourceRightFruit("images/"+rightFruit[0]+".png");
            showRightFruit();
            $("#fruit_r").css("bottom", "460px");     
            $("#fruit_r").animate({bottom: "250px"},{duration: 1500});
            sourceLeftFruit("images/"+leftFruit[0]+".png");
            showLeftFruit();
            setTimeout(function() { 
            $("#fruit_r").animate({width: "200px", opacity: '0.3', queue: false, duration: "slow"});
            $("#fruit_l").animate({width: "200px",opacity: '0.3', queue: false, duration: "slow"});
            $("#fruit_l").animate({width: "130px",opacity: '1', queue: false, duration: "slow"});
            $("#fruit_r").animate({width: "130px",opacity: '1', queue: false, duration: "slow"})}, 2500)
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
            $("#fruit_l").animate({bottom: "250px"},{duration: 1500});
            sourceRightFruit("images/"+rightFruit[0]+".png");
            showRightFruit();
            setTimeout(function() { 
            $("#fruit_l").animate({width: "200px", opacity: '0.3', queue: false, duration: "slow"});
            $("#fruit_r").animate({width: "200px",opacity: '0.3', queue: false, duration: "slow"});
            $("#fruit_r").animate({width: "130px",opacity: '1', queue: false, duration: "slow"});
            $("#fruit_l").animate({width: "130px",opacity: '1', queue: false, duration: "slow"})}, 2500);
            } else {
            sourceRightFruit("images/"+rightFruit[0]+".png");
            showRightFruit();
            sourceLeftFruit("images/"+leftFruit[0]+".png");
            hideLeftFruit();
            }
    };
// move on to next phase of exposure 
    experiment.agentOrient[0].shift();
  }
};
