// preload
var preImages = ["back1.jpg",
"back2.jpg",
"back3.jpg",
"back4.jpg",
"back6.jpg",
"back10.jpg",
"Bear_disappear.png",
"Bear_eat.png",
"Bear_look_l.png",
"Bear_look_r.png",
"Bear_point_l_straight_n.png",
"Bear_point_l_straight_p.png",
"Bear_point_l_up_n.png",
"Bear_point_l_up_p.png",
"Bear_point_l.png",
"Bear_point_r_straight_n.png",
"Bear_point_r_straight_p.png",
"Bear_point_r_up_n.png",
"Bear_point_r_up_p.png",
"Bear_point_r.png",
"Bear_straight.png",
"Beaver_disappear.png",
"Beaver_eat.png",
"Beaver_look_l.png",
"Beaver_look_r.png",
"Beaver_point_l_straight_n.png",
"Beaver_point_l_straight_p.png",
"Beaver_point_l_up_n.png",
"Beaver_point_l_up_p.png",
"Beaver_point_l.png",
"Beaver_point_r_straight_n.png",
"Beaver_point_r_straight_p.png",
"Beaver_point_r_up_n.png",
"Beaver_point_r_up_p.png",
"Beaver_point_r.png",
"Beaver_straight.png",
"Bunny_disappear.png",
"Bunny_eat.png",
"Bunny_look_l.png",
"Bunny_look_r.png",
"Bunny_point_l_straight_n.png",
"Bunny_point_l_straight_p.png",
"Bunny_point_l_up_n.png",
"Bunny_point_l_up_p.png",
"Bunny_point_l.png",
"Bunny_point_r_straight_n.png",
"Bunny_point_r_straight_p.png",
"Bunny_point_r_up_n.png",
"Bunny_point_r_up_p.png",
"Bunny_point_r.png",
"Bunny_straight.png",
"button-gradient.png",
"Cat_disappear.png",
"Cat_eat.png",
"Cat_look_l.png",
"Cat_look_r.png",
"Cat_point_l_straight_n.png",
"Cat_point_l_straight_p.png",
"Cat_point_l_up_n.png",
"Cat_point_l_up_p.png",
"Cat_point_l.png",
"Cat_point_r_straight_n.png",
"Cat_point_r_straight_p.png",
"Cat_point_r_up_n.png",
"Cat_point_r_up_p.png",
"Cat_point_r.png",
"Cat_straight.png",
"dis_l.png",
"dis_r.png",
"Dog_disappear.png",
"Dog_eat.png",
"Dog_look_l.png",
"Dog_look_r.png",
"Dog_point_l_straight_n.png",
"Dog_point_l_straight_p.png",
"Dog_point_l_up_n.png",
"Dog_point_l_up_p.png",
"Dog_point_l.png",
"Dog_point_r_straight_n.png",
"Dog_point_r_straight_p.png",
"Dog_point_r_up_n.png",
"Dog_point_r_up_p.png",
"Dog_point_r.png",
"Dog_straight.png",
"Elephant_disappear.png",
"Elephant_eat.png",
"Elephant_look_l.png",
"Elephant_look_r.png",
"Elephant_point_l_straight_n.png",
"Elephant_point_l_straight_p.png",
"Elephant_point_l_up_n.png",
"Elephant_point_l_up_p.png",
"Elephant_point_l.png",
"Elephant_point_r_straight_n.png",
"Elephant_point_r_straight_p.png",
"Elephant_point_r_up_n.png",
"Elephant_point_r_up_p.png",
"Elephant_point_r.png",
"Elephant_straight.png",
"empty.png",
"Frog_disappear.png",
"Frog_eat.png",
"Frog_look_l.png",
"Frog_look_r.png",
"Frog_point_l_straight_n.png",
"Frog_point_l_straight_p.png",
"Frog_point_l_up_n.png",
"Frog_point_l_up_p.png",
"Frog_point_l.png",
"Frog_point_r_straight_n.png",
"Frog_point_r_straight_p.png",
"Frog_point_r_up_n.png",
"Frog_point_r_up_p.png",
"Frog_point_r.png",
"Frog_straight.png",
"hill.png",
"Monkey_disappear.png",
"Monkey_eat.png",
"Monkey_look_l.png",
"Monkey_look_r.png",
"Monkey_point_l_straight_n.png",
"Monkey_point_l_straight_p.png",
"Monkey_point_l_up_n.png",
"Monkey_point_l_up_p.png",
"Monkey_point_l.png",
"Monkey_point_r_straight_n.png",
"Monkey_point_r_straight_p.png",
"Monkey_point_r_up_n.png",
"Monkey_point_r_up_p.png",
"Monkey_point_r.png",
"Monkey_straight.png",
"Mouse_disappear.png",
"Mouse_eat.png",
"Mouse_look_l.png",
"Mouse_look_r.png",
"Mouse_point_l_straight_n.png",
"Mouse_point_l_straight_p.png",
"Mouse_point_l_straight.png",
"Mouse_point_l_up_n.png",
"Mouse_point_l_up_p.png",
"Mouse_point_l.png",
"Mouse_point_r_straight_n.png",
"Mouse_point_r_straight_p.png",
"Mouse_point_r_up_n.png",
"Mouse_point_r_up_p.png",
"Mouse_point_r.png",
"Mouse_straight.png",
"Pig_disappear.png",
"Pig_eat.png",
"Pig_look_l.png",
"Pig_look_r.png",
"Pig_point_l_straight_n.png",
"Pig_point_l_straight_p.png",
"Pig_point_l_up_n.png",
"Pig_point_l_up_p.png",
"Pig_point_l_up.png",
"Pig_point_l.png",
"Pig_point_r_straight_n.png",
"Pig_point_r_straight_p.png",
"Pig_point_r_up_n.png",
"Pig_point_r_up_p.png",
"Pig_point_r.png",
"Pig_straight.png",
"selector.png",
"selector2.png",
"Sheep_disappear.png",
"Sheep_eat.png",
"Sheep_look_l.png",
"Sheep_look_r.png",
"Sheep_point_l_straight_n.png",
"Sheep_point_l_straight_p.png",
"Sheep_point_l_up_n.png",
"Sheep_point_l_up_p.png",
"Sheep_point_l.png",
"Sheep_point_r_straight_n.png",
"Sheep_point_r_straight_p.png",
"Sheep_point_r_up_n.png",
"Sheep_point_r_up_p.png",
"Sheep_point_r.png",
"Sheep_straight.png",
"stanford.png",
"t01.png",
"t02.png",
"t03.png",
"t04.png",
"t05.png",
"t06.png",
"t07.png",
"t08.png",
"t09.png",
"t10.png",
"t11.png",
"t12.png",
"t13.png",
"t14.png",
"t15.png",
"t16.png",
"t17.png",
"t18.png",
"Tiger_disappear.png",
"Tiger_eat.png",
"Tiger_look_l.png",
"Tiger_look_r.png",
"Tiger_point_l_straight_n.png",
"Tiger_point_l_straight_p.png",
"Tiger_point_l_up_n.png",
"Tiger_point_l_up_p.png",
"Tiger_point_l.png",
"Tiger_point_r_straight_n.png",
"Tiger_point_r_straight_p.png",
"Tiger_point_r_up_n.png",
"Tiger_point_r_up_p.png",
"Tiger_point_r.png",
"Tiger_straight.png",
"tree_l.png",
"tree_r.png",
"tree1_l.png",
"tree1_r.png",
"tree2_l.png",
"tree2_r.png",
"tree3_l.png",
"tree3_r.png",
"tree4_l.png",
"tree4_r.png",
"tree5_l.png",
"tree5_r.png",
"tree6_l.png",
"tree6_r.png",
"tree7_l.png",
"tree7_r.png",
"tree8_l.png",
"tree8_r.png",
"tree9_l.png",
"tree9_r.png"];
//for critical trials and fillers
var images = new Array();
for (i = 0; i < preImages.length; i++) {
	images[i] = new Image();
	images[i].src = "images/" + preImages[i];
    images[i].id = preImages[i];
}



