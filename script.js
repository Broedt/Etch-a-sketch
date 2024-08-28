let content = document.querySelector(".content");
let sketchpad = document.querySelector(".sketchpad");
let containerSize = 600;
let defaultNumber = 16;


function divCreator(rowsAndCols){
    let cellSize = containerSize/rowsAndCols -2 +"px";
for (let i = 0 ; i < rowsAndCols*rowsAndCols; i++){
    let cell = document.createElement("div");
        cell.style.backgroundColor = ("purple");
        cell.style.border = ("1px, solid black");
        cell.style.width = cellSize;
        cell.style.height = cellSize;
    
    cell.addEventListener (`mouseover`, function(){
        cell.style.cursor = ("pointer");
        cell.style.backgroundColor = ("yellow");
        })
    sketchpad.appendChild(cell);
}
}
function changeSize(){
    let userInput = prompt("how many squares per side would you like for your next grid?");
        if (userInput >= 16 && userInput <= 100){
            sketchpad.replaceChildren();
            divCreator(userInput);
            
        }
        else {alert("please enter a number between 16 and 100");
            changeSize();
        }
}
divCreator(defaultNumber);

