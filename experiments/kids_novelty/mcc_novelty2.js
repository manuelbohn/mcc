// preload
var preFruits = ["duck.png","car.png","bear.png","ball.png","t1.png", "t2.png", "t3.png", "t4.png", "t5.png", "t6.png", "t7.png", "t8.png", "t9.png", "t10.png", "t11.png", "t12.png", "t13.png", "t14.png", "t15.png", "t16.png", "t17.png", "t18.png","back1.jpg","back2.jpg","back3.jpg","back4.jpg","back5.jpg","back6.jpg","back7.jpg","back8.jpg","back9.jpg","empty.png"];

//for critical trials and fillers
var images = new Array();
for (i = 0; i < preFruits.length; i++) {
	images[i] = new Image();
	images[i].src = "images/" + preFruits[i];
}


var preSounds = ["Frog_choice.mp3", "Mouse_choice.mp3", "Bear_choice.mp3", "Beaver_choice.mp3", "Monkey_choice.mp3", "Dog_choice.mp3", "Cat_choice.mp3", "Bunny_choice.mp3", "Tiger_choice.mp3", "Sheep_choice.mp3","Pig_choice.mp3","Pig_train.mp3","Elephant_choice.mp3","Elephant_train.mp3","Frog_hello.mp3", "Mouse_hello.mp3", "Bear_hello.mp3", "Monkey_hello.mp3", "Dog_hello.mp3", "Cat_hello.mp3", "Bunny_hello.mp3", "Tiger_hello.mp3", "Sheep_hello.mp3","Pig_hello.mp3","Elephant_hello.mp3", "Beaver_hello.mp3","end.mp3","Frog_point_nothing.mp3", "Mouse_point_nothing.mp3", "Bear_point_nothing.mp3", "Beaver_point_nothing.mp3", "Monkey_point_nothing.mp3", "Dog_point_nothing.mp3", "Cat_point_nothing.mp3", "Bunny_point_nothing.mp3", "Tiger_point_nothing.mp3", "Sheep_point_nothing.mp3","Pig_point_nothing.mp3","Pig_train.mp3","Elephant_point_nothing.mp3","Elephant_train.mp3","Frog_point_old1.mp3", "Mouse_point_old1.mp3", "Bear_point_old1.mp3", "Monkey_point_old1.mp3", "Dog_point_old1.mp3", "Cat_point_old1.mp3", "Bunny_point_old1.mp3", "Tiger_point_old1.mp3", "Sheep_point_old1.mp3","Pig_point_old1.mp3","Elephant_point_old1.mp3", "Beaver_point_old1.mp3", "Frog_return.mp3", "Mouse_return.mp3", "Bear_return.mp3", "Monkey_return.mp3", "Dog_return.mp3", "Cat_return.mp3", "Bunny_return.mp3", "Tiger_return.mp3", "Sheep_return.mp3","Pig_return.mp3","Elephant_return.mp3", "Beaver_return.mp3","ring.mp3"
                ];
//for critical trials and fillers
var sound = new Array();
for (i = 0; i < preSounds.length; i++) {
	sound[i] = new Audio();
	sound[i].src = "sound/" + preSounds[i];
    sound[i].id = preSounds[i];
}

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


function background(x) {
        document.getElementById("background").src=x;
    };

function background2(x) {
        document.getElementById("background2").src=x;
    };


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
var fruits = ["t1","t2","t3","t4","t5","t6","t7","t8","t9","t10","t11","t12","t14","t15","t16","t17"];

// randomizing order and combiantion of test objects
var testRightFruit = fruits.sort(() => .5 - Math.random()).slice(0,8);
var remainingFruits = $.grep(fruits, function(value) {
    return $.inArray(value, testRightFruit) < 0;});
var testLeftFruit = remainingFruits.sort(() => .5 - Math.random()).slice(0,8);
var leftFruit = trainFruitLeft.concat(testLeftFruit);
var rightFruit = trainFruitRight.concat(testRightFruit);

// orientation of agent during the exposure sequence
var agentOrientations = [
    ["straight","point_r1", "point_l1","disappear","gone","down"],
    ["straight","point_l1", "point_r1","disappear","gone","down"],
    ["straight","point_r1", "point_l1","disappear","gone","down"],
    ["straight","point_l1", "point_r1","disappear","gone","down"],
    ["straight","point_r1", "point_l1","disappear","gone","down"],
    ["straight","point_l1", "point_r1","disappear","gone","down"],
    ["straight","point_r1", "point_l1","disappear","gone","down"],
    ["straight","point_l1", "point_r1","disappear","gone","down"],
    ["straight","point_r1", "point_l1","disappear","gone","down"],
    ["straight","point_l1", "point_r1","disappear","gone","down"]

];

// randomize agent orientations 
var agentOrient = shuffle(agentOrientations);

