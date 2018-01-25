
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

$("#start_button").click(function() {
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
var allAgents = ["Frog","Mouse","Monkey","Bunny","Dog","Bear","Tiger","Cat","Sheep"];
var testAgents = allAgents.sort(() => .5 - Math.random()).slice(0,6);
var agents = trainAgents.concat(testAgents);

var trainControl = [["false","false"]];

var testControl = shuffle([shuffle(["true","false"]),shuffle(["false","true"]),shuffle(["false","true"])]);
var control = trainControl.concat(testControl);

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
    ["straight","down"],
    ["straight","down"],
    ["straight","down"],
    ["straight","down"],
    ["straight","down"],
    ["straight","down"],
    ["straight","down"],
    ["straight","down"]];

var agentOrient = shuffle(agentOrientations);

var trainInf = ["left","right"];
var testInf = shuffle(["left","right","left","right","left","right"]);
var inf = trainInf.concat(testInf)

// Show the instructions slide .
showSlide("instructions");


// ## The main event
var experiment = {
  // Parameters for this sequence.
  trial: trial,
  control: control,
  agents: agents,
  agentOrient: agentOrient,
  rightFruit: rightFruit,
  leftFruit: leftFruit,
  inf: inf,
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
   
    showEat(agents[0])
   
    $("#continue").text("Click on the animal to continue")
        
    var endTime = (new Date()).getTime();    
    
    var corrFruit = $(".fruit_"+inf[0][0]).attr("src");
      
    var pick = event.target.src;
    
    if (pick.indexOf(corrFruit) > -1) {
        var correct =1
        } else {
        var correct = 0
        };
      
        
      data = {
        condition: "informativeness",
        trial: trial[0],
        control: control[0][0],
        agent: agents[0],
        leftFruit: leftFruit[0],
        rightFruit: rightFruit[0],
        inf: inf[0],
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
    $(".fruit_r2").unbind("click");
    $(".fruit_l2").unbind("click");
    $("#text").text("");
    $("#text2").text("");
    $("#text3").text("");
   
    sourceLeftFruit("images/empty.png");
            showLeftFruit(); 
    sourceRightFruit("images/empty.png");
            showRightFruit();
     
     
    experiment.trial.shift();  
    experiment.agentOrient.shift();   
    experiment.agents.shift();
    experiment.inf.shift();
    experiment.control[0].shift();
    experiment.rightFruit.shift();
    experiment.leftFruit.shift();
     
    if(control[0].length == 0) {
        experiment.control.shift();
    }
  
     // move progress bar 
   move()  
     
    experiment.next();
  },
// Slide recording the choice


  choice: function(event) {
    
    showSlide("choice"); 
    
    $("#text2").text("")  
    setTimeout(function() {$("#text2").text("Click on the toy")}, 13000);
    
    choiceAgent(agents[0])
      
    $("#text3").text(agents[0]+" is here")  
      
    if (experiment.trial[0] == "train" || experiment.control[0][0] == "true"){
        choiceLeftFruit("images/"+leftFruit[0]+".png");
        choiceLeftFruit2("images/empty.png");
      
        choiceRightFruit("images/"+rightFruit[0]+".png");     
        choiceRightFruit2("images/empty.png");
        
        } else {
            if (experiment.inf[0] == "left") { 
                choiceLeftFruit("images/"+leftFruit[0]+".png");
                choiceLeftFruit2("images/empty.png");
      
                choiceRightFruit("images/"+rightFruit[0]+".png");     
                choiceRightFruit2("images/"+rightFruit[0]+".png");
            } else { 
                choiceLeftFruit("images/"+leftFruit[0]+".png");
                choiceLeftFruit2("images/"+leftFruit[0]+".png");
      
                choiceRightFruit("images/"+rightFruit[0]+".png");     
                choiceRightFruit2("images/empty.png");
            };
        };
       
    
    sourceSound("sound/"+agents[0]+"_choice.mp3");
    playSound();  
      
setTimeout(function() {      
    $(".fruit_r").bind("click", experiment.eat);
    $(".fruit_l").bind("click", experiment.eat);
    $(".fruit_r2").bind("click", experiment.eat);
    $(".fruit_l2").bind("click", experiment.eat);
}, 9000);
  
  },
    
  // The work horse of the sequence - what to do on every trial.
  next: function() {
  // when no more trials are left, end experiment
      
//    if (experiment.trial[0] == "train"){
//        experiment.train();
//        return;
//    };
      
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
    
    showSlide("stage");  
      
    showAgent(agents[0],experiment.agentOrient[0][0]);
    
    sourceRightFruit("images/"+rightFruit[0]+".png");
            showRightFruit();  
     
    sourceLeftFruit("images/"+leftFruit[0]+".png");
            showLeftFruit();  
      
   if (experiment.agentOrient[0][0] == "straight") { 
    //inactivate next button for the time the sound is played 
        pause("next",1500); 
        sourceSound("sound/"+agents[0]+"_hello.mp3");
        playSound();
        $("#text").text(experiment.agents[0]+" is here");
    }; 
      
    if (experiment.trial[0] == "train" || experiment.control[0][0] == "true"){
        sourceLeftFruit("images/"+leftFruit[0]+".png");
        showLeftFruit(); 
        sourceLeftFruit2("images/empty.png");
        sourceRightFruit("images/"+rightFruit[0]+".png");
        showRightFruit();
        sourceRightFruit2("images/empty.png");
        showRightFruit2(); 
    } else {    
        
        if (experiment.inf[0] == "left") { 
        sourceLeftFruit("images/"+leftFruit[0]+".png");
        showLeftFruit(); 
        sourceLeftFruit2("images/empty.png");
        showLeftFruit2(); 
        sourceRightFruit("images/"+rightFruit[0]+".png");
        showRightFruit();
        sourceRightFruit2("images/"+rightFruit[0]+".png");
        showRightFruit2();
        } else { 
        sourceLeftFruit("images/"+leftFruit[0]+".png");
        showLeftFruit(); 
        sourceLeftFruit2("images/"+leftFruit[0]+".png");
        showLeftFruit2(); 
        sourceRightFruit("images/"+rightFruit[0]+".png");
        showRightFruit();
        sourceRightFruit2("images/empty.png");
        showRightFruit2(); 
        };
    };
    
    experiment.agentOrient[0].shift(); 
  }
};
