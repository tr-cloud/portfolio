const words = [
"Software Engineer",
"Web Developer",
];

/* TYPING EFFECT */

let wordIndex = 0;
let charIndex = 0;

const typing =
document.getElementById("typing");

function type(){

if(charIndex < words[wordIndex].length){

typing.textContent +=
words[wordIndex].charAt(charIndex);

charIndex++;

setTimeout(type,100);

}

else{

setTimeout(erase,1500);

}

}

function erase(){

if(charIndex > 0){

typing.textContent =
words[wordIndex].substring(
0,
charIndex-1
);

charIndex--;

setTimeout(erase,50);

}

else{

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

setTimeout(type,300);

}

}

type();



/* CUSTOM CURSOR */

const cursor =
document.querySelector(".cursor");

const isTouchDevice =
window.matchMedia(
"(pointer: coarse)"
).matches;

if(isTouchDevice){

cursor.style.display =
"none";

document.body.style.cursor =
"auto";

}

else{

let mouseX = 0;
let mouseY = 0;

let cursorX = 0;
let cursorY = 0;

document.addEventListener(
"mousemove",
(e)=>{

mouseX =
e.clientX;

mouseY =
e.clientY;

});

function animateCursor(){

cursorX +=
(mouseX-cursorX)*0.15;

cursorY +=
(mouseY-cursorY)*0.15;

cursor.style.left =
cursorX+"px";

cursor.style.top =
cursorY+"px";

requestAnimationFrame(
animateCursor
);

}

animateCursor();

}



/* CURSOR HOVER */

const hoverItems =
document.querySelectorAll(
"a, button, .skill-box, .featured-project"
);

hoverItems.forEach((item)=>{

item.addEventListener(
"mouseenter",
()=>{

cursor.style.transform =
"translate(-50%,-50%) scale(2)";

cursor.style.background =
"rgba(108,99,255,.15)";

}

);

item.addEventListener(
"mouseleave",
()=>{

cursor.style.transform =
"translate(-50%,-50%) scale(1)";

cursor.style.background =
"transparent";

}

);

});



/* CLICK EFFECT */

document.addEventListener(
"mousedown",
()=>{

cursor.style.transform =
"translate(-50%,-50%) scale(.8)";

}

);

document.addEventListener(
"mouseup",
()=>{

cursor.style.transform =
"translate(-50%,-50%) scale(1)";

}

);
