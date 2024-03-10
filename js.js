let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("new_btn");
let msgcontainer = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");

let turn0 = true; //playerX, playerY


const winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
     for (let box of boxes){
        box.disabl =true;
        enablesBoxes();
        msgcontainer.classList.add("hide");
     }
}


boxes.forEach((box) => {
box.addEventListener("click", () => {
    console.log("box was clicked");
    if(turn0){
        box.innerText ="0"
        turn0 = false;
    }else {
        box.innerText ="x"
        turn0 = true;
    }
    box.disabled =true;

    checkWinner();
})
})

const showWinner = (winner) => {
 msg.innerText =`Congratulations, Winner is ${winner}`;
 msgcontainer.classList.remove("hide");
 disableboxes();
}

const enablesBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
}

const checkWinner =() => {
    for( let pattern of winpatterns){
        
          let pos1val = boxes[pattern[0]].innerText;
          let pos2val = boxes[pattern[1]].innerText;
          let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
        
    }
}
 newGameBtn.addEventListener("click",resetGame);
 
resetBtn.addEventListener("click",resetGame);










