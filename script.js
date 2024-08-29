let content = document.querySelector(".content");
let sketchpad = document.querySelector(".sketchpad");
let containerSize = 600;
let defaultNumber = 16;
const randomColor = getRandomColor()
console.log (randomColor)

function divCreator(rowsAndCols){
    let cellSize = containerSize/rowsAndCols -2 +"px";
for (let i = 0 ; i < rowsAndCols*rowsAndCols; i++){
    let cell = document.createElement("div");
        cell.style.backgroundColor = ("rgb(255, 255, 255");
        cell.style.border = ("1px, solid black");
        cell.style.width = cellSize;
        cell.style.height = cellSize;
    sketchpad.appendChild(cell);

    cell.addEventListener (`mouseover`, function(){
        cell.style.cursor = ("pointer");
        let currentColor = getComputedStyle(cell).backgroundColor;
        console.log(currentColor);
        let newColor = darkenColor(currentColor);
        cell.style.backgroundColor = newColor;
    })
}
}

// function to darken the color by 10 %

function darkenColor(rgb){
    const rgbValues = rgb.match(/\d+/g).map(Number);
    const factor = 255/9 ;
    const darkendRgb = rgbValues.map(value => Math.floor(value-factor));
    return `rgb(${darkendRgb.join(", ")})`;
}

// fuction to get a random color 

function getRandomColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    return `rgb(${r}, ${g}, ${b})`;
}



function changeSize(){
    let userInput = prompt("how many squares per side would you like for your next grid?");
        if (userInput >= 16 && userInput <= 100){
            sketchpad.replaceChildren();
            divCreator(userInput);
            }
        else if (userInput == null || userInput == ""){
            null;
        }
        else {alert("please enter a number between 16 and 100");
            changeSize();
        }
}
divCreator(defaultNumber);

