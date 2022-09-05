"use strict"

// SETTING UP
let colorInput = document.getElementById("color_picker");
let color;
let hexCode;
let r, g, b, rgbCode;
let h, s, l, hslCode;

// EVENTLISTENERS
colorInput.addEventListener("input", colorDisplay);


//MAKING RGB, HEX AND HSL CODES
function makeHEX() {
    hexCode = colorInput.value;
}

function makeRGB(color) {

    color = colorInput.value;
    r = parseInt(color.substr(1, 2), 16);
    g = parseInt(color.substr(3, 2), 16);
    b = parseInt(color.substr(5, 2), 16);

    rgbCode = r + ", " + g + ", " + b;
}

function makeHSL() {

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

    h = h.toFixed();
    s = s.toFixed();
    l = l.toFixed();

    hslCode = h + ", " + s + "%, " + l + "%";
}

//DISPLAYING THE COLOR AND THE CODES
function colorDisplay() {
    makeHEX();
    makeRGB();
    makeHSL();

    document.querySelector(".hex").textContent = hexCode;
    document.querySelector(".rgb").textContent = rgbCode;
    document.querySelector(".hsl").textContent = hslCode;
}
