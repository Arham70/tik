let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO= true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerHTML = "O";
            turnO = false;
            } else {
                box.innerHTML = "X";
                turnO = true;
            } 
            box.disabled = true;

            checkWinner();
        })                                               
 })

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const enableBoxes = ()=> {
    for(let box of boxes){
        box.disabled = false;
        box.innerText= "";
    } 
};

const disableBoxes = ()=> {
    for(let box of boxes){
        box.disabled = true;
    } 
};

const showWinner = (winner) => {
      msg.innerText = `Congraluations, Winner is ${winner}`;
      msgContainer.classList.remove("hide");
      disableBoxes();
};

const drawGame = () => {
    msg.innerText = "It's a draw!";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () =>{
    let isDraw = true;
     for (let pattern of winPatterns){
        let box1 = boxes[pattern[0]].innerHTML;
        let box2 = boxes[pattern[1]].innerHTML;
        let box3 = boxes[pattern[2]].innerHTML;

        if (box1 != "" && box2 != "" && box3 != ""){
            if (box1 === box2 && box2 === box3){
                showWinner(box1);
                return;
            } 
        }
     }
      // Check for a draw
    for (let box of boxes) {
        if (box.innerHTML === "") {
            isDraw = false;
            break;
        }
    }
    
    if (isDraw) {
        drawGame();
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);