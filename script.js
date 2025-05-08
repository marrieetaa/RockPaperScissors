
function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove;
  if(randomNumber >= 0 && randomNumber < 1/3){
      computerMove = 'Rock';
  }else if(randomNumber >= 1/3 && randomNumber < 2/3){
      computerMove = 'Paper';
  }else if(randomNumber >= 2/3 && randomNumber < 1) {
      computerMove = 'Scissors';
  }

  return computerMove;
}


function playGame(playerMove) {
  const computerMove = pickComputerMove();
    
    let result;
    if(playerMove === 'Scissors'){
      if(computerMove === 'Rock'){
        result = 'Lose';
    }else if(computerMove === 'Paper'){
        result = 'Win';
    }else if(computerMove === 'Scissors'){
        result = 'Tie';
    }

    }else if(playerMove === 'Paper') {
      if(computerMove === 'Rock'){
        result = 'Win';
    }else if(computerMove === 'Paper'){
        result = 'Tie';
    }else if(computerMove === 'Scissors'){
        result = 'Lose';
    }
    
    }else if(playerMove === 'Rock') {
      if(computerMove === 'Rock'){
        result = 'Tie';
     }else if(computerMove === 'Paper'){
        result = 'Lose';
     }else if(computerMove === 'Scissors'){
        result = 'Win';
     }
    }

    console.log(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
}