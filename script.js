// Get the saved score from localStorage
let scoreStr = localStorage.getItem('score');

// Create a variable to store the score
let score;

// Load the saved score or create a new score
resetScore(scoreStr);


// This function loads the old score from localStorage
// or creates a new score if no score is saved
function resetScore(scoreStr){

  // If scoreStr exists, convert it from JSON string to object
  // Otherwise, create a new score with all values as 0
  score = scoreStr ? JSON.parse(scoreStr) : {
    win: 0,
    lost: 0,
    tie: 0,
  };


  // This function displays the current score
  score.displayScore = function(){
    return `Won: ${score.win}, Lost: ${score.lost}, Tie: ${score.tie}`;
  };

  // Display the score on the webpage
  showResult();
  
}


// This function randomly selects the computer's choice
function generateComputerChoice(){

  // Math.random() gives a random number between 0 and 1
  // Multiplying by 3 gives a number between 0 and 3
  let randomNumber = Math.random()*3;
  
  // Number between 0 and 1 → Bat
  if (randomNumber > 0 && randomNumber <= 1){
    return 'Bat';

  // Number between 1 and 2 → Ball
  }else if (randomNumber > 1 && randomNumber <= 2){
    return 'Ball';

  // Number between 2 and 3 → Stump
  }else{
    return 'Stump';
  }
}


// This function checks the user's choice
// against the computer's choice
function getResult(userChoice, computerChoice){

  // If the user chooses Bat
  if(userChoice === "Bat"){

        // Bat beats Ball → User wins
        if (computerChoice === 'Ball'){
          score.win++;
          return 'User won';

        // Bat vs Bat → Tie
        }else if (computerChoice === 'Bat'){
          score.tie++;
          return  `Tie`;

        // Stump beats Bat → Computer wins
        }else if (computerChoice === 'Stump'){
          score.lost++;
          return  'Computer won';
        }


  // If the user chooses Ball
  } else if (userChoice === "Ball"){

        // Ball vs Ball → Tie
        if (computerChoice === 'Ball'){
          score.tie++;
          return  'Tie';

        // Bat beats Ball → Computer wins
        }else if (computerChoice === 'Bat'){
          score.lost++;
          return  'Computer won';

        // Ball beats Stump → User wins
        }else if (computerChoice === 'Stump'){
          score.win++;
          return  'User won';
        }
  

  // If the user chooses Stump
  } else {

        // Ball beats Stump → Computer wins
        if (computerChoice === 'Ball'){
          score.lost++;
          return  'Computer won';

        // Stump beats Bat → User wins
        }else if (computerChoice === 'Bat'){
          score.win++;
          return  'User won';

        // Stump vs Stump → Tie
        }else if (computerChoice === 'Stump'){
          score.tie++;
          return  'Tie';
        }

  }
}


// This function updates everything on the webpage
function showResult(userChoice, computerChoice, resultMsg){

  // Save the current score in localStorage
  // JSON.stringify() converts the score object into a string
  localStorage.setItem("score",JSON.stringify(score));


  // Show the user's choice on the webpage
  document.querySelector("#user-move").innerText = 
  userChoice ? `You chose ${userChoice} .` : '' ;


  // Show the computer's choice on the webpage
  document.querySelector("#computer-move").innerText = 
  computerChoice  ? `Computer chose ${computerChoice} .` : '' ;


  // Show the result of the game
  document.querySelector("#result").innerText = 
   resultMsg || '' ;
  

  // Show the updated score on the webpage
  document.querySelector("#score").innerText = `Score: ${score.displayScore()}`;

}