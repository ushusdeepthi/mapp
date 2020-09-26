document.addEventListener("DOMContentLoaded", function(e){
    let roll_dice= document.getElementById("roll_dice");
    let dice_array = new Array(5);
    let throw_dice=new Array(5);
    let value_array=new Array(5);
      roll_dice.addEventListener("click",function(e){
      throw_dice = randomDiceArray();
        console.log(throw_dice);
        value_array= countDice(throw_dice);
   
    
    let p1_block1_arr = Array.from(document.getElementById("block1").getElementsByClassName("player1"));
    console.log(p1_block1_arr);
    console.log(p1_block1_arr[1].value);
    let p1_block1_arr_int = p1_block1_arr.map((element, index, array) => { return parseInt(element.value)});
    let p1_sum = document.getElementById("player1_sum");
    console.log(p1_block1_arr_int);
    let p1_bonus = document.getElementById("player1_bonus");
    let p1_block2_arr = Array.from(document.getElementById("block2").getElementsByClassName("player1"));
    let p1_block2_arr_int = p1_block2_arr.map((element, index, array) => { return parseInt(element.value)});
    let p1_yatzy = document.getElementById("p1_yatzy");
    let p1_total = document.getElementById("p1_total");



//sum
//block 1 sum
p1_sum.innerHTML= p1_block1_arr_int.reduce((acc,currVal)=>{
  return acc+currVal;
})
if(p1_sum.innerHTML>63){
  p1_bonus.innerHTML=50;
}

p1_total.innerHTML = p1_block2_arr_int.reduce((acc, currValue) => {
  return acc + currValue;
}, 0);

});  
//To calculate pair
function pair(){

}

//To calculate three of a kind
function calcThreeKind(numbers_array) { // skicka vidare till countDice funktionen
  let three_kind = 0;

  for (let i=1; i<=6; i++){ //Kollar ifall det finns minst tre tärningar med samma värde
      if (numbers_array[i]===3) {
          three_kind += (i*3); //// returnar index av ev värde 3, 4 eller 5 i arrayen
      }else{
        if(numbers_array[i]>0)
        three_kind +=numbers_array[i]*i;
      }
  }
  return (three_kind);
}
//to calculate four of a kind
function calcFourKind(numbers_array) { // skicka vidare till countDice funktionen
  let four_kind = 0;

  for (let i=1; i<=6; i++){ //Kollar ifall det finns minst tre tärningar med samma värde
      if (numbers_array[i]===4) {
        four_kind += (i*4); //// returnar index av ev värde 3, 4 eller 5 i arrayen
      }else{
        if(numbers_array===1)
        four_kind +=i;
      }
  }
  return (four_kind);
}

//CHANCE

function calcChance(numbers_array) {
  console.log("nu testar vi Chance");
  let chanceSum = 0;
  
  for (i of numbers_array) {
      chanceSum+=i;
  }

  return chanceSum;
}

//to calculate yatzy
      function calcYatzy(numbers_array) {
        console.log("nu testar vi Yatzy");
        let arr = countDice(numbers_array);
        if (arr.includes(5)) {
            return 50;
        }

        else {
            return 0;
        }

    }  
    
    
    
    
    
    
    
    
    
    
    
    
    
    function  randomDiceArray(){
        for(let i=1;i<=5;i++){  
        if (!document.getElementById("dice_"+i).checked){
          let slump= Math.floor(Math.random()*6+1);
          document.getElementById("image_"+i).src=("dice_img_"+slump+".png");
         dice_array[(i-1)]=slump; 
        }
      }
      return dice_array;
    }
    function countDice(dice_array) {
      let values_array = [];
      for (let i = 0; i <= 6; i++) { //// assignar värdet 0 till varje index i values
          values_array[i] = 0;
      }
      // [0, 0, 0, 0, 0, 0, 0]    //// arrayen nu
      // [0, 1, 1, 1, 2, 0, 0]    //// arrayens index
    
      for (let current_dice of dice_array) { 
          values_array[current_dice]++;
      }console.log(values_array);
      return values_array;

      
    }


    
})