"use strict"

// SETUP
let userInput;
let rgbToHexValue;
let rgbToHslValue;
let hexToRgbValue;

// eventlisteners
document.addEventListener("DOMContentLoaded", init);

function init() {
    document.querySelector("#color_picker").addEventListener("input", getUserInput)
}

// MODEL
function getUserInput() {
    userInput = document.querySelector("#color_picker").value;

    rgbToHexValue = rgbToHex(userInput);
    rgbToHslValue = rgbToHsl(userInput);
    hexToRgbValue = hexToRgb(userInput);

    showColor();
}

// VIEW
function showColor() {
    document.querySelector(".color_display").style.backgroundColor = "rgb(" + hexToRgbValue + ")";
    document.querySelector(".hex").textContent = "HEX: " + rgbToHexValue;
    document.querySelector(".rgb").textContent = "RGB: " + hexToRgbValue;
    document.querySelector(".hsl").textContent = "HSL: " + rgbToHslValue;

}

// CONTROLLER
// input color into HEX code
function rgbToHex(r, g, b) {
    r = userInput.substring(1, 3).toString(16);
    g = userInput.substring(3, 5).toString(16);
    b = userInput.substring(5, 7).toString(16);

    if (r.length <= 1) {
        r = 0 + r;
    };
    if (g.length <= 1) {
        g = 0 + g
    };
    if (b.length <= 1) {
        b = 0 + b
    };

    return `#${r}${g}${b}`;
}

// input color into RGB code
function hexToRgb(userInput) {
    let r, g, b;
    r = parseInt(userInput.substr(1, 2), 16);
    g = parseInt(userInput.substr(3, 2), 16);
    b = parseInt(userInput.substr(5, 2), 16);

    return {rgb};
}

//input color into HSL
function rgbToHsl(rgb) {

    let r = rgb.r;
    let b = rgb.b;
    let g = rgb.g;

    r /= 255;
    g /= 255;
    b /= 255;
    
    let h, s, l;
    
    const min = Math.min(r,g,b);
    const max = Math.max(r,g,b);
    
    if( max === min ) {
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

    return h + ", " + s + "%, " + l + "%";
}


