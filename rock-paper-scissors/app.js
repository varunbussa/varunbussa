var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const scissors_div = document.getElementById("s");
const paper_div = document.getElementById("p");

function convertToWord(letter){
  if(letter == "r"){
    return "Rock";
  } else if(letter == "p"){
    return "Paper";
  } else{
    return "Scissors";
  }
}

function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
  userChoice_div.classList.add("green-glow");
  setTimeout(function(){ userChoice_div.classList.remove("green-glow")}, 300);
}

function lose(userChoice, computerChoice){
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lose!`;
  userChoice_div.classList.add("red-glow");
  setTimeout(function(){ userChoice_div.classList.remove("red-glow")}, 300);
}

function draw(userChoice, computerChoice){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} ties ${convertToWord(computerChoice)}${smallCompWord}. You draw!`;
  userChoice_div.classList.add("gray-glow");
  setTimeout(function(){ userChoice_div.classList.remove("gray-glow")}, 300);
}

function getComputerChoice(){
  const choices = ['r', 'p', 's'];
  const num = Math.floor(Math.random() * 3);
  return choices[num];
}
function game(userChoice){
  const computerChoice = getComputerChoice();
  switch(userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main(){

rock_div.addEventListener("click", function(){
  game("r");
})
paper_div.addEventListener("click", function(){
  game("p");
})
scissors_div.addEventListener("click", function(){
  game("s");
})

}

main();
