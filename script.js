let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector(".newgame");
let msgContainer = document.querySelector("#resetBtn");
let new1 = document.querySelector(".new1");
let msg = document.querySelector("#msg");
let turnO = true; //playerX,  playerO
let count = 0;//to track draw

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

const resetGame = () =>{
    turnO = true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("box was clicked");

       if (turnO){   //playerO
       box.innerText = "O";
       turnO = false;
       }
       else{   //playerX
        box.innerText = "X";
        turnO = true;

       }
       box.disabled = true;
       count++;

       let isWinner = checkWinner();

       if (count === 9 && !isWinner){
        gameDraw();
       }
   });
 });

 const gameDraw = () =>{
    msg.innerText=`Game was draw.`;
 msgContainer.classList.remove("hide");
 disableBoxes();
 };

 const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;

    }
 };

const  enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }};


 const showWinner = (winner) => {
    msg.innerText =`Congratulations, Winner is ${winner}`;
    
    msgContainer.classList.remove("hide");
    new1.classList.remove("hidden");
    disableBoxes();
 };

 const checkWinner =() =>{
  
    new1.classList.add("hidden");
    for(pattern of winPatterns){
let pos1Val = boxes[pattern[0]].innerText;
let pos2Val = boxes[pattern[1]].innerText;
let pos3Val = boxes[pattern[2]].innerText;

if(pos1Val != ""&& pos2Val != "" && pos3Val != ""){
    if(pos1Val === pos2Val && pos2Val === pos3Val){
        console.log("Winner",pos1Val);
        showWinner(pos1Val);
    }
}
 }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click",resetGame);