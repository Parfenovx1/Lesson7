function getRandomNumber(number){
  this.number = number;
  console.log(number);
}
getRandomNumber(Math.ceil(Math.random() * 10));   // подсказка, что бы долго не угадывать 

function tryToGuess(user){
  this.user = user;
}

function isNumbersCoincide(){   
  do{
    tryToGuess(prompt("Try to guess a number from 1 to 10:"));
    if(this.user === null){
      console.clear();
      console.log("You canceled the game.")
      return;
      }
    if(Number(this.user) == this.number){
      console.clear();
      console.log("Correct!!!");
      return;
    }
    console.clear()
    console.log("Wrong. Try again!")
  }while(this.user != this.number)
}
isNumbersCoincide();


