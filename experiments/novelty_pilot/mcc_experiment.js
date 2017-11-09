
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
	// Show just the slide we want to show
	$("#"+id+"_"+orient).show();
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
	$(".eat").hide();
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

var trial = ["train","train","finTrain",1,2,3,4]

var trainAgents = ["mole","hedge"]
var trainAltAgent = ["duck"]
var allAgents = ["hedge","mole","mouse","rabbit","elefant","duck"];
var testAgents = allAgents.sort(() => .5 - Math.random()).slice(0,4);
var remainingAgent = $.grep(allAgents, function(value) {
    return $.inArray(value, testAgents) < 0;});
var testAltAgent = remainingAgent.sort(() => .5 - Math.random()).slice(0,2);
var agents = trainAgents.concat(testAgents);
var altAgents = trainAltAgent.concat(testAltAgent);

var trainSpeakerChange = [["false","true"]];
var testSpeakerChange = shuffle([shuffle(["true","false"]),shuffle(["false","true"])]);
var speakerChange = trainSpeakerChange.concat(testSpeakerChange);

var trainFruitLeft = ["apple","carrot"];
var trainFruitRight = ["carrot","apple"];
var fruits = ["dragonfruit", "grape","onion","apple","carrot","potato","kiwi","orange"];
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

var trainNovel = shuffle(["left","right"]);
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
       
       
    if (speakerChange[0][0] == "true"){
        showEat(altAgents[0])
    } else {
        showEat(agents[0])
    };
        
    sourceSound("sound/"+agents[0]+"_eat.mp3");
        playSound();
        
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
        pick: pick,
        correct: correct,
        rt: endTime - startTime,
            };
      experiment.data.push(data);
        
     $(".eat").bind("click", experiment.newtrial);     
  },
        
 newtrial: function() {
    
    $(".eat").unbind("click"); 
    $(".fruit_r").unbind("click");
    $(".fruit_l").unbind("click");
   
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
     
    experiment.next();
  },
// Slide recording the choice


  choice: function(event) {
    
    showSlide("choice");
    
    showText("back");
    setTimeout(function() {showText()}, 3000);
    
      
    choiceLeftFruit("images/"+leftFruit[0]+".png");
    choiceRightFruit("images/"+rightFruit[0]+".png");
       
      
    if (speakerChange[0][0] == "true") {
        choiceAgent(altAgents[0]);
    }else{
       choiceAgent(agents[0]);
    };
    
       
    $("#"+agents[0]+"_choice").animate({height: "268px",opacity: '0.3', queue: false, duration: "slow"});
    $("#"+agents[0]+"_choice").animate({height: "168px",opacity: '1', queue: false, duration: "slow"});
      
    $("#"+altAgents[0]+"_choice").animate({height: "268px",opacity: '0.3', queue: false, duration: "slow"});
    $("#"+altAgents[0]+"_choice").animate({height: "168px",opacity: '1', queue: false, duration: "slow"});
    
    if (experiment.trial[0] == "train"){
        sourceSound("sound/"+agents[0]+"_id.mp3");
        playSound();
       setTimeout(function() {
        sourceSound("sound/carrot.mp3");
        playSound();}, 1500);
    } else if (speakerChange[0][0] == "true") {
        sourceSound("sound/"+altAgents[0]+"_id.mp3");
        playSound();
       setTimeout(function() {
        sourceSound("sound/"+altAgents[0]+"_choice.mp3");
        playSound();}, 1500);
    }else{
       sourceSound("sound/"+agents[0]+"_id.mp3");
        playSound();
       setTimeout(function() {
        sourceSound("sound/"+agents[0]+"_choice.mp3");
        playSound();}, 1500);
    };  
   
      
setTimeout(function() {      
    $(".fruit_r").bind("click", experiment.eat);
    $(".fruit_l").bind("click", experiment.eat);
}, 6000);
  
  },
    
    
    
  // The work horse of the sequence - what to do on every trial.
  next: function() {
  // when no more trials are left, end experiment
    
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
        sourceSound("sound/"+agents[0]+"_id.mp3");
        playSound();
        showText("hello");
        setTimeout(function() {showText()}, 2000);
    };  
    
      
      
    if (experiment.agentOrient[0][0] == "point_l" ||experiment.agentOrient[0][0] == "point_r") { 
        pause("next",2300); 
        sourceSound("sound/"+agents[0]+"_point.mp3");
        playSound();
    };  
      
    if (experiment.agentOrient[0][0] == "point_r") {
        setTimeout(function() {
            $("#fruit_r").animate({height: "100px",opacity: '0.3', queue: false, duration: 1000});
            $("#fruit_r").animate({height: "60px",opacity: '1', queue: false, duration: 1000})
        }, 1400)
    }; 
      
    if (experiment.agentOrient[0][0] == "point_l") {
        setTimeout(function() {
            $("#fruit_l").animate({height: "100px",opacity: '0.3', queue: false, duration: 1000});
            $("#fruit_l").animate({height: "60px",opacity: '1', queue: false, duration: 1000})
        }, 1400)
    }; 
    
    showSlide("stage");  
      
    showAgent(agents[0],experiment.agentOrient[0][0]);
 
    if (experiment.agentOrient[0][0] == "disappear") { 
        showText("mgone");
        setTimeout(function() {showText()}, 2500);
        pause("next",2500);
    };
      
      
    if (experiment.novel[0] == "right"){
            if (experiment.agentOrient[0][0] == "gone"){
            sourceRightFruit("images/"+rightFruit[0]+".png");
            showRightFruit();
            $("#fruit_r").css("top", "110px");     
            $("#fruit_r").animate({top: "410px"},{duration: 1500});
            sourceLeftFruit("images/"+leftFruit[0]+".png");
            showLeftFruit();
            setTimeout(function() { 
            $("#fruit_r").animate({height: "100px", opacity: '0.3', queue: false, duration: "slow"});
            $("#fruit_l").animate({height: "100px",opacity: '0.3', queue: false, duration: "slow"});
            $("#fruit_l").animate({height: "60px",opacity: '1', queue: false, duration: "slow"});
            $("#fruit_r").animate({height: "60px",opacity: '1', queue: false, duration: "slow"})}, 2500)
            } else {
            sourceRightFruit("images/"+rightFruit[0]+".png");
            hideRightFruit();
            sourceLeftFruit("images/"+leftFruit[0]+".png");
            showLeftFruit();
            }
    } else {if (experiment.agentOrient[0][0] == "gone"){
            sourceLeftFruit("images/"+leftFruit[0]+".png");
            showLeftFruit();
            $("#fruit_l").css("top", "110px");     
            $("#fruit_l").animate({top: "410px"},{duration: 1500});
            sourceRightFruit("images/"+rightFruit[0]+".png");
            showRightFruit();
            setTimeout(function() { 
            $("#fruit_l").animate({height: "100px", opacity: '0.3', queue: false, duration: "slow"});
            $("#fruit_r").animate({height: "100px",opacity: '0.3', queue: false, duration: "slow"});
            $("#fruit_r").animate({height: "60px",opacity: '1', queue: false, duration: "slow"});
            $("#fruit_l").animate({height: "60px",opacity: '1', queue: false, duration: "slow"})}, 2500);
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