function showLeftFriend(id) {
	$(".tree_l").hide();
	$("#"+id+"_l").show();
}

function showRightFriend(id) {
	$(".tree_r").hide();
	$("#"+id+"_r").show();
}


function showLeftChoiceFriend(id) {
    $(".tree_l").hide();
	$("#"+id+"_l_c").show();
}

function showRightChoiceFriend(id) {
	$(".tree_r").hide();
	$("#"+id+"_r_c").show();
}

var preSounds = ["Bear_hello.mp3",
"Bear_label.mp3",
"Bear_more.mp3",
"Bear_npoint.mp3",
"Bear_ppoint.mp3",
"Bear_return.mp3",
"Bear_torn.mp3",
"Bear_which.mp3",
"Beaver_dis.mp3",
"Beaver_hello.mp3",
"Beaver_label.mp3",
"Beaver_more.mp3",
"Beaver_npoint.mp3",
"Beaver_ppoint.mp3",
"Beaver_return.mp3",
"Beaver_torn.mp3",
"Beaver_which.mp3",
"Bunny_hello.mp3",
"Bunny_label.mp3",
"Bunny_more.mp3",
"Bunny_npoint.mp3",
"Bunny_ppoint.mp3",
"Bunny_return.mp3",
"Bunny_torn.mp3",
"Bunny_which.mp3",
"Cat_hello.mp3",
"Cat_label.mp3",
"Cat_more.mp3",
"Cat_npoint.mp3",
"Cat_ppoint.mp3",
"Cat_return.mp3",
"Cat_torn.mp3",
"Cat_which.mp3",
"Dog_hello.mp3",
"Dog_label.mp3",
"Dog_more.mp3",
"Dog_npoint.mp3",
"Dog_ppoint.mp3",
"Dog_return.mp3",
"Dog_torn.mp3",
"Dog_which.mp3",
"Elephant_hello.mp3",
"Elephant_label.mp3",
"Elephant_more.mp3",
"Elephant_npoint.mp3",
"Elephant_ppoint.mp3",
"Elephant_return.mp3",
"Elephant_torn.mp3",
"Elephant_train.mp3",
"Elephant_which.mp3",
"Elephant1_hello.mp3",
"Elephant1_label.mp3",
"Elephant1_more.mp3",
"Elephant1_which.mp3",
"end.mp3",
"Frog_hello.mp3",
"Frog_intro.mp3",
"Frog_label.mp3",
"Frog_more.mp3",
"Frog_npoint.mp3",
"Frog_ppoint.mp3",
"Frog_return.mp3",
"Frog_torn.mp3",
"Frog_which.mp3",
"Monkey_hello.mp3",
"Monkey_label.mp3",
"Monkey_more.mp3",
"Monkey_npoint.mp3",
"Monkey_ppoint.mp3",
"Monkey_return.mp3",
"Monkey_torn.mp3",
"Monkey_which.mp3",
"Mouse_hello.mp3",
"Mouse_label.mp3",
"Mouse_more.mp3",
"Mouse_npoint.mp3",
"Mouse_ppoint.mp3",
"Mouse_return.mp3",
"Mouse_torn.mp3",
"Mouse_which.mp3",
"Mouse1_hello.mp3",
"Mouse1_label.mp3",
"Mouse1_more.mp3",
"Mouse1_which.mp3",
"Pig_hello.mp3",
"Pig_label.mp3",
"Pig_more.mp3",
"Pig_npoint.mp3",
"Pig_ppoint.mp3",
"Pig_return.mp3",
"Pig_torn.mp3",
"Pig_train.mp3",
"Pig_which.mp3",
"ring.mp3",
"Sheep_hello.mp3",
"Sheep_label.mp3",
"Sheep_more.mp3",
"Sheep_npoint.mp3",
"Sheep_ppoint.mp3",
"Sheep_return.mp3",
"Sheep_torn.mp3",
"Sheep_which.mp3",
"Tiger_hello.mp3",
"Tiger_label.mp3",
"Tiger_more.mp3",
"Tiger_npoint.mp3",
"Tiger_ppoint.mp3",
"Tiger_return.mp3",
"Tiger_torn.mp3",
"Tiger_which.mp3"];
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
  // Hide all slides
	$(".text").hide();
	// Show just the slide we want to show
	$("#"+id).show();
}


