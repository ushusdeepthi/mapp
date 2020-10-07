document.addEventListener("DOMContentLoaded",function(){
    let new_game=document.getElementById("new_game");
    new_game.addEventListener("click",function(e){
      let div= document.getElementById("question");
       let friends= document.createElement("div");
       friends.setAttribute("id","friends");
       let computer=document.createElement("div");
       computer.setAttribute("id","computer");
      //div.classList.add("answers");
      div.appendChild(friends);
      div.appendChild(computer);
    })
})