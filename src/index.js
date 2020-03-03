function getRandomNumber(){
  return Math.ceil(Math.random() * 10);
}
   
function isNumbersCoincide(){ 
  var randomNumber = getRandomNumber();
  console.log(randomNumber);  
  do{
    user = prompt("Try to guess a number from 1 to 10:");
    if(user === null){
      console.clear();
      console.log("You canceled the game.")
      return;
      }
    if(Number(user) === randomNumber){
      console.clear();
      console.log("Correct!!!");
      return;
    }
    console.clear()
    console.log("Wrong. Try again!")
  }while(user !== randomNumber)
}
isNumbersCoincide();





