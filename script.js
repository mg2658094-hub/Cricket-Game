let scoreStr = localStorage.getItem('score');
  let score;
  resetScore(scoreStr)

  function resetScore(scoreStr){
    score = scoreStr ? JSON.parse(scoreStr) : {
    win: 0,
    lost: 0,
    tie: 0,
  };

// Means :  if (scoreStr) {
//               score = JSON.parse(scoreStr);
//          } else {
//              score = 
//                      {
//                  win: 0,
//                  lost: 0,
//                  tie: 0 
//                       };
//                 };

 score.displayScore = function(){
  return `Won: ${score.win}, Lost: ${score.lost}, Tie: ${score.tie}`;
  };

  showResult();
  
  }

function generateComputerChoice(){

  let randomNumber = Math.random()*3;
  
  if (randomNumber > 0 && randomNumber <= 1){
    return 'Bat';
  }else if (randomNumber > 1 && randomNumber <= 2){
    return 'Ball';
  }else{
    return 'Stump';
  }
}



function getResult(userChoice, computerChoice){
  if(userChoice === "Bat"){
        if (computerChoice === 'Ball'){
          // score.win = score.win + 1
          // score.win += 1
          score.win++;
          return 'User won';
        }else if (computerChoice === 'Bat'){
          score.tie++;
          return  `Tie`;
        }else if (computerChoice === 'Stump'){
          score.lost++;
          return  'Computer won';
        }

  } else if (userChoice === "Ball"){
        if (computerChoice === 'Ball'){
          score.tie++;
          return  'Tie';
        }else if (computerChoice === 'Bat'){
          score.lost++;
          return  'Computer won';
        }else if (computerChoice === 'Stump'){
          score.win++;
          return  'User won';
        }
  
  } else {
        if (computerChoice === 'Ball'){
          score.lost++;
          return  'Computer won';
        }else if (computerChoice === 'Bat'){
          score.win++;
          return  'User won';
        }else if (computerChoice === 'Stump'){
          score.tie++;
          return  'Tie';
        }

  }
}


function showResult(userChoice, computerChoice, resultMsg){
  localStorage.setItem("score",JSON.stringify(score));

  document.querySelector("#user-move").innerText = 
  userChoice ? `You chose ${userChoice} .` : '' ;

  document.querySelector("#computer-move").innerText = 
  computerChoice  ? `Computer chose ${computerChoice} .` : '' ;

  document.querySelector("#result").innerText = 
   resultMsg || '' ;
  
  document.querySelector("#score").innerText = `Score: ${score.displayScore()}`;

}