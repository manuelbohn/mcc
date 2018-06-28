
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
    $(".look_agent_l").hide();
    $(".look_agent_r").hide();
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


var trial = ["train1","train2","finTrain",1,2,3,4,5,6,7,8]

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
    ["straight","point_r1", "point_l1","disappear","straight2","point_l2", "point_r2","disappear","gone","down"],
    ["straight","point_l1", "point_r1","disappear","straight2","point_r2", "point_l2","disappear","gone","down"],
    ["straight","point_l1", "point_r1","disappear","straight2","point_l2", "point_r2","disappear","gone","down"],
    ["straight","point_r1", "point_l1","disappear","straight2","point_r2", "point_l2","disappear","gone","down"],
    ["straight","point_l1", "point_r1","disappear","straight2","point_l2", "point_r2","disappear","gone","down"],
    ["straight","point_r1", "point_l1","disappear","straight2","point_l2", "point_r2","disappear","gone","down"],
    ["straight","point_l1", "point_r1","disappear","straight2","point_r2", "point_l2","disappear","gone","down"],
    ["straight","point_r1", "point_l1","disappear","straight2","point_r2", "point_l2","disappear","gone","down"],
    ["straight","point_r1", "point_l1","disappear","straight2","point_r2", "point_l2","disappear","gone","down"],
    ["straight","point_r1", "point_l1","disappear","straight2","point_r2", "point_l2","disappear","gone","down"]];


/*
var agentOrientations = [
    ["straight","point_r1","disappear","gone","down"],
    ["straight","point_r1","disappear","gone","down"],
    ["straight","point_r1","disappear","gone","down"],
    ["straight","point_r1","disappear","gone","down"],
    ["straight","point_r1","disappear","gone","down"],
    ["straight","point_r1","disappear","gone","down"],
    ["straight","point_r1","disappear","gone","down"],
    ["straight","point_r1","disappear","gone","down"],
    ["straight","point_r1","disappear","gone","down"],
    ["straight","point_r1","disappear","gone","down"],
    ["straight","point_r1","disappear","gone","down"]];

*/

// randomize agent orientations 
var agentOrient = shuffle(agentOrientations);


var trainCond = [
    ["train1","same","left","left"],
    ["train2","same","right","right"]];
var testCond = shuffle([
    ["sameSpInfLNovelL","same","left","left"],
    ["diffSpInfLNovelL","diff","left","left"],
    ["sameSpInfRNovelL","same","right","left"],
    ["diffSpInfRNovelL","diff","right","left"],
    ["sameSpInfRNovelR","same","right","right"],
    ["diffSpInfRNovelR","diff","right","right"],
    ["sameSpInfLNovelR","same","left","right"],
    ["diffSpInfLNovelR","diff","left","right"]]);
var cond = trainCond.concat(testCond)

// Show the instructions slide .
showSlide("instructions");