function showAgent(id, orient) {
	$(".agent").hide();
    $(".point_agent_l").hide();
    $(".point_agent_l_up_p").hide();
    $(".point_agent_l_up_n").hide();
    $(".point_agent_l_straight_p").hide();
    $(".point_agent_l_straight_n").hide();
    $(".point_agent_r").hide();
    $(".point_agent_r_up_p").hide();
    $(".point_agent_r_up_n").hide();
    $(".point_agent_r_straight_p").hide();
    $(".point_agent_r_straight_n").hide();
    $(".look_agent_l").hide();
    $(".look_agent_r").hide();
	$("#"+id+"_"+orient).show();
}

function hideAgent() {
  // Hide all slides
	$(".agent").hide();
}


function choiceAgent(id,orient) {
  // Hide all slides
	$(".agent").hide();
    $(".point_agent_l").hide();
    $(".point_agent_r").hide();
    $(".look_agent_l").hide();
    $(".look_agent_r").hide();
	// Show just the agent we want to show
	$("#"+id+"_"+orient).show();
}

function sourceRightFruit(a) {
        document.getElementById("fruit_r").src=a;
    };

function sourceRightFruit2(a) {
        document.getElementById("fruit_r2").src=a;
    };

function sourceLeftFruit(b) {
        document.getElementById("fruit_l").src=b;
    };

function sourceLeftFruit2(b) {
        document.getElementById("fruit_l2").src=b;
    };

function showRightFruit() {
    document.getElementById('fruit_r').style.visibility='visible';
      };

function showRightFruit2() {
    document.getElementById('fruit_r2').style.visibility='visible';
      };

function hideRightFruit() {
    document.getElementById('fruit_r').style.visibility='hidden';
      };

function showLeftFruit() {
    document.getElementById('fruit_l').style.visibility='visible';
      };

