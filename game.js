
// function ComputerChoice() {
//   const choices = ["rock", "paper", "scissors","snake","water"];
//   const randomIndex = Math.floor(Math.random() * choices.length);
//   return choices[randomIndex];
// }


// function playGame(userChoice) {
//   const computerChoice = ComputerChoice();
//   console.log(`User choice: ${userChoice}`);
//   console.log(`Computer choice: ${computerChoice}`);

const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
});

function askChoice(){
    rl.question("what is your choice?\t",function(userChoice){
        const computerChoice = Computerchoice(); 
        console.log(`User choice: ${userChoice}`);
        const result = Winner(userChoice, computerChoice); 
        console.log(result); 
        rl.close(); 
    });
}


function Computerchoice() {
    const Value = Math.random();
    console.log(1/5)
    console.log(2/5)
    console.log(3/5)
    console.log(4/5)
    if (Value < 1/5) {
      return "rock";
    } else if (Value < 2/5) {
      return "paper";
    } else if(Value < 3/5){
      return "scissors";
    } else if(Value < 4/5){
        return "snake"
    }else{
        return "water"
    }
    // console.log(`Computer choice: ${computerChoice}`);
  }
//   console.log(`Computer choice: ${computerChoice}`);
  
function Winner(userChoice, computerChoice) {
    console.log(`Computer choice: ${computerChoice}`);
  switch(userChoice){
    case "rock":
        if(computerChoice == "rock"){
            console.log("It's a tie");
        }else if(computerChoice == "paper"){
            console.log("You loss! Paper covers rock")
        }else if(computerChoice == "scissors"){
            console.log("You win! Rock crushes scissors")
        }else if(computerChoice == "snake"){
            console.log("You win!Rock crushes snake")
        }else if(computerChoice == "water"){
            console.log("You lose! Water rusts rock")
        }else{
            console.log("Invalid option")
        }
        break;
    case "paper":
        if(computerChoice == "paper"){
            console.log("It's a tie")
        }else if(computerChoice == "rock"){
            console.log("You win! paper covers rock")
        }else if (computerChoice == "scissors"){
            console.log("You loss! Scissors cuts paper")
        }else if(computerChoice == "snake"){
            console.log("You loss! Snake poisons paper")
        }else if(computerChoice == "water"){
            console.log("You loss! water drowns paper")
        }else{
            console.log("Invalid option")
        }
        break;
    
    case "scissors":
        if(computerChoice == "scissors"){
            console.log("It's a tie")
        }else if(computerChoice == "rock"){
            console.log("You loss! rock crushes scissors")
        }else if(computerChoice == "paper"){
            console.log("You win! scissors cuts paper")
        }else if(computerChoice == "snake"){
            console.log("You win! scissors cuts snake")
        }else if(computerChoice == "water"){
            console.log("You loss! water rusts scissors")
        }else{
            console.log("Invalid option")
        }
        break;
    
    case "snake":
        if(computerChoice == "snake"){
            console.log("It's a tie")
        }else if(computerChoice == "rock"){
            console.log("You lose! Rock crushes snake")
        }else if(computerChoice == "paper"){
            console.log("You win! snake poisons paper")
        }else if(computerChoice == "scissors"){
            console.log("You lose! scissors cuts snake")
        }else if(computerChoice == "water"){
            console.log("You win!snake drinks water")
        }else{
            console.log("Invalid option")
        }
        break;

    case "water":
        if(computerChoice == "water"){
            console.log("It's a tie")
        }else if(computerChoice == "rock"){
            console.log("You win! water rusts rock")
        }else if(computerChoice == "paper"){
            console.log("You win! water drowns paper")
        }else if(computerChoice == "scissors"){
            console.log("You win! water rusts scrissors")
        }else if(computerChoice == "snake"){
            console.log("You loss ! snake drinks water")
        }else {
            console.log("Invalid option")
        }
        break;

    default:
            console.log("Invalid value");

  }
  
}

// const userChoice = "rock";
// const computerChoice = Computerchoice();
// console.log(`User choice: ${userChoice}`);

askChoice();

