let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgconatiner = document.querySelector(".msg-conatiner");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) =>{
    box.addEventListener("click" , ()=>{
        console.log("Box was clicked.")
        if(turn0){
            box.innerText = "O";
           
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWiner();
    });
});

const disabledBox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }

}

const showWinner = (Winner) =>{
    msg.innerText = `Congratulations Winner is ${Winner}`;
    msgconatiner.classList.remove("hide");
    disabledBox();
}

const checkWiner = () =>{
    for(let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner", pos1val);
                showWinner(pos1val);
            }
        }
    }
};


const resetgame = () =>{
    turn0 = true;
    enableBoxes();
    msgconatiner.classList.add("hide");
}

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
