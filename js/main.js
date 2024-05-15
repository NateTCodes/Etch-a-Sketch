let slider = document.getElementById("myRange");
let output = document.getElementById("sliderVal");
let grid = document.getElementById("gridContainer");

output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    clearGrid();
    createGrid(this.value);
}

function createGrid(gridSize) {
    grid.style.gridTemplateColumns = `repeat(${gridSize},auto)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, auto)`;
    for (let i = 0; i < (gridSize * gridSize); i++) {
        let gridElement = document.createElement("div");
        gridElement.classList.add("grid-element");
        grid.appendChild(gridElement);
        gridElement.addEventListener("mouseover", draw);
    }
}

function draw() {
    this.style.backgroundColor = colorChoice.value;
}

function clearGrid() {
    grid.innerHTML = "";
    createGrid(slider.value);
    
}
document.querySelector(".clear").addEventListener("click", clearGrid);

function rainbow() {
    const gridElements = document.querySelectorAll('.grid-element');
    gridElements.forEach(gridElement => {
        gridElement.addEventListener("mouseover", function() {
            const randomRed = Math.floor(Math.random() * 256);
            const randomGreen = Math.floor(Math.random() * 256);
            const randomBlue = Math.floor(Math.random() * 256);
            const randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
            gridElement.style.backgroundColor = randomColor;
        });
    });
}

document.querySelector(".rainbow").addEventListener("click", rainbow);

let isBlackBackground = false;
function changeBackground() {
    if (isBlackBackground) {
        grid.classList.remove("white-glow"); /* Remove white glow effect */
        grid.classList.add("red-glow"); /* Add red glow effect */
        grid.style.backgroundColor = "black"; 
    } else {
        grid.classList.remove("red-glow"); /* Remove red glow effect */
        grid.classList.add("white-glow"); /* Add white glow effect */
        grid.style.backgroundColor = "white"; 
    }
    isBlackBackground = !isBlackBackground;
}
document.querySelector(".background").addEventListener("click", changeBackground);

createGrid(slider.value);

