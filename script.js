let css = document.querySelector("h3");
let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let randBtn = document.querySelector("#randBtn");
let body = document.getElementById("gradient");

function setGradient() {
    body.style.background = "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    +")";

    //Adds Text Content to Background
    css.textContent = body.style.background + ";";
}

//Sets Gradient to input colors on first load.
setGradient();

function rand() {
    body.style.background = "linear-gradient(to right, "
    + (color1.style.color = "#"+((Math.floor(Math.random() * (255) + 0)).toString(16))
                               +((Math.floor(Math.random() * (255) + 0)).toString(16)) 
                               + (255).toString(16) )
    + ", "
    + (color2.style.color = "#"+((Math.floor(Math.random() * (255) + 0)).toString(16))
                               +((Math.floor(Math.random() * (255) + 0)).toString(16)) 
                               + (255).toString(16))
    +")";

    //Adds Text Content to Background
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

randBtn.addEventListener("click", rand);