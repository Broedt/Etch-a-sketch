let sketchpad = document.querySelector(".sketchpad");
const setSize = document.querySelector("#setSize")
let containerSize = 600;


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



divCreator(50);