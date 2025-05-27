let boxes=document.querySelectorAll(".box");
let restartBtn=document.querySelector(".restart-button");
let newGameBtn=document.querySelector(".newGame-button");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let msgContainer2=document.querySelector(".msg-container2");
let tryAgain=document.querySelector(".Try-Again");
let count=0;

let turnO=false;//playerX playerO

const winpatter=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) =>{
    box.addEventListener("click",() => {
        if(turnO){
            //playerO
            box.innerText="O";
            turnO=false;
            count++;
        }
        else{
            box.innerText="X";
            turnO=true;
            count++;
        }
        box.disabled=true;
        checkwinner(count);
    });
});

let checkwinner=(count) =>{
    if(count==9){
        showNOWinner();
    }
    for(let pattern of winpatter){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
            }
        }

    }
};
let showWinner=(winner) =>{
    msg.innerText=`Congratulation The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtn(boxes);

};
let disableBtn=(boxes)=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
let enableBtn=(Boxes)=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
let newGame =() =>{
    turnO=false;
    enableBtn(boxes);
    msgContainer.classList.add("hide");
    msgContainer2.classList.add("hide2");



};

let showNOWinner=()=>{
    msgContainer2.classList.remove("hide2");
}

newGameBtn.addEventListener("click", newGame);
restartBtn.addEventListener("click", newGame);
tryAgain.addEventListener("click",newGame);

