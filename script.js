"use strict"

// SETTING UP
let color;
let hexCode;
let rgbCode;
let hslCode;

let colorInput = document.getElementById("color_picker");

// EVENTLISTENERS
colorInput.addEventListener("input", colorDisplay);


//MAKING RGB, HEX AND HSL CODES
function makeHEX() {
    hexCode = colorInput.value;
}

function makeRGB(color) {

    color = colorInput.value;
    let r = parseInt(color.substr(1, 2), 16);
    let g = parseInt(color.substr(3, 2), 16);
    let b = parseInt(color.substr(5, 2), 16);

    rgbCode = r + ", " + g + ", " + b;
}

function makeHSL() {

}

//DISPLAYING THE COLOR AND THE CODES
function colorDisplay() {
    makeHEX(color);
    makeRGB(color);

    console.log(hexCode);
    console.log(rgbCode);
}
