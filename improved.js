"use strict"

// SETUP
let input = document.getElementById("color_picker");
let colorInput;
let hexCode;
let r, g, b, rgbCode;
let h, s, l, hslCode;
let cssString;

// eventlisteners
input.addEventListener("input", storageRoom);

// CONTROLLER
// input color into HEX code
function makeHex() {
    hexCode = input.value;

    return hexCode;
}

// input color into RGB code
function makeRgb(color) {
    color = input.value;
    r = parseInt(color.substr(1, 2), 16);
    g = parseInt(color.substr(3, 2), 16);
    b = parseInt(color.substr(5, 2), 16);

    rgbCode = r + ", " + g + ", " + b;

    return rgbCode;
}

//input color into HSL
function makeHsl() {
    r /= 255;
    g /= 255;
    b /= 255;

    const min = Math.min(r,g,b);
    const max = Math.max(r,g,b);
   
    if (max === min ) {
      h = 0;
    } else
    if (max === r) {
      h = 60 * (0 + (g - b) / (max - min) );
    } else
    if (max === g) {
      h = 60 * (2 + (b - r) / (max - min) );
    } else
    if (max === b) {
      h = 60 * (4 + (r - g) / (max - min) );
    }
   
    if (h < 0) {h = h + 360; }
   
    l = (min + max) / 2;
   
    if (max === 0 || min === 1 ) {
      s = 0;
    } else {
      s = (max - l) / ( Math.min(l,1-l));
    }
    // multiply s and l by 100 to get the value in percent, rather than [0,1]
    s *= 100;
    l *= 100;

    h = h.toFixed();
    s = s.toFixed();
    l = l.toFixed();

    hslCode = h + ", " + s + "%, " + l + "%";

    return hslCode;
}

//input color into CSS string
function makeString() {

}


// STORAGE
function storageRoom(color) {
    makeHex();
    makeRgb();
    makeHsl();
    makeString();

    color = {
        "HEX code": hexCode,
        "RGB code": rgbCode,
        "HSL code": hslCode,
        "CSS string": cssString
    }

    colorDisplay(color);
}


// DISPLAY
function showColor() {
    document.querySelector(".color_display").style.backgroundColor = "rgb(" + rgbCode + ")";
}

function showHex() {
    document.querySelector(".hex").textContent = "HEX: " + hexCode;
}

function showRgb() {
    document.querySelector(".rgb").textContent = "RGB: " + rgbCode;
}

function showHsl() {
    document.querySelector(".hsl").textContent = "HSL: " + hslCode;
}

function colorDisplay(color) {
    showColor();
    showHex();
    showRgb();
    showHsl();
    console.log(color);
}


