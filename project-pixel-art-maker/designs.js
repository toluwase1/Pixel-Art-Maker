//sets all the variables
/* global document */
let canvas = document.getElementById("pixel_canvas");
let height = document.getElementById("input_height");
let width = document.getElementById("input_width");
let sizePicker = document.getElementById("sizePicker");
let color = document.getElementById("colorPicker");

color.addEventListener("click", function(){});

//An event listener that comes into action when Submit button is clicked
sizePicker.onsubmit = function(event){
    event.preventDefault();
    clearGrid();
    makeGrid();
};


function makeGrid() {
    for (let r=0; r<height.value; r++){
        const row = canvas.insertRow(r);
        for (let c=0; c<width.value; c++){
            const cell = row.insertCell(c);
            cell.addEventListener("click", fillSquare);
        }
    }
}

function clearGrid(){
    while (canvas.firstChild){
         canvas.removeChild(canvas.firstChild);
    }
}

//A function which fills color in the cell that was clicked and changes the color.
function fillSquare () {
    this.setAttribute("style", `background-color: ${color.value}`);
}