let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let message=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");


let turnX=true; // true=playerX, false=playerO

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

// For-Of Loop and ForEach Loop both way are correct.... 
/*for(let box of boxes) {
    box.addEventListener("click",()=>{
        console.log("click");
    });
}*/

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if (turnX) {
            
            box.innerText="X"; 
            turnX=false;
        }else{
            box.innerText="O";
            box.style.color="green";
            turnX=true;
        }
        box.disabled=true; // button can not click two times...
        checkWinner();
    });
});

const disableBoxes= ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const shoWinner=(winner)=>{
    message.innerText=`Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val ===pos2Val && pos2Val === pos3Val) {
                shoWinner(pos1Val);
            }
        }
    }
};

// Re Start Our Game Process.
const enableBoxes= ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const resetGame= ()=>{
        turnX=true;
        enableBoxes(); 
        msgContainer.classList.add("hide");  
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

