// randomizing location of target object (i.e. novel object)
var trainNovel = ["left","right"];
var testNovel = shuffle(["left","right","left","right","left","right","left","right"]);
var novel = trainNovel.concat(testNovel)


var back = shuffle([1,2,3,4,5,6,7,8,9,10]);

// Show the instructions slide .
showSlide("instructions");
  

// beginning of actual experiment
var experiment = {
  // Parameters for this sequence.
  trial: trial,
  speakerChange: speakerChange,
  agents: agents,
  altAgents: altAgents,
  back: back,
  agentOrient: agentOrient,
  rightFruit: rightFruit,
  leftFruit: leftFruit,
  novel: novel,
  data: [],
  
  checkInput: function() {
		//subject ID
		if (document.getElementById("subjectID").value.length < 1) {
			$("#checkMessage").html('<font color="red">You must input a subject ID</font>');
			return;
		}
        if (document.getElementById("subjectAge").value.length < 1) {
			$("#checkMessage").html('<font color="red">You must input a subject age</font>');
			return;
		}
		experiment.subid = document.getElementById("subjectID").value
        experiment.subage = document.getElementById("subjectAge").value
        experiment.trainingDot()
      },     
    
// end of the experiment
  end: function() {
    // Show the finish slide.
    showSlide("finished");
    setTimeout(function() { turk.submit(experiment) }, 2000);
  },
 
// end of training
   endTraining: function() {
    showSlide("training2");
  }, 
   
// what happens between trials - display agent from previous trial and click on it to move on to the next trial   
   eat: function(event) {

    setTimeout(function() {experiment.eat2() }, 1500);
       
    showSlide("choice");  
       
    event.target.style.border = '5px solid blue';
    
     if (experiment.trial[0] == "train"){
           sound.find(function (obj){return obj.id == agents[0]+"_train.mp3"}).pause();
        sound.find(function (obj){return obj.id == "end.mp3"}).play()
        
       } else {
       
           sound.find(function (obj){return obj.id ==  altAgents[0]+"_choice.mp3"}).pause();
           sound.find(function (obj){return obj.id ==  agents[0]+"_choice.mp3"}).pause();
           sound.find(function (obj){return obj.id == "end.mp3"}).play()

       }
    
    $(".fruit_r").unbind("click");
    $(".fruit_l").unbind("click");   
       
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
       
    var subid = experiment.subid;
    var subage = experiment.subage;    
    // data collected  
      data = {
        subid: subid,
        subage: subage,
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
  
  }, 
    
 eat2: function(event) {
    
    showSlide("eat");
    
    background("images/back"+back[0]+".jpg");
     
 if (experiment.trial[0] == "train"){
           sound.find(function (obj){return obj.id == agents[0]+"_train.mp3"}).pause();
        sound.find(function (obj){return obj.id == "end.mp3"}).play()
        
       } else {
       
        sound.find(function (obj){return obj.id ==  agents[0]+"_choice.mp3"}).pause();
        sound.find(function (obj){return obj.id == "end.mp3"}).play()

       }
   
    // display same agent as during choice
    if (speakerChange[0][0] == "true"){
        showEat(altAgents[0])
    } else {
        showEat(agents[0])
    };
   
   
    $(".agent_eat").click(experiment.newtrial);     
  
},       
// unbind and shif variables between trials     
    
newtrial: function() {
            
    $(".fruit_l").css("border","none")
    $(".fruit_r").css("border","none")
    
    
    $(".agent_eat").unbind("click"); 
   
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
    experiment.back.shift();
     
    if(speakerChange[0].length == 0) {
        experiment.speakerChange.shift();
    }
     
   
    experiment.next();
  },


// recording the choice 
  choice: function(event) {
    
    showSlide("choice"); 
   
    background2("images/back"+back[0]+".jpg");
    
    // show objects  
    choiceLeftFruit("images/"+leftFruit[0]+".png");
    choiceRightFruit("images/"+rightFruit[0]+".png");
    
    // show agent depending on speaker change and write their name   
    if (speakerChange[0][0] == "true") {
        choiceAgent(altAgents[0]);
    }else {
       choiceAgent(agents[0]);
    };
    
   
    if (experiment.trial[0] == "train"){
        $("#text3").text("")
    } else {  
         if (speakerChange[0][0] == "true") {
             $("#text3").text("Oh look, "+agents[0]+" is gone ... now "+altAgents[0]+" is here");
         }else {
             choiceAgent(agents[0]);
             $("#text3").text("Oh look, "+agents[0]+" is back");
         };  
    };
      
      
    // animate agent in test trials
     if (experiment.trial[0] == "train"){
    } else {     
    $("#"+agents[0]+"_choice").animate({height: "450px",opacity: '0.3', queue: false, duration: "slow"});
    $("#"+agents[0]+"_choice").animate({height: "350px",opacity: '1', queue: false, duration: "slow"});
      
    $("#"+altAgents[0]+"_choice").animate({height: "450px",opacity: '0.3', queue: false, duration: "slow"});
    $("#"+altAgents[0]+"_choice").animate({height: "350px",opacity: '1', queue: false, duration: "slow"});
     };    
    
    // play choice sound only in training
    if (experiment.trial[0] == "train"){
          sound.find(function (obj){return obj.id == agents[0]+"_train.mp3"}).play()
     
    } else { 
   // play hello/return sound and choice depending on speaker chnage condition in test trials 
    if (experiment.speakerChange[0][0] == "true"){
        setTimeout(function() {
              sound.find(function (obj){return obj.id == altAgents[0]+"_hello.mp3"}).play()
      }, 0);
       setTimeout(function() {
        sound.find(function (obj){return obj.id == altAgents[0]+"_choice.mp3"}).play();}, 6000);
    } else {
        setTimeout(function() {
       sound.find(function (obj){return obj.id == agents[0]+"_return.mp3"}).play()
            ;}, 0);
       setTimeout(function() {
              sound.find(function (obj){return obj.id == agents[0]+"_choice.mp3"}).play()
       ;}, 6000);
            }; 
    }
      
    // choice can be made by clicking the objects after - possible after 8s   
    setTimeout(function() {      
    $(".fruit_r").click(experiment.eat);
    $(".fruit_l").click(experiment.eat);
}, 10000);
  },
  
// sequence of events during training exposure
  train: function() {
      
    showSlide("stage");  
    // show agent 
    showAgent(agents[0],experiment.agentOrient[0][0]);
    
    background("images/back"+back[0]+".jpg");
      
    // show objects on both sides
    sourceRightFruit("images/"+rightFruit[0]+".png");
    showRightFruit();
    sourceLeftFruit("images/"+leftFruit[0]+".png");
    showLeftFruit();   
    
    
    // agent says hello  
    if (experiment.agentOrient[0][0] == "straight") { 
    //inactivate next button for the time the sound is played 
        pause("next",3000); 
       sound.find(function (obj){return obj.id == agents[0]+"_hello.mp3"}).play()
        };  
    
     // move to choice after agent has said hello
        if (experiment.agentOrient[0][0] == "point_l1" || experiment.agentOrient[0][0] == "point_r1") {
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
     
    background("images/back"+back[0]+".jpg");  
      
    showAgent(agents[0],experiment.agentOrient[0][0]);    
      
   // play sound depending on agent orientation 
// agent says hello
    if (experiment.agentOrient[0][0] == "straight") { 
        pause("next",2000); 
  sound.find(function (obj){return obj.id == agents[0]+"_hello.mp3"}).play()
    };  
// agent says hello when returning    
    if (experiment.agentOrient[0][0] == "straight2") { 
        pause("next",1500); 
  sound.find(function (obj){return obj.id == agents[0]+"_hello.mp3"}).play()
    };    
      
// commenting on objects (or their absence) on the tables depending on condition    
     if (experiment.novel[0] == "left"){
            if (experiment.agentOrient[0][0] == "point_r1"){
            pause("next",3500); 
     sound.find(function (obj){return obj.id == agents[0]+"_point_old1.mp3"}).play()
            } else if (experiment.agentOrient[0][0] == "point_r2") {
            pause("next",3500); 
            sourceSound("sound/"+agents[0]+"_point_old2.mp3");
            playSound();
            } else if (experiment.agentOrient[0][0] == "point_l1") {
            pause("next",3500); 
        sound.find(function (obj){return obj.id == agents[0]+"_point_nothing.mp3"}).play()
            }else if (experiment.agentOrient[0][0] == "point_l2") {
            pause("next",3500); 
            sourceSound("sound/"+agents[0]+"_point_nothing.mp3");
            playSound();
            };
        } else { 
            if (experiment.agentOrient[0][0] == "point_l1"){
            pause("next",3500); 
       sound.find(function (obj){return obj.id == agents[0]+"_point_old1.mp3"}).play()
            } else if (experiment.agentOrient[0][0] == "point_l2") {
            pause("next",3500); 
            sourceSound("sound/"+agents[0]+"_point_old2.mp3");
            playSound();
            } else if (experiment.agentOrient[0][0] == "point_r1") {
            pause("next",3500); 
            sound.find(function (obj){return obj.id == agents[0]+"_point_nothing.mp3"}).play()
            }else if (experiment.agentOrient[0][0] == "point_r2") {
            pause("next",3500); 
            sourceSound("sound/"+agents[0]+"_point_nothing.mp3");
            playSound();
            };
    }; 
    
// animate object when visible and pointed at  
    if (experiment.agentOrient[0][0].slice(0,-1) == "point_r") {
        setTimeout(function() {
            $("#fruit_r").animate({width: "200px",opacity: '0.3', queue: false, duration: 1000});
            $("#fruit_r").animate({width: "150px",opacity: '1', queue: false, duration: 1000})
        }, 1500)
    }; 
      
    if (experiment.agentOrient[0][0].slice(0,-1) == "point_l") {
        setTimeout(function() {
            $("#fruit_l").animate({width: "200px",opacity: '0.3', queue: false, duration: 1000});
            $("#fruit_l").animate({width: "150px",opacity: '1', queue: false, duration: 1000})
        }, 1500)
    }; 
    

 // after agent has commented on both locations, play ring sound and briefly show disappearing agent and then hide agent
    if (experiment.agentOrient[0][0] == "disappear") { 
        showAgent(agents[0],"straight")
           sound.find(function (obj){return obj.id == "ring.mp3"}).play()
        setTimeout(function()
            {showAgent(agents[0],"disappear")}, 1000);
        pause("next",2000);
        setTimeout(function(){hideAgent()}, 2000);
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
            $("#fruit_r").animate({bottom: "225px"},{duration: 1500});
            sourceLeftFruit("images/"+leftFruit[0]+".png");
            showLeftFruit();
            setTimeout(function() { 
            $("#fruit_r").animate({width: "200px", opacity: '0.3', queue: false, duration: "slow"});
            $("#fruit_l").animate({width: "200px",opacity: '0.3', queue: false, duration: "slow"});
            $("#fruit_l").animate({width: "150px",opacity: '1', queue: false, duration: "slow"});
            $("#fruit_r").animate({width: "150px",opacity: '1', queue: false, duration: "slow"})}, 2500)
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
            $("#fruit_l").animate({bottom: "225px"},{duration: 1500});
            sourceRightFruit("images/"+rightFruit[0]+".png");
            showRightFruit();
            setTimeout(function() { 
            $("#fruit_l").animate({width: "200px", opacity: '0.3', queue: false, duration: "slow"});
            $("#fruit_r").animate({width: "200px",opacity: '0.3', queue: false, duration: "slow"});
            $("#fruit_r").animate({width: "150px",opacity: '1', queue: false, duration: "slow"});
            $("#fruit_l").animate({width: "150px",opacity: '1', queue: false, duration: "slow"})}, 2500);
            } else {
            sourceRightFruit("images/"+rightFruit[0]+".png");
            showRightFruit();
            sourceLeftFruit("images/"+leftFruit[0]+".png");
            hideLeftFruit();
            }
    };
// move on to next phase of exposure 
    experiment.agentOrient[0].shift();
  },
trainingDot: function() {
		
    function createDot(dotx, doty, i) {
	   var dots = [1, 2, 3, 4, 5];

	   var dot = document.createElement("img");
	   dot.setAttribute("class", "dot");
	   dot.id = "dot_" + dots[i];
	   dot.src = "dots/dot_" + dots[i] + ".jpg";

	   var x = Math.floor(Math.random() * 850);
	   var y = Math.floor(Math.random() * 550);

	   var invalid = "true";
	//make sure dots do not overlap
	   while (true) {  
		invalid = "true";
		for (j = 0; j < dotx.length; j++) {
			if (Math.abs(dotx[j] - x) + Math.abs(doty[j] - y) < 200) {
				var invalid = "false";
				break;
			}
		}
		if (invalid === "true") {
			dotx.push(x);
			doty.push(y);
			break;
		}
		x = Math.floor(Math.random() * 400);
		y = Math.floor(Math.random() * 400);
	}

	dot.setAttribute("style", "position:absolute;left:" + x + "px;top:" + y + "px;");

	trainingDot.appendChild(dot);
};

        
        var allDots = ["dot_1", "dot_2", "dot_3", "dot_4", "dot_5"];

		var xcounter = 0;
		var dotCount = 5;

		var dotx = [];
		var doty = [];

		for (i = 0; i < dotCount; i++) {
			createDot(dotx, doty, i, "");
		}

		showSlide("trainingDot");
		$('.dot').bind('click touchstart', function(event) {

			var dotID = $(event.currentTarget).attr('id');

			//only count towards completion clicks on dots that have not yet been clicked
			if (allDots.indexOf(dotID) === -1) {
				return;
			}
			allDots.splice(allDots.indexOf(dotID), 1);
			document.getElementById(dotID).src = "dots/x.jpg";
			xcounter++
			if (xcounter === dotCount) {
				trainingDot.removeChild(dot_1);
				trainingDot.removeChild(dot_2);
				trainingDot.removeChild(dot_3);
				trainingDot.removeChild(dot_4);
				trainingDot.removeChild(dot_5);

				setTimeout(function() {
					$("#trainingDot").hide();
					setTimeout(function() {
						showSlide("dotGame");
					}, 500);
				}, 500);
			}
		});
	} 
};