// beginning of actual experiment
var experiment = {
  // Parameters for this sequence.
  trial: trial,    
  speaker: testCond[0][1],
  agents: agents,
  altAgents: altAgents,
  agentOrient: agentOrient,
  rightFruit: rightFruit,
  leftFruit: leftFruit,
  novel: cond[0][3],
  inf: cond[0][2],
  cond: cond,
  data: [],
  fruitPosition: [],
  fruitPosition2: [],
    
// end of the experiment
  end: function() {
    // Show the finish slide.
    showSlide("finished");
    setTimeout(function() { turk.submit(experiment) }, 5000);
  },
    
// end of training  
   endTraining: function() {
    showSlide("training2");
  }, 
 
// what happens between trials - display agent from previous trial and click on it to move on to the next trial  
   eat: function(event) {
    // Show the finish slide.
    showSlide("eat");
    
    sourceSound("sound/end.mp3");
    playSound();
   
   // display same agent as during choice     
    if (experiment.cond[0][1] == "diff"){
        showEat(altAgents[0])
    } else {
        showEat(agents[0])
    };
        
   
    $("#continue").text("Click on the animal to continue")
   // get time for reaction time       
    var endTime = (new Date()).getTime();    
    // select correct object from info and novel perspective
       
    if (experiment.cond[0][0] == "train1"){
        var corrFruit_inf = "car";
        var corrFruit_novel = "car";
    } else if (experiment.cond[0][0] == "train2"){
        var corrFruit_inf = "ball";
        var corrFruit_novel = "ball";
    } else {
       
        if (experiment.cond[0][2]=="left") {
            if (experiment.cond[0][3]=="left"){
                var corrFruit_inf = experiment.fruitPosition[1];
                var corrFruit_novel = experiment.fruitPosition[1];
            } else {
                var corrFruit_inf = experiment.fruitPosition[0]
                var corrFruit_novel = experiment.fruitPosition[1];
            };
        } else if (experiment.cond[0][2]=="right"){
            if (experiment.cond[0][3]=="left"){
                var corrFruit_inf = experiment.fruitPosition[0]
                var corrFruit_novel = experiment.fruitPosition[1];
            } else {
                var corrFruit_inf = experiment.fruitPosition[1]
                var corrFruit_novel = experiment.fruitPosition[1];
            };  
        };
    };
 
       
    // select chosen object    
    var pick = event.target.src;
     // code correct: does name of chosen object contain the name of the correct object
    var innerRight = $(".fruit_r").attr('src')
    var outerRight = $(".fruit_r2").attr('src')
    var innerLeft = $(".fruit_l").attr('src')
    var outerLeft = $(".fruit_l2").attr('src')  
    // check if picked object is correct from info perspective
    if (pick.indexOf(corrFruit_inf) > -1) {
        var correct_inf = 1
        } else {
        var correct_inf = 0
        };
      
    // check if picked object is correct from info perspective
    if (pick.indexOf(corrFruit_novel) > -1) {
        var correct_novel =1
        } else {
        var correct_novel = 0
        };
    
    // congruent or incongruent trial   
    if (experiment.cond[0][2] == experiment.cond[0][3]){
        var alignment = "congruent";
    }   else {
        var alignment = "incongruent";
    };
       
    // data collected  
      data = {
        experiment: "novel_strong",
        trial: trial[0],
        speaker: experiment.cond[0][1],
        alignment: alignment,
        agent: agents[0],
        altAgent: altAgents[0],
        leftFruit: leftFruit[0],
        rightFruit: rightFruit[0],
        novel: cond[0][3],
        inf: cond[0][2],
        corrFruit_inf: corrFruit_inf,
        corrFruit_novel: corrFruit_novel, 
        pick: pick,
        correct_inf: correct_inf,
        correct_novel: correct_novel,
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
    $(".fruit_r2").unbind("click");
    $(".fruit_l2").unbind("click");
    $("#text").text("");
    $("#text2").text("");
    $("#text3").text("");
   
    sourceLeftFruit("images/empty.png");
            showLeftFruit(); 
     sourceLeftFruit2("images/empty.png");
            showLeftFruit2(); 
    sourceRightFruit("images/empty.png");
            showRightFruit();
       sourceRightFruit2("images/empty.png");
            showRightFruit2();
     
     if(experiment.cond[0][1] == "diff") {
        experiment.altAgents.shift()};
     
    experiment.trial.shift();  
    experiment.agentOrient.shift();   
    experiment.agents.shift();
    experiment.cond.shift();
    experiment.rightFruit.shift();
    experiment.leftFruit.shift();
    experiment.fruitPosition = shuffle([leftFruit[0],rightFruit[0]]);
    experiment.fruitPosition2 = shuffle([leftFruit[0],rightFruit[0]]);
    
  
     // move progress bar and move on 
    move()  
    experiment.next();
  },
// Slide recording the choice

// recording the choice 
  choice: function(event) {
    
    showSlide("choice"); 
     
    $("#text2").text("");  
    setTimeout(function() {$("#text2").text("Click on the toy")}, 12000);
    
      
     // specify what happens depending on test condition
    if (experiment.cond[0][0] == "train1"){
        showAgent(agents[0],"choice");
        
        $("#text3").text(agents[0]+" is here");
        
        choiceLeftFruit("images/"+leftFruit[0]+".png");
        choiceLeftFruit2("images/empty.png");
        
        $("#text3").text(agents[0]+" is here");
      
        choiceRightFruit("images/"+rightFruit[0]+".png");     
        choiceRightFruit2("images/empty.png");
        
        } else if (experiment.cond[0][0] == "train2"){
        showAgent(agents[0],"choice");
            
        $("#text3").text(agents[0]+" is here");
        
        choiceLeftFruit("images/empty.png");
        choiceLeftFruit2("images/"+leftFruit[0]+".png");
      
        choiceRightFruit("images/empty.png");     
        choiceRightFruit2("images/"+rightFruit[0]+".png");
        
    // test conditions
            
        } else if (experiment.cond[0][1] == "diff" &&
                    experiment.cond[0][2] == "right"){
        
            showAgent(altAgents[0],"choice");
            setTimeout(function() {
            showAgent(altAgents[0],"look_r");
            }, 2500)
            
            $("#text3").text(agents[0]+" is gone ... now "+altAgents[0]+" is here");
           
            
            if (experiment.fruitPosition[0] == rightFruit[0]) {          
                        
                        choiceRightFruit("images/"+experiment.fruitPosition[0]+".png");        
                        choiceRightFruit2("images/"+experiment.fruitPosition[1]+".png");
            
                        
                    } else { 
                                  
                        choiceRightFruit("images/"+experiment.fruitPosition[1]+".png");
                        choiceRightFruit2("images/"+experiment.fruitPosition[0]+".png");
                    }; 
                 
            if (experiment.cond[0][3] == "left") {
            
                if (experiment.fruitPosition2[0] == leftFruit[0]){
                    
                    
                    choiceLeftFruit("images/"+experiment.fruitPosition[1]+".png");
                    choiceLeftFruit2("images/empty.png");
                } else {
                    
                    choiceLeftFruit("images/empty.png");
                    choiceLeftFruit2("images/"+experiment.fruitPosition[1]+".png");
                    
                };
             } else {
                  if (experiment.fruitPosition2[0] == leftFruit[0]){
                    choiceLeftFruit("images/"+experiment.fruitPosition[0]+".png");
                    choiceLeftFruit2("images/empty.png");
                } else {
                    choiceLeftFruit("images/empty.png");
                    choiceLeftFruit2("images/"+experiment.fruitPosition[0]+".png");   
                }; 
             };
                
   /*         setTimeout(function() {    
            $("#choiceFruit_r").animate({width: "180px",opacity: '0.3', queue: false, duration: 1000});
            $("#choiceFruit_r").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
            $("#choiceFruit_r2").animate({width: "180px",opacity: '0.3', queue: false, duration: 1000});
            $("#choiceFruit_r2").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
            }, 2500);*/
            
        } else if (experiment.cond[0][1] == "diff" &&
                    experiment.cond[0][2] == "left"){
        
            showAgent(altAgents[0],"choice");
            setTimeout(function() {
            showAgent(altAgents[0],"look_l");
            }, 2500)
           
            $("#text3").text(agents[0]+" is gone ... now "+altAgents[0]+" is here");
           
            if (experiment.fruitPosition[0] == leftFruit[0]) {          
                        
                choiceLeftFruit("images/"+experiment.fruitPosition[0]+".png");
                choiceLeftFruit2("images/"+experiment.fruitPosition[1]+".png");
                        
            } else { 
                        
                choiceLeftFruit("images/"+experiment.fruitPosition[1]+".png");
                choiceLeftFruit2("images/"+experiment.fruitPosition[0]+".png");
 
            }; 
            
            if (experiment.cond[0][3] == "left") {
            
                if (experiment.fruitPosition2[0] == leftFruit[0]){
                    choiceRightFruit2("images/"+experiment.fruitPosition[0]+".png");
                    choiceRightFruit("images/empty.png");
                } else {
                    choiceRightFruit2("images/empty.png");
                    choiceRightFruit("images/"+experiment.fruitPosition[0]+".png");   
                };
            } else {
                  if (experiment.fruitPosition2[0] == leftFruit[0]){
                    choiceRightFruit2("images/"+experiment.fruitPosition[1]+".png");
                    choiceRightFruit("images/empty.png");
                } else {
                    choiceRightFruit2("images/empty.png");
                    choiceRightFruit("images/"+experiment.fruitPosition[1]+".png");   
                }; 
             };
            
/*            setTimeout(function() { 
            $("#choiceFruit_l").animate({width: "180px",opacity: '0.3', queue: false, duration: 1000});
            $("#choiceFruit_l").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
            $("#choiceFruit_l2").animate({width: "180px",opacity: '0.3', queue: false, duration: 1000});
            $("#choiceFruit_l2").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
            }, 2500); */      
                   
            
        } else if (experiment.cond[0][1] == "same" &&
                    experiment.cond[0][2] == "right"){
        
            showAgent(agents[0],"choice");
            setTimeout(function() {
            showAgent(agents[0],"look_r");
            }, 2500)
      
            if (experiment.fruitPosition[0] == rightFruit[0]) {          
                        
                        choiceRightFruit("images/"+experiment.fruitPosition[0]+".png");        
                        choiceRightFruit2("images/"+experiment.fruitPosition[1]+".png");
            
                        
                    } else { 
                             
                        choiceRightFruit("images/"+experiment.fruitPosition[1]+".png");   
                        choiceRightFruit2("images/"+experiment.fruitPosition[0]+".png"); 
                    }; 
                 
            if (experiment.cond[0][3] == "left") {
            
                if (experiment.fruitPosition2[0] == leftFruit[0]){
                    
                    
                    choiceLeftFruit("images/"+experiment.fruitPosition[1]+".png");
                    choiceLeftFruit2("images/empty.png");
                } else {
                    
                    choiceLeftFruit("images/empty.png");
                    choiceLeftFruit2("images/"+experiment.fruitPosition[1]+".png");
                    
                };
             } else {
                  if (experiment.fruitPosition2[0] == leftFruit[0]){
                    choiceLeftFruit("images/"+experiment.fruitPosition[0]+".png");
                    choiceLeftFruit2("images/empty.png");
                } else {
                    choiceLeftFruit("images/empty.png");
                    choiceLeftFruit2("images/"+experiment.fruitPosition[0]+".png");   
                }; 
             };
                
 /*           setTimeout(function() {     
            $("#choiceFruit_r").animate({width: "180px",opacity: '0.3', queue: false, duration: 1000});
            $("#choiceFruit_r").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
            $("#choiceFruit_r2").animate({width: "180px",opacity: '0.3', queue: false, duration: 1000});
            $("#choiceFruit_r2").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
            }, 2500);*/
            
        } else {
        
            showAgent(agents[0],"choice");
            setTimeout(function() {
            showAgent(agents[0],"look_l");
            }, 2500)     
           
          $("#text3").text(agents[0]+" is here");   
           
            if (experiment.fruitPosition[0] == leftFruit[0]) {          
                        
                choiceLeftFruit("images/"+experiment.fruitPosition[0]+".png");
                choiceLeftFruit2("images/"+experiment.fruitPosition[1]+".png");
                        
            } else { 
                        
                choiceLeftFruit("images/"+experiment.fruitPosition[1]+".png");
                choiceLeftFruit2("images/"+experiment.fruitPosition[0]+".png");
 
            }; 
            
           if (experiment.cond[0][3] == "left") {
            
                if (experiment.fruitPosition2[0] == leftFruit[0]){
                    choiceRightFruit2("images/"+experiment.fruitPosition[0]+".png");
                    choiceRightFruit("images/empty.png");
                } else {
                    choiceRightFruit2("images/empty.png");
                    choiceRightFruit("images/"+experiment.fruitPosition[0]+".png");   
                };
            } else {
                  if (experiment.fruitPosition2[0] == leftFruit[0]){
                    choiceRightFruit2("images/"+experiment.fruitPosition[1]+".png");
                    choiceRightFruit("images/empty.png");
                } else {
                    choiceRightFruit2("images/empty.png");
                    choiceRightFruit("images/"+experiment.fruitPosition[1]+".png");   
                }; 
             };
            
/*            setTimeout(function() {     
            $("#choiceFruit_l").animate({width: "180px",opacity: '0.3', queue: false, duration: 1000});
            $("#choiceFruit_l").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
            $("#choiceFruit_l2").animate({width: "180px",opacity: '0.3', queue: false, duration: 1000});
            $("#choiceFruit_l2").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
            }, 2500);*/
        };

      
    // animate agent in test trials
    if (experiment.trial[0] == "train1" || experiment.trial[0] == "train2" ){
    } else {  
    $("#"+agents[0]+"_choice").animate({height: "380px",opacity: '0.3', queue: false, duration: "slow"});
    $("#"+agents[0]+"_choice").animate({height: "280px",opacity: '1', queue: false, duration: "slow"});
      
    $("#"+altAgents[0]+"_choice").animate({height: "380px",opacity: '0.3', queue: false, duration: "slow"});
    $("#"+altAgents[0]+"_choice").animate({height: "280px",opacity: '1', queue: false, duration: "slow"});
     };  
    
    // play choice sound only in training  
     if (experiment.trial[0] == "train1" || experiment.trial[0] == "train2" ){
        sourceSound("sound/"+agents[0]+"_train.mp3");
        playSound();
    } else { 
     // play hello/return sound and choice depending on speaker chnage condition in test trials  
        
        
    if (experiment.cond[0][1] == "diff") {
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
     };
    
    // choice can be made by clicking the objects after - possible after 9s  
    setTimeout(function() {
        if (experiment.trial[0] == "train1" || experiment.trial[0] == "train2") {
            $(".fruit_l").bind("click", experiment.eat);
            $(".fruit_l2").bind("click", experiment.eat);
            
            $(".fruit_r").bind("click", experiment.eat);
            $(".fruit_r2").bind("click", experiment.eat);
        } else { 
            if (experiment.cond[0][2] == "left") {
                $(".fruit_l").bind("click", experiment.eat);
                $(".fruit_l2").bind("click", experiment.eat);
            } else {  
                $(".fruit_r").bind("click", experiment.eat);
                $(".fruit_r2").bind("click", experiment.eat);
            };
        };
}, 7000);
  
  },
 // sequence of events during training exposure
 train: function() {
      
    showSlide("stage");  
      // show agent   
    showAgent(agents[0],experiment.agentOrient[0][0]);
    
    // show objects on both sides 
   if (experiment.trial[0] == "train1"){
        sourceLeftFruit("images/"+leftFruit[0]+".png");
        showLeftFruit(); 
        sourceLeftFruit2("images/empty.png");
        showLeftFruit2(); 
        sourceRightFruit("images/"+rightFruit[0]+".png");
        showRightFruit();
        sourceRightFruit2("images/empty.png");
        showRightFruit2(); 
    } else {
        sourceLeftFruit("images/empty.png");
        showLeftFruit(); 
        sourceLeftFruit2("images/"+leftFruit[0]+".png");
        showLeftFruit2(); 
        sourceRightFruit("images/empty.png");
        showRightFruit();
        sourceRightFruit2("images/"+rightFruit[0]+".png");
        showRightFruit2(); 
    } 

    // agent says hello  
    if (experiment.agentOrient[0][0] == "straight") { 
    //inactivate next button for the time the sound is played 
        pause("next",2000); 
        sourceSound("sound/"+agents[0]+"_hello.mp3");
        playSound();
        $("#text").text(experiment.agents[0]+" is here");
        }; 
     
    // move to choice after agent has said hello 
    if (experiment.agentOrient[0][0] == "point_l1" || experiment.agentOrient[0][0] == "point_r1") {
        experiment.choice();
        return;
    };  
   // play sound depending on agent orientation  
    
      experiment.agentOrient[0].shift();
     
  },   
    
// moving on within a trial.
  next: function() {
    // if training trial, do training sequencet
    if (experiment.trial[0] == "train1" || experiment.trial[0] == "train2" ){
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
   // play sound depending on agent orientation  
    
    showSlide("stage");  
      
    showAgent(agents[0],experiment.agentOrient[0][0]);
    
  // display and manipulate obejcts on table depending on  test condition

if (experiment.cond[0][2] == "right"){
            
            //    if (experiment.cond[0][3] == "left") {
            
                    if (experiment.fruitPosition[0] == rightFruit[0]) {          
                        
                        sourceRightFruit("images/"+experiment.fruitPosition[0]+".png");
                        showRightFruit();
                        
                        sourceRightFruit2("images/empty.png");
                        showRightFruit2(); 
                        
                    } else { 
                        
                        sourceRightFruit("images/empty.png");
                        showRightFruit();
                        
                        sourceRightFruit2("images/"+experiment.fruitPosition[0]+".png");
                        showRightFruit2(); 
                        
                    }; 
                    
                        sourceLeftFruit("images/empty.png");
                        showLeftFruit();
                        sourceLeftFruit2("images/empty.png");
                        showLeftFruit2(); 
                   
              
                    
            /*    } else { 
                    
                     if (experiment.fruitPosition[0] == rightFruit[0]) {          
                        
                        sourceRightFruit("images/"+experiment.fruitPosition[1]+".png");
                        showRightFruit();
                        
                        sourceRightFruit2("images/empty.png");
                        showRightFruit2(); 
                        
                    } else { 
                        
                        sourceRightFruit("images/empty.png");
                        showRightFruit();
                        
                        sourceRightFruit2("images/"+experiment.fruitPosition[1]+".png");
                        showRightFruit2(); 
                        
                    }; 
                    
                        sourceLeftFruit("images/empty.png");
                        showLeftFruit();
                        sourceLeftFruit2("images/empty.png");
                        showLeftFruit2(); 
                    
                };    */
            
    } else {
            
           // if (experiment.cond[0][2] == "left") {
            
               if (experiment.fruitPosition[0] == leftFruit[0]) {          
                        
                        sourceLeftFruit("images/"+experiment.fruitPosition[0]+".png");
                        showLeftFruit();
                        
                        sourceLeftFruit2("images/empty.png");
                        showLeftFruit2(); 
                        
                    } else { 
                        
                        sourceLeftFruit("images/empty.png");
                        showLeftFruit(); 
                        
                        sourceLeftFruit2("images/"+experiment.fruitPosition[0]+".png");
                        showLeftFruit2();
 
                    }; 
                
                        sourceRightFruit("images/empty.png");
                        showRightFruit();
                        sourceRightFruit2("images/empty.png");
                        showRightFruit2();
                    
             /*   } else { 
                          
                if (experiment.fruitPosition[0] == rightFruit[0]) {          
                        
                        sourceLeftFruit("images/"+experiment.fruitPosition[0]+".png");
                        showLeftFruit();
                        
                        sourceLeftFruit2("images/empty.png");
                        showLeftFruit2(); 
                        
                    } else { 
                        
                        sourceLeftFruit("images/empty.png");
                        showLeftFruit(); 
                        
                        sourceLeftFruit2("images/"+experiment.fruitPosition[0]+".png");
                        showLeftFruit2();
 
                    }; 
                
                        sourceRightFruit("images/empty.png");
                        showRightFruit();
                        sourceRightFruit2("images/empty.png");
                        showRightFruit2();   
                    
                }; */
       
    };
  
   
// animate object when visible and pointed at  
    if (experiment.agentOrient[0][0].slice(0,-1) == "point_r") {
        setTimeout(function() {
            $("#fruit_r").animate({width: "200px",opacity: '0.3', queue: false, duration: 1000});
            $("#fruit_r").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
            $("#fruit_r2").animate({width: "200px",opacity: '0.3', queue: false, duration: 1000});
            $("#fruit_r2").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
        }, 1500)
    }; 
      
    if (experiment.agentOrient[0][0].slice(0,-1) == "point_l") {
        setTimeout(function() {
            $("#fruit_l").animate({width: "200px",opacity: '0.3', queue: false, duration: 1000});
            $("#fruit_l").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
            $("#fruit_l2").animate({width: "200px",opacity: '0.3', queue: false, duration: 1000});
            $("#fruit_l2").animate({width: "130px",opacity: '1', queue: false, duration: 1000});
        }, 1500)
    };       
      
      
    // play sound depending on agent orientation 
    // agent says hello  
   if (experiment.agentOrient[0][0] == "straight") {  
        pause("next",1500); 
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
      
    // animate object when visible and pointed at 
    
// commenting on objects (or their absence) on the tables depending on condition    
     if (experiment.cond[0][2] == "right"){
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
    
    
    // while agent is gone the second time, the novel object appears. After appearing both objects quickly flash
     if (experiment.agentOrient[0][0] == "gone") {;
        pause("next",3000);
    }; 
    if (experiment.cond[0][2] == "right"){
            if (experiment.agentOrient[0][0] == "gone"){
                
                if (experiment.fruitPosition[0] == rightFruit[0]) {          
                        
                        
                        sourceRightFruit2("images/"+experiment.fruitPosition[1]+".png");
                        showRightFruit2(); 
                        $("#fruit_r2").css("bottom", "460px");     
                        $("#fruit_r2").animate({bottom: "250px"},{duration: 1500});
                        
                    } else { 
                        
                        sourceRightFruit("images/"+experiment.fruitPosition[1]+".png");
                        showRightFruit();
                        $("#fruit_r").css("bottom", "460px");     
                        $("#fruit_r").animate({bottom: "250px"},{duration: 1500});

                        
                }; 
                
                if (experiment.cond[0][3] == "left") {   
              
                    
                    if (experiment.fruitPosition2[0] == leftFruit[0]) {          
                        sourceLeftFruit("images/"+experiment.fruitPosition[1]+".png");
                        showLeftFruit();
                        sourceLeftFruit2("images/empty.png");
                        showLeftFruit2(); 
                        $("#fruit_l").css("bottom", "460px");     
                        $("#fruit_l").animate({bottom: "250px"},{duration: 1500});
                    
                    } else { 
                        sourceLeftFruit("images/empty.png");
                        showLeftFruit();
                        sourceLeftFruit2("images/"+experiment.fruitPosition[1]+".png");
                        showLeftFruit2();  
                        $("#fruit_l2").css("bottom", "460px");     
                        $("#fruit_l2").animate({bottom: "250px"},{duration: 1500});
                    }; 
                    
                } else { 
                    
                    
                    if (experiment.fruitPosition2[0] == leftFruit[0]) {          
                        sourceLeftFruit("images/"+experiment.fruitPosition[0]+".png");
                        showLeftFruit();
                        sourceLeftFruit2("images/empty.png");
                        showLeftFruit2(); 
                        $("#fruit_l").css("bottom", "460px");     
                        $("#fruit_l").animate({bottom: "250px"},{duration: 1500});
                    
                    } else { 
                        sourceLeftFruit("images/empty.png");
                        showLeftFruit();
                        sourceLeftFruit2("images/"+experiment.fruitPosition[0]+".png");
                        showLeftFruit2();  
                        $("#fruit_l2").css("bottom", "460px");     
                        $("#fruit_l2").animate({bottom: "250px"},{duration: 1500});
                    };
                    
                 };
        
            };
    } else {
        if (experiment.agentOrient[0][0] == "gone"){ 
            
            if (experiment.fruitPosition[0] == leftFruit[0]) {          
                        
                        sourceLeftFruit2("images/"+experiment.fruitPosition[1]+".png");
                        showLeftFruit2();
                        $("#fruit_l2").css("bottom", "460px");     
                        $("#fruit_l2").animate({bottom: "250px"},{duration: 1500});
                        
                    } else { 
                        
                        sourceLeftFruit("images/"+experiment.fruitPosition[1]+".png");
                        showLeftFruit();
                        $("#fruit_l").css("bottom", "460px");     
                        $("#fruit_l").animate({bottom: "250px"},{duration: 1500});
 
                    }; 
                    
                
                if (experiment.cond[0][3] == "left") {
                
                
                    if (experiment.fruitPosition2[0] == leftFruit[0]) {          
                        
                        sourceRightFruit2("images/"+experiment.fruitPosition[0]+".png");
                        showRightFruit2(); 
                        $("#fruit_r2").css("bottom", "460px");     
                        $("#fruit_r2").animate({bottom: "250px"},{duration: 1500});
                        
                    } else { 
                        
                        sourceRightFruit("images/"+experiment.fruitPosition[0]+".png");
                        showRightFruit();
                        $("#fruit_r").css("bottom", "460px");     
                        $("#fruit_r").animate({bottom: "250px"},{duration: 1500});

                        
                    }; 
                
        
                } else {
                    
                    if (experiment.fruitPosition2[0] == leftFruit[0]) {          
                        
                        
                        sourceRightFruit2("images/"+experiment.fruitPosition[1]+".png");
                        showRightFruit2(); 
                        $("#fruit_r2").css("bottom", "460px");     
                        $("#fruit_r2").animate({bottom: "250px"},{duration: 1500});
                        
                    } else { 
                        
                        sourceRightFruit("images/"+experiment.fruitPosition[1]+".png");
                        showRightFruit();
                        $("#fruit_r").css("bottom", "460px");     
                        $("#fruit_r").animate({bottom: "250px"},{duration: 1500});

                        
                    }; 
                }
    };
        
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
    // move on to next phase of exposure 
    experiment.agentOrient[0].shift(); 
  }
};
