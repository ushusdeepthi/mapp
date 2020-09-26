document.addEventListener("DOMContentLoaded", function(e){ 
        let p1 = document.getElementById("player1");
        let player1_sum = document.getElementById("player1_sum");
        let player1_bonus = document.getElementById("player1_bonus");
        let roll_dice= document.getElementById("roll_dice")
    
        p1.addEventListener("change",function(e){
           p1= p1.value;
        })
    let number_array=[];
        roll_dice.addEventListener("click",rollDice);
        
//slumpar värdet
  function rollDice(){
    for(let i=1;i<=5;i++){
    if (!document.getElementById("dice_"+i).checked){
let slump= Math.floor(Math.random()*6+1);
document.getElementById("image_"+i).src=("dice_img_"+slump+".png")
number_array[(i-1)]=slump;
}}
  console.log (number_array)
  }})
/*
  roll_dice.addEventListener("click",function(e){
    let random_throw = randomDiceArray();
  });
  function  randomDiceArray(){
    for(let i=1;i<=5;i++){
    if (!document.getElementById("dice_"+i).checked){
      let dice_array = new Array(5);
      let slump= Math.floor(Math.random()*6+1);
      document.getElementById("image_"+i).src=("dice_img_"+slump+".png");
      dice_array[(i-1)]=slump;
    }
  }return dice_array;
}
});
function countDice(dice_array) {
  let values_array = [];
  for (let i = 0; i <= 6; i++) { //// assignar värdet 0 till varje index i values
      values_array[i] = 0;
  }
  // [0, 0, 0, 0, 0, 0, 0]    //// arrayen nu
  // [0, 1, 1, 1, 2, 0, 0]    //// arrayens index

  for (let current_dice of dice_array) { 
      values_array[current_dice]++;
  }
  return values_array;
}*/