function showLeftFruit2() {
    document.getElementById('fruit_l2').style.visibility='visible';
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

function choiceLeftFruit2(a) {
        document.getElementById("choiceFruit_l2").src=a;
    };

function choiceRightFruit(a) {
        document.getElementById("choiceFruit_r").src=a;
    };

function choiceRightFruit2(a) {
        document.getElementById("choiceFruit_r2").src=a;
    };


function background(x) {
        document.getElementById("background").src=x;
    };

function background2(x) {
        document.getElementById("background2").src=x;
    };var back = shuffle([1,2,3,1,2,3,1,2,3,1]);


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


// Variables and randomization for the experiment

var trial = ["filler1","filler2",1,2,3,4,"pause",5,6,7,8]
// agent order for training



var trees = shuffle(["tree","tree1","tree2","tree3","tree4","tree5","tree6","tree7","tree8","tree9"]);

// randomization of agent order for test trials

var trainAgents = ["Elephant1","Mouse1"]
var allAgents = ["Elephant","Pig","Frog","Mouse","Monkey","Bunny","Dog","Bear","Tiger","Cat","Sheep","Beaver"]


// randomization of agent and speaker change agent order for test trials
var testAgents = allAgents.sort(() => .5 - Math.random()).slice(0,8);
var remainingAgent = $.grep(allAgents, function(value) {
    return $.inArray(value, testAgents) < 0;});
var testAltAgent = remainingAgent.sort(() => .5 - Math.random()).slice(0,4);
var agents = trainAgents.concat(testAgents);
var altAgents = testAltAgent;

var trainTargetSwitch = shuffle(["stay","switch"]);

var testTargetSwitch = shuffle(["switch","stay","switch","stay","switch","stay","switch","stay"])
var targetSwitch = trainTargetSwitch.concat(testTargetSwitch)


// objects on tables in training and test (fruits = toys)



var fruits = shuffle(["t01","t02","t03","t04","t05","t07","t08","t09","t10", "t11","t12","t13","t14","t16","t17","t18","t19","t20","t21","t22"]);
// randomizing order and combiantion of test objects
var rightFruit = fruits.sort(() => .5 - Math.random()).slice(0,10);
var remainingFruits = $.grep(fruits, function(value) {
    return $.inArray(value, rightFruit) < 0;});
var leftFruit = remainingFruits.sort(() => .5 - Math.random()).slice(0,10);

var fruitPosition = shuffle([leftFruit[0],rightFruit[0]]);
var fruitPosition2 = shuffle([leftFruit[0],rightFruit[0]]);

// orientation of agent 

var trainAgentOrientations = [
    ["straight","label","down"],
    ["straight","label","down"]];

var testAgentOrientations = shuffle([
    ["straight","point_l", "point_r","disappear","straight2","label","down"],
    ["straight","point_r", "point_l","disappear","straight2","label","down"],
    ["straight","point_l", "point_r","disappear","straight2","label","down"],
    ["straight","point_r", "point_l","disappear","straight2","label","down"],
    ["straight","point_l", "point_r","disappear","straight2","label","down"],
    ["straight","point_r", "point_l","disappear","straight2","label","down"],
    ["straight","point_l", "point_r","disappear","straight2","label","down"],
    ["straight","point_r", "point_l","disappear","straight2","label","down"]]);

var agentOrient = trainAgentOrientations.concat(testAgentOrientations)


var trainCond = [
    ["train1","same","left","left"],
    ["train2","same","right","right"]];
var testCond1 = shuffle([
    ["sameSpInfLPrefL","same","left","left"],
    ["diffSpInfRPrefR","diff","right","right"],
    ["sameSpInfRPrefL","same","right","left"],
    ["diffSpInfLPrefR","diff","left","right"]])
    
var testCond2 = shuffle([    
    ["sameSpInfRPrefR","same","right","right"],
    ["diffSpInfLPrefL","diff","left","left"],
    ["sameSpInfLPrefR","same","left","right"],
    ["diffSpInfRPrefL","diff","right","left"]]);

if (shuffle([1,2])[0] == 1){
    
    var cond = trainCond.concat(testCond1.concat(testCond2))
        
} else {
    
    var cond = trainCond.concat(testCond2.concat(testCond1))
    
}


// randomizing location of target object (i.e. single object)


var back = shuffle([10,4,6,10,4,6,10,4,6,10]);

// beginning of actual experiment

// Show the instructions slide .
showSlide("instructions");

// the actual experiment
var experiment = {
  // Parameters for this sequence.
    trial: trial,
    back: back,
    cond: cond,
    trees: trees,
    agents: agents,
    altAgents: altAgents,
    agentOrient: agentOrient,
    rightFruit: rightFruit,
    leftFruit: leftFruit,
    data: [],
    fruitPosition: fruitPosition,
    fruitPosition2: fruitPosition2,
    targetSwitch: targetSwitch,
    
    
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
    setTimeout(function() { turk.submit(experiment) }, 500);
  },
    
   endTraining: function() {
    showSlide("training2");
  }, 
  
// what happens between trials - display agent from previous trial and click on it to move on to the next trial    
   eat: function(event) {

       
    showSlide("eat");
    
    background("images/back"+back[0]+".jpg");

     if (experiment.cond[0][1] == "diff"){
        showEat(altAgents[0])
    } else {
        showEat(agents[0])
    };
      
   
    $(".agent_eat").click(experiment.newtrial); 
       
       
     sourceSound("sound/end.mp3");
          playSound();

       $("#fruit_l").css({opacity: '1'})
       $("#fruit_l2").css({opacity: '1'})
       $("#fruit_r").css({opacity: '1'})
       $("#fruit_r2").css({opacity: '1'})
       $("#tree_r").css({opacity: '1'})
       $("#tree_l").css({opacity: '1'})
         
  },
 
 
// unbind and shif variables between trials      
 newtrial: function() {
    
     $("#text").text("")
     $("#text2").text("")
     
     
     $(".selector_l").css("border","none")
     
     $(".selector_r").css("border","none")
     
     $(".fruit_l").css("border","none")
    $(".fruit_l2").css("border","none")
    $(".fruit_r").css("border","none")
    $(".fruit_r2").css("border","none") 

     
    $(".agent_eat").unbind("click"); 
     
     $(".selector_r").unbind("click");
     $(".selector_l").unbind("click");
   
    sourceLeftFruit("images/empty.png");
            showLeftFruit(); 
    sourceRightFruit("images/empty.png");
            showRightFruit();
      sourceLeftFruit2("images/empty.png");
            showLeftFruit(); 
    sourceRightFruit2("images/empty.png");
            showRightFruit();
     
     
     if(experiment.cond[0][1] == "diff") {
         experiment.altAgents.shift()};
     
    
     experiment.agentOrient.shift();  
     experiment.agents.shift();
     experiment.cond.shift();
     experiment.rightFruit.shift();
     experiment.leftFruit.shift();
     experiment.fruitPosition = shuffle([leftFruit[0],rightFruit[0]]);
     experiment.fruitPosition2 = shuffle([leftFruit[0],rightFruit[0]]);
     experiment.back.shift(); 
     experiment.targetSwitch.shift();
     experiment.trees.shift();

     experiment.trial.shift();

     experiment.next();
  },


// recording the choice 
    
    
pause: function () {
    
    showSlide("pause");
 
},
    
    choice: function() {
    
        showSlide("choice"); 
    
    background2("images/back"+back[0]+".jpg");
      
      if (experiment.cond[0][1] == "same") { 
      
          choiceAgent(agents[0],"choice")
          
          sourceSound("sound/"+agents[0]+"_more.mp3");
          playSound();
         
      
          setTimeout(function() {
              sourceSound("sound/"+agents[0]+"_which.mp3");
              playSound();
          }, 3000) 
          
      } else {
            
          choiceAgent(altAgents[0],"choice")
          
          sourceSound("sound/"+altAgents[0]+"_more.mp3");
          playSound();
         
        
          setTimeout(function() {
              sourceSound("sound/"+altAgents[0]+"_which.mp3");
              playSound();
          }, 3000) 
              
          }
      
    showLeftChoiceFriend(experiment.trees[0])
     
    showRightChoiceFriend(experiment.trees[0])
      
      
    $(".selector_l").show();
      
    $(".selector_r").show();
    
    // show agent
    
   
      
      
      $("#text").text("")
      $("#text2").text("")
    
      choiceRightFruit("images/empty.png") 
      choiceRightFruit2("images/empty.png") 
      choiceLeftFruit("images/empty.png") 
      choiceLeftFruit2("images/empty.png") 
      
      
    
    
      
if (experiment.targetSwitch[0] == "stay") {
      
    if (experiment.cond[0][2] == "left") {
       
        if (experiment.fruitPosition2[0] == leftFruit[0]){
          
            choiceRightFruit("images/"+rightFruit[0]+".png");
                 
            choiceRightFruit2("images/empty.png");
               
        } else {
           
            choiceRightFruit("images/empty.png");
                
            choiceRightFruit2("images/"+rightFruit[0]+".png");
              
        }
    
        if (experiment.fruitPosition[0] == leftFruit[0]) {                        
           
            choiceLeftFruit("images/"+experiment.fruitPosition[0]+".png");
           
            choiceLeftFruit2("images/empty.png");
             
        } else {
           
            choiceLeftFruit2("images/"+experiment.fruitPosition[1]+".png");
          
            choiceLeftFruit("images/empty.png");
              
        }; 
    
    } else { 
        if (experiment.fruitPosition2[0] == leftFruit[0]){
            
            choiceLeftFruit("images/"+leftFruit[0]+".png");
                
            choiceLeftFruit2("images/empty.png");
                 
        } else {
            choiceLeftFruit("images/empty.png");
              
            choiceLeftFruit2("images/"+leftFruit[0]+".png");
                 
        }
                
        if (experiment.fruitPosition[0] == rightFruit[0]) {         
            
            choiceRightFruit("images/"+experiment.fruitPosition[0]+".png");
        
            choiceRightFruit2("images/empty.png");
            
        } else {
      
            choiceRightFruit2("images/"+experiment.fruitPosition[1]+".png");
        
            choiceRightFruit("images/empty.png");
            
        }; 
          
            };

} else {

    if (experiment.cond[0][2] == "left") {
          
        if (experiment.fruitPosition2[0] == leftFruit[0]){
            
            choiceLeftFruit("images/"+rightFruit[0]+".png");
                
            choiceLeftFruit2("images/empty.png");
               
        } else {
            
            choiceLeftFruit("images/empty.png");
                
            choiceLeftFruit2("images/"+rightFruit[0]+".png");
              
        }
    
        if (experiment.fruitPosition[0] == leftFruit[0]) {                        
        
            choiceRightFruit("images/"+experiment.fruitPosition[0]+".png");
           
            choiceRightFruit2("images/empty.png");
             
        } else {
        
            choiceRightFruit2("images/"+experiment.fruitPosition[1]+".png");
          
            choiceRightFruit("images/empty.png");
              
        }; 
    
    } else { 
    
        if (experiment.fruitPosition2[0] == leftFruit[0]){
            
            choiceRightFruit("images/"+leftFruit[0]+".png");
                
            choiceRightFruit2("images/empty.png");
                 
        } else {
            choiceRightFruit("images/empty.png");
              
            choiceRightFruit2("images/"+leftFruit[0]+".png");
                 
        }
                
        if (experiment.fruitPosition[0] == rightFruit[0]) {         
            
            choiceLeftFruit("images/"+experiment.fruitPosition[0]+".png");
        
            choiceLeftFruit2("images/empty.png");
            
        } else {
        
            choiceLeftFruit2("images/"+experiment.fruitPosition[1]+".png");
        
            choiceLeftFruit("images/empty.png");
            
        }; 
          
    };

};
    
      
    // choice can be made by clicking the objects after 

      setTimeout(function() {
            
          $(".selector_l").click(function() {
              
              var clickedItem = event.target;
              
              var pick = event.target.id;
              
              clickedItem.style.border = '5px solid blue';
              
              $(".selector_l").unbind("click");
              
              $(".selector_r").hide();
       
              var endTime = (new Date()).getTime();    
    
              if (experiment.cond[0][2]=="left" &&   experiment.targetSwitch[0] == "stay") {
       
                  var correct_inf =1
                  
                  } else if (experiment.cond[0][2]=="right" && experiment.targetSwitch[0] == "switch") {
                      
                      var correct_inf =1
                      
                      } else {
                      
                          var correct_inf = 0
                      };
              
              
              if (experiment.cond[0][2] == "left" && experiment.fruitPosition[0] == leftFruit[0]) {
          
                  var targetPosition = "inner";  
          
              } else if (experiment.cond[0][2] == "right" && experiment.fruitPosition[0] ==     rightFruit[0]) {
                  
                  var targetPosition = "inner";  
               
              } else {
                    
                  var targetPosition = "outer"; 
                          
              };


              var subid = experiment.subid; 
              var subage = experiment.subage; 
              
              if (experiment.cond[0][2] == experiment.cond[0][3]){
                  var alignment = "congruent";
              }   else {
                  var alignment = "incongruent";
              };
              
           
              if (experiment.cond[0][3]=="left" &&   experiment.targetSwitch[0] == "stay") {
       
                  var correct_pref =1
                  
                  } else if (experiment.cond[0][3]=="right" && experiment.targetSwitch[0] == "switch") {
                      
                      var correct_pref =1
                      
                      } else {
                      
                          var correct_pref = 0
                          };

              
              
              
      
    // data collected  
      data = {
          subid: subid,
          subage: subage,
          experiment: "mcc_kids_ex3_pref",
          trial: trial[0],
          speaker: experiment.cond[0][1],
          alignment: alignment,
          agent: agents[0],
          leftFruit: leftFruit[0],
          rightFruit: rightFruit[0],
          targetPosition: targetPosition,
          targetSwitch:targetSwitch[0],
          pref: cond[0][3],
          inf: cond[0][2],
          pick: pick,
          correct_inf: correct_inf,
          correct_pref: correct_pref,
          rt: endTime - startTime,
            };
     
          experiment.data.push(data);
              
                  setTimeout(function() {
                      clickedItem.style.border = '0px';
                      experiment.eat()
                  }, 1500)
          });
   
          $(".selector_r").click(function() {
              
              var clickedItem = event.target;
              
              var pick = event.target.id;
              
              clickedItem.style.border = '5px solid blue';
              
              $(".selector_r").unbind("click");
              
              $(".selector_l").hide();
              
               var endTime = (new Date()).getTime();    
    
              if (experiment.cond[0][2]=="right" &&   experiment.targetSwitch[0] == "stay") {
       
                  var correct_inf =1
                  
                  } else if (experiment.cond[0][2]=="left" && experiment.targetSwitch[0] == "switch") {
                      
                      var correct_inf =1
                      
                      } else {
                      
                          var correct_inf = 0
                      };

              var subid = experiment.subid; 
              var subage = experiment.subage; 
              
              if (experiment.cond[0][2] == experiment.cond[0][3]){
                  var alignment = "congruent";
              }   else {
                  var alignment = "incongruent";
              };
              
              
              if (experiment.cond[0][2] == "left" && experiment.fruitPosition[0] == leftFruit[0]) {
          
                  var targetPosition = "inner";  
          
              } else if (experiment.cond[0][2] == "right" && experiment.fruitPosition[0] ==     rightFruit[0]) {
                  
                  var targetPosition = "inner";  
               
              } else {
                    
                  var targetPosition = "outer"; 
                          
              };
              
              
           
              if (experiment.cond[0][3]=="right" &&   experiment.targetSwitch[0] == "stay") {
       
                  var correct_pref =1
                  
                  } else if (experiment.cond[0][3]=="left" && experiment.targetSwitch[0] == "switch") {
                      
                      var correct_pref =1
                      
                      } else {
                      
                          var correct_pref = 0
                          };
       
    // data collected  
      data = {
          subid: subid,
          subage: subage,
          experiment: "mcc_kids_ex3_pref",
          trial: trial[0],
          speaker: experiment.cond[0][1],
          alignment: alignment,
          agent: agents[0],
          leftFruit: leftFruit[0],
          rightFruit: rightFruit[0],
          targetPosition: targetPosition,
          targetSwitch:targetSwitch[0],
          pref: cond[0][3],
          inf: cond[0][2],
          pick: pick,
          correct_inf: correct_inf,
          correct_pref: correct_pref,
          rt: endTime - startTime,
      };
              experiment.data.push(data);
                 
              setTimeout(function() {
                  clickedItem.style.border = '0px';
                  experiment.eat()
              }, 1500)
                       });

      }, 3000)  
  
},

    
    
// moving on within a trial
  next: function() {
  // when training is over show sinished training slide 

   // when no more trials are left, end experiment    
    if (experiment.trial.length == 0){
        setTimeout(function() {experiment.end() }, 0);
      return;
    };  
      
  
  // after exposure is finished, switch to choice      
    
      $("#text").text("")
      $("#text2").text("")
      
      showLeftFriend(experiment.trees[0])
     
      showRightFriend(experiment.trees[0])
      
      
      showSlide("stage");  
      
      
      background("images/back"+back[0]+".jpg");
  
  if (experiment.trial[0] == "filler1"){
    
        
        sourceLeftFruit("images/"+leftFruit[0]+".png");
        showLeftFruit(); 
        sourceLeftFruit2("images/empty.png");
        showLeftFruit2(); 
        sourceRightFruit("images/empty.png");
        showRightFruit();
        sourceRightFruit2("images/"+rightFruit[0]+".png");
        showRightFruit2(); 
    } else  if (experiment.trial[0] == "filler2"){
       sourceLeftFruit2("images/"+leftFruit[0]+".png");
        showLeftFruit2(); 
        sourceLeftFruit("images/empty.png");
        showLeftFruit(); 
        sourceRightFruit("images/empty.png");
        showRightFruit();
        sourceRightFruit2("images/"+rightFruit[0]+".png");
        showRightFruit2();    
        
    } else if (experiment.trial[0] == "pause"){
         experiment.pause();
        experiment.trial.shift();
        return;
                   
    } else {
        
        if (experiment.cond[0][2] == "left") {
       
            if (experiment.fruitPosition2[0] == leftFruit[0]){
                sourceRightFruit("images/"+rightFruit[0]+".png");
                showRightFruit();
                sourceRightFruit2("images/empty.png");
                showRightFruit2();
            } else {
                sourceRightFruit("images/empty.png");
                showRightFruit();
                sourceRightFruit2("images/"+rightFruit[0]+".png");
                showRightFruit2();   
            }
    
            if (experiment.fruitPosition[0] == leftFruit[0]) {                        
                sourceLeftFruit("images/"+experiment.fruitPosition[0]+".png");
                showLeftFruit();
                sourceLeftFruit2("images/"+experiment.fruitPosition[1]+".png");
                showLeftFruit2(); 
            } else {
                sourceLeftFruit2("images/"+experiment.fruitPosition[1]+".png");
                showLeftFruit2();
                sourceLeftFruit("images/"+experiment.fruitPosition[0]+".png");
                showLeftFruit();  
            }; 
    
        } else { 
            if (experiment.fruitPosition2[0] == leftFruit[0]){
                sourceLeftFruit("images/"+leftFruit[0]+".png");
                showLeftFruit();
                sourceLeftFruit2("images/empty.png");
                showLeftFruit2();  
            } else {
                sourceLeftFruit("images/empty.png");
                showLeftFruit();
                sourceLeftFruit2("images/"+leftFruit[0]+".png");
                showLeftFruit2();   
            }
                
        if (experiment.fruitPosition[0] == rightFruit[0]) {          sourceRightFruit("images/"+experiment.fruitPosition[0]+".png");
            showRightFruit();
            sourceRightFruit2("images/"+experiment.fruitPosition[1]+".png");
            showRightFruit2(); 
        } else {
        sourceRightFruit2("images/"+experiment.fruitPosition[1]+".png");
            showRightFruit2();
            sourceRightFruit("images/"+experiment.fruitPosition[0]+".png");
            showRightFruit();  
        }; 
          
            };
    };
 
      if (experiment.agentOrient[0][0] == "straight") {
                  
          showAgent(agents[0],experiment.agentOrient[0][0]);
              
          sourceSound("sound/"+agents[0]+"_hello.mp3");
          playSound();
          
          pause("next",2000);
          
      } else if (experiment.agentOrient[0][0] == "straight2") {
          
          if (experiment.cond[0][1] == "same") {
              
              showAgent(agents[0],"straight")
              
              sourceSound("sound/"+agents[0]+"_return.mp3");
              playSound();
          } else {
              
              showAgent(altAgents[0],"straight")
              
              sourceSound("sound/"+altAgents[0]+"_hello.mp3");
              playSound();
          }
              
         
              
      } else if (experiment.agentOrient[0][0] == "label") {
          
           
          pause("next",7000);
          
          if (experiment.cond[0][1] == "same") {
          
              sourceSound("sound/"+agents[0]+"_label.mp3");
              playSound();
              
              
              if (experiment.cond[0][2] == "left"){
              
                  showAgent(agents[0],"point_l")      
         
                  $("#"+trees[0]+"_l").animate({bottom: '200', queue:  false},400)
                  $("#fruit_l").animate({bottom: '580', queue:  true},400)
                  $("#fruit_l2").animate({bottom: '460', queue:  true},400)
                  $("#"+trees[0]+"_l").animate({bottom: '160', queue:    true},400)
                  $("#fruit_l").animate({bottom: '540', queue:  true},400)
                  $("#fruit_l2").animate({bottom: '420', queue:  true},400)
            
              
                  
                  setTimeout(function() {
                      showAgent(agents[0],"look_l") 
                  }, 3000)   
            
                  setTimeout(function() {
                      showAgent(agents[0],"point_l")
                      $("#"+trees[0]+"_l").animate({bottom: '200', queue:  false},400)
                      $("#fruit_l").animate({bottom: '580', queue:  false},400)
                      $("#fruit_l2").animate({bottom: '460', queue:  false},400)
                      $("#"+trees[0]+"_l").animate({bottom: '160', queue:    true},400)
                      $("#fruit_l").animate({bottom: '540', queue:  true},400)
                      $("#fruit_l2").animate({bottom: '420', queue:  true},400)
                  }, 4500)
        
                  setTimeout(function() {
                      showAgent(agents[0],"look_l") 
                  }, 6000)
             
              } else {
             
                  showAgent(agents[0],"point_r")
              
         
                  $("#"+trees[0]+"_r").animate({bottom: '200', queue:  false},400)
                  $("#fruit_r").animate({bottom: '580', queue:  false},400)
                  $("#fruit_r2").animate({bottom: '460', queue:  false},400)
              
                  $("#"+trees[0]+"_r").animate({bottom: '160', queue:    true},400)
                  $("#fruit_r").animate({bottom: '540', queue:    true},400)
                  $("#fruit_r2").animate({bottom: '420', queue:    true},400)
              
            
                  
                  setTimeout(function() {
                      showAgent(agents[0],"look_r") 

                  }, 3000)   
            
                  setTimeout(function() {
                      showAgent(agents[0],"point_r") 
                      $("#"+trees[0]+"_r").animate({bottom: '200', queue:  false},400)
                      $("#fruit_r").animate({bottom: '580', queue:  false},400)
                      $("#fruit_r2").animate({bottom: '460', queue:  false},400)
                      $("#"+trees[0]+"_r").animate({bottom: '160', queue:    false},400)
                      $("#fruit_r").animate({bottom: '540', queue:    true},400)
                      $("#fruit_r2").animate({bottom: '420', queue:    true},400)
                  }, 4500)
        
                  setTimeout(function() {
                      showAgent(agents[0],"look_r") 
                  }, 6000)
              };
              
          } else {
              
              sourceSound("sound/"+altAgents[0]+"_label.mp3");
              playSound();
              
              if (experiment.cond[0][2] == "left"){
              
                  showAgent(altAgents[0],"point_l")      
         
                  $("#"+trees[0]+"_l").animate({bottom: '200', queue:  false},400)
                  $("#fruit_l").animate({bottom: '580', queue:  true},400)
                  $("#fruit_l2").animate({bottom: '460', queue:  true},400)
                  $("#"+trees[0]+"_l").animate({bottom: '160', queue:    true},400)
                  $("#fruit_l").animate({bottom: '540', queue:  true},400)
                  $("#fruit_l2").animate({bottom: '420', queue:  true},400)
            
              
                  
                  setTimeout(function() {
                      showAgent(altAgents[0],"look_l") 
                  }, 3000)   
            
                  setTimeout(function() {
                      showAgent(altAgents[0],"point_l")
                      $("#"+trees[0]+"_l").animate({bottom: '200', queue:  false},400)
                      $("#fruit_l").animate({bottom: '580', queue:  true},400)
                      $("#fruit_l2").animate({bottom: '460', queue:  true},400)
                      $("#"+trees[0]+"_l").animate({bottom: '160', queue:    true},400)
                      $("#fruit_l").animate({bottom: '540', queue:  true},400)
                      $("#fruit_l2").animate({bottom: '420', queue:  true},400)
                  }, 4500)
        
                  setTimeout(function() {
                      showAgent(altAgents[0],"look_l") 
                  }, 6000)
             
              } else {
             
                  showAgent(altAgents[0],"point_r")
              
         
                  $("#"+trees[0]+"_r").animate({bottom: '200', queue:  false},400)
                  $("#fruit_r").animate({bottom: '580', queue:  false},400)
                  $("#fruit_r2").animate({bottom: '460', queue:  false},400)
              
                  $("#"+trees[0]+"_r").animate({bottom: '160', queue:    true},400)
                  $("#fruit_r").animate({bottom: '540', queue:    true},400)
                  $("#fruit_r2").animate({bottom: '420', queue:    true},400)
              
            
                  
                  setTimeout(function() {
                      showAgent(altAgents[0],"look_r") 

                  }, 3000)   
            
                  setTimeout(function() {
                      showAgent(altAgents[0],"point_r") 
                      $("#"+trees[0]+"_r").animate({bottom: '200', queue:  false},400)
                      $("#fruit_r").animate({bottom: '580', queue:  false},400)
                      $("#fruit_r2").animate({bottom: '460', queue:  false},400)
                 
                      $("#"+trees[0]+"_r").animate({bottom: '160', queue:    true},400)
                      $("#fruit_r").animate({bottom: '540', queue:    true},400)
                      $("#fruit_r2").animate({bottom: '420', queue:    true},400)
                  }, 4500)
        
                  setTimeout(function() {
                      showAgent(altAgents[0],"look_r") 
                  }, 6000)
              };
          }
          
      } else if (experiment.agentOrient[0][0] == "down") {
          
          if (experiment.cond[0][1] == "same") { 
              
              showAgent(agents[0],"straight")
          
          } else {
          
              showAgent(altAgents[0],"straight")
          };
                  
          $("#"+trees[0]+"_l").animate({opacity: '0', queue: false},1000)
          $("#fruit_l").animate({opacity: '0', queue: false},1000)
          $("#fruit_l2").animate({opacity: '0', queue: false},1000)
          $("#fruit_r").animate({opacity: '0', queue: false},1000)
          $("#fruit_r2").animate({opacity: '0', queue: false},1000)
          $("#"+trees[0]+"_r").animate({opacity: '0', queue: false},1000)
          
           pause("next",2000);
          
          setTimeout(function() {
              experiment.choice() }, 1500);
          return;
          
      }  else if (experiment.agentOrient[0][0] == "point_l"){
        
        if (experiment.cond[0][3] == "left") {
            
            
            pause("next",4000); 
            sourceSound("sound/"+agents[0]+"_ppoint.mp3");
            playSound();
            
            if (experiment.cond[0][2] == "right"){
                
                if (experiment.fruitPosition2[0] == leftFruit[0]){
                            
                    showAgent(agents[0],"point_l_up_p") 
                    
                } else {
                    
                    showAgent(agents[0],"point_l_straight_p") 
                }
          
                $("#fruit_l").animate({width: "200px", bottom: "520px",left: "260px", queue: true},1500);
                $("#fruit_l").animate({width: "160px", bottom: "540px",left: "220px", queue: true},1500);
                $("#fruit_l2").animate({width: "200px", bottom: "400px", left: "85px", queue: true},1500);
                $("#fruit_l2").animate({width: "160px", bottom: "420px", left: "15px", queue: true},1500);
                } else {
                    if (experiment.fruitPosition[0] == leftFruit[0]){
                        
                        showAgent(agents[0],"point_l_up_p")
                        
                        $("#fruit_l").animate({width: "200px", bottom: "520px",left: "260px", queue: true},1500);
                        $("#fruit_l").animate({width: "160px", bottom: "540px",left: "220px", queue: true},1500);
                    } else {
                        
                        showAgent(agents[0],"point_l_straight_p")
                        
                        $("#fruit_l2").animate({width: "200px", bottom: "400px", left: "85px", queue: true},1500);
                        $("#fruit_l2").animate({width: "160px", bottom: "420px", left: "15px", queue: true},1500);
                    };    
                };
        } else {
      
            pause("next",4000); 
            sourceSound("sound/"+agents[0]+"_npoint.mp3");
            playSound(); 
            
            if (experiment.cond[0][2] == "right"){
  
                if (experiment.fruitPosition2[0] == leftFruit[0]){
                            
                    showAgent(agents[0],"point_l_up_n") 
                    
                } else {
                    
                    showAgent(agents[0],"point_l_straight_n") 
                }   
                
                $("#fruit_l").animate({width: "200px", bottom: "520px",left: "260px", queue: true},1500);
                $("#fruit_l").animate({width: "160px", bottom: "540px",left: "220px", queue: true},1500);
                $("#fruit_l2").animate({width: "200px", bottom: "400px", left: "85px", queue: true},1500);
                $("#fruit_l2").animate({width: "160px", bottom: "420px", left: "15px", queue: true},1500);
                
            } else {
                
                if (experiment.fruitPosition[0] == leftFruit[0]){
                    
                    showAgent(agents[0],"point_l_up_n")
                    
                    $("#fruit_l").animate({width: "200px", bottom: "520px",left: "260px", queue: true},1500);
                    $("#fruit_l").animate({width: "160px", bottom: "540px",left: "220px", queue: true},1500);
                } else {
                    
                    showAgent(agents[0],"point_l_straight_n")
                    
                    $("#fruit_l2").animate({width: "200px", bottom: "400px", left: "85px", queue: true},1500);
                    $("#fruit_l2").animate({width: "160px", bottom: "420px", left: "15px", queue: true},1500);
                    };    
                };
        }
        
    } else if (experiment.agentOrient[0][0] == "point_r") { 
        
        if (experiment.cond[0][3] == "right") {
            pause("next",4000); 
                sourceSound("sound/"+agents[0]+"_ppoint.mp3");
                playSound();
            
            if (experiment.cond[0][2] == "left"){
                
                
                if (experiment.fruitPosition2[0] == leftFruit[0]){
                            
                    showAgent(agents[0],"point_r_up_p") 
                    
                } else {
                    
                    showAgent(agents[0],"point_r_straight_p") 
                } 
     
                
                $("#fruit_r").animate({width: "200px", bottom: "520px", left:"640px", queue: true},1500);
                $("#fruit_r").animate({width: "160px", bottom: "540px", left:"680px", queue: true},1500);
                $("#fruit_r2").animate({width: "200px", bottom: "400px", left:"805px", queue: true},1500);
                $("#fruit_r2").animate({width: "160px", bottom: "420px", left:"875px", queue: true},1500);
            
            } else {
                  
                if (experiment.fruitPosition[0] == rightFruit[0]){
                    
                     showAgent(agents[0],"point_r_up_p")
                    
                    $("#fruit_r").animate({width: "200px", bottom: "520px", left:"640px", queue: true},1500);
                    $("#fruit_r").animate({width: "160px", bottom: "540px", left:"680px", queue: true},1500);
                } else {
                    
                    showAgent(agents[0],"point_r_straight_p") 
                    
                    $("#fruit_r2").animate({width: "200px", bottom: "400px", left:"805px", queue: true},1500);
                    $("#fruit_r2").animate({width: "160px", bottom: "420px", left:"875px", queue: true},1500);
                }
            };
        } else {
      
            pause("next",4000); 
            sourceSound("sound/"+agents[0]+"_npoint.mp3");
            playSound();  
            
            if (experiment.cond[0][2] == "left"){
                
                if (experiment.fruitPosition2[0] == leftFruit[0]){
                            
                    showAgent(agents[0],"point_r_up_n") 
                    
                } else {
                    
                    showAgent(agents[0],"point_r_straight_n") 
                } 
                
                $("#fruit_r").animate({width: "200px", bottom: "520px", left:"640px", queue: true},1500);
                $("#fruit_r").animate({width: "160px", bottom: "540px", left:"680px", queue: true},1500);
                $("#fruit_r2").animate({width: "200px", bottom: "400px", left:"805px", queue: true},1500);
                $("#fruit_r2").animate({width: "160px", bottom: "420px", left:"875px", queue: true},1500);
            } else {
                if (experiment.fruitPosition[0] == rightFruit[0]){
                    
                    showAgent(agents[0],"point_r_up_n")
                    
                    $("#fruit_r").animate({width: "200px", bottom: "520px", left:"640px", queue: true},1500);
                    $("#fruit_r").animate({width: "160px", bottom: "540px", left:"680px", queue: true},1500);
                } else {
                    
                    showAgent(agents[0],"point_r_straight_n") 
                    
                    $("#fruit_r2").animate({width: "200px", bottom: "400px", left:"805px", queue: true},1500);
                    $("#fruit_r2").animate({width: "160px", bottom: "420px", left:"875px", queue: true},1500);
                  };
              };
        };
    } else if (experiment.agentOrient[0][0] == "disappear") { 
        showAgent(agents[0],"straight")
        sourceSound("sound/ring.mp3")
        playSound();

        setTimeout(function()
            {showAgent(agents[0],"disappear")}, 1500);
        pause("next",3000);

        setTimeout(function(){hideAgent()}, 3000);
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
