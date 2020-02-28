var user;
var number;
function getRandomNumber(){
  number = Number(Math.ceil(Math.random() * 10));
  console.log(number);
}
getRandomNumber();   // подсказка, что бы долго не угадывать

function tryToGuess(){
  user =  Number(prompt("Try to guess a number from 1 to 10:"));
}

function isNumbersCoincide(){
  do{
    tryToGuess();
    if(number == user){
      console.clear();
      console.log("Correct!!!");
      return;
    }
    if(user === null){
      console.clear();
      console.log("You canceled the game.")
      return;
      }
    console.clear()
    console.log("Wrong. Try again!")
    tryToGuess();
  }while(user !== number)
} 
isNumbersCoincide();

