
// ## Helper functions


function showSlide(id) {
  // Hide all slides
	$(".slide").hide();
	// Show just the slide we want to show
	$("#"+id).show();
}

function showAgent(id,orient) {
  // Hide all slides
	$(".agent").hide();
	// Show just the slide we want to show
	$("#"+id+"_"+orient).show();
}

function choiceAgent(id) {
  // Hide all slides
	$(".agent").hide();
	// Show just the slide we want to show
	$("#"+id+"_choice").show();
}

function sourceRightFruit(a) {
        document.getElementById("fruit_r").src=a;
    };

function sourceLeftFruit(a) {
        document.getElementById("fruit_l").src=a;
    };

function showRightFruit() {
    document.getElementById('fruit_r').style.visibility='visible';
      };

function hideRightFruit() {
    document.getElementById('fruit_r').style.visibility='hidden';
      };

function showLeftFruit() {
    document.getElementById('fruit_r').style.visibility='visible';
      };

function hideLeftFruit() {
    document.getElementById('fruit_r').style.visibility='hidden';
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

// Get a random element from an array (e.g., <code>random_element([4,8,7])</code> could return 4, 8, or 7). This is useful for condition randomization.
function randomElement(array) {
  return array[randomInteger(array.length)];
}

// ## Configuration settings - create all the variables that are necesary for the experiment, figute our how to call them alter on. 

var cgTypes = ["novelty", "novelty"];
var cg = randomElement(cgTypes);
var trial = [1,2]
var allAgents = ["hedge", "mole"];
var agent = randomElement(allAgents)
var remainingAgents = allAgents.filter(function(x) { return x !== agent; });
var altAgent = randomElement(remainingAgents);

var change = [true, false];

var fruits = ["dragonfruit", "grape"];
var rightFruit = randomElement(fruits);
var remainingFruits = fruits.filter(function(x) { return x !== rightFruit; });
var leftFruit = randomElement(remainingFruits);
var agentOrientOrders = [["straight","point_l", "point_r","disappear","gone","down"],["straight", "point_r", "point_l","disappear","gone","down"]];

var speakerChange = randomElement(change);

// Show the instructions slide .
showSlide("instructions");


// ## The main event
var experiment = {
  // Parameters for this sequence.
  trial: trial,
  cg: cg,
  speakerChange: speakerChange,
  agent: agent,
  altAgent: altAgent,
  agentOrient: randomElement(agentOrientOrders),
  rightFruit: rightFruit,
  leftFruit: leftFruit,
  data: [],
  end: function() {
    // Show the finish slide.
    showSlide("finished");
    // Wait 1.5 seconds and then submit the whole experiment object to Mechanical Turk (mmturkey filters out the functions so we know we're just submitting properties [i.e. data])
    setTimeout(function() { turk.submit(experiment) }, 1500);
  },
    
    eat: function() {
    // Show the finish slide.
    showSlide("eat");
    // Wait 1.5 seconds and then submit the whole experiment object to Mechanical Turk (mmturkey filters out the functions so we know we're just submitting properties [i.e. data])
    
    
    
    showEat(agent);    
    
    var endTime = (new Date()).getTime();
      
    var pick = event.target.src;
      
    var target = $(".fruit_r").attr("src");
    
    if (pick.indexOf(target) > -1) {
        var correct =1
        } else {
        var correct = 0
        };
      
      data = {
        rt: endTime - startTime,
        speakerChange: speakerChange,
        agent: agent,
        cg: cg,
        correct: correct
            };
      experiment.data.push(data);
        
    if (experiment.trial.length == 0){
        $(".eat").bind("click", experiment.end);
    } else {
        $(".eat").bind("click", experiment.next);
    };
  },
  
// Slide recording the choice

  choice: function(event) {
    
    var y = experiment.trial.shift(); 
    var x = experiment.agentOrient.shift();
    
    experiment.agentOrient = randomElement(agentOrientOrders);
      
    showSlide("choice");
      
    choiceLeftFruit("images/"+leftFruit+".png");
    choiceRightFruit("images/"+rightFruit+".png");
          
    if (speakerChange == true) {
        choiceAgent(altAgent);
    }else{
       choiceAgent(agent);
    };
    
    $(".fruit_r").bind("click", experiment.eat);
    $(".fruit_l").bind("click", experiment.eat);
  },
    

  // The work horse of the sequence - what to do on every trial.
  next: function() {
 
    if (experiment.agentOrient == "down") {
      setTimeout(function() {experiment.choice() }, 0);
      return;
    };
    
    // Get the current trial - <code>shift()</code> removes the first element of the array and re   turns it.
   
    
    showSlide("stage"); 
      
    showAgent(agent,experiment.agentOrient);
    
    if (cg == "novelty" && experiment.agentOrient == "down"){
            sourceRightFruit("images/"+rightFruit+".png");
            showRightFruit();
        } else if (cg == "neutral") {
            sourceRightFruit("images/"+rightFruit+".png");
            showRightFruit();
        } else {
            hideRightFruit();
        };
        
      sourceLeftFruit("images/"+leftFruit+".png");
      var x = experiment.agentOrient.shift(); 
  }
};
