const buttons = document.getElementsByTagName('button');
const letterS = document.getElementById('letter-s');
const letterC = document.getElementById('letter-c');
const letterR = document.getElementById('letter-r');
const letterI = document.getElementById('letter-i');
const letterM = document.getElementById('letter-m');
const letterB = document.getElementById('letter-b');
const letterA = document.getElementById('letter-a');
const word1 = document.getElementById('word-1');
const word2 = document.getElementById('word-2');
const word3 = document.getElementById('word-3');

for (const button of buttons) {
    button.addEventListener('click', shake)
}

function shake (e) {
    e.target.classList.toggle('shake')
    e.target.classList.toggle('shadow-pink')

}

function colorIt (color) {
    word1.style.color = color
    word2.style.color = color
    word3.style.color = color
}

letterS.addEventListener('click', (e) => {
    colorIt('hotpink')
    
})

letterC.addEventListener('click', (e) => {
    colorIt('orange')
})

letterR.addEventListener('click', (e) => {
    colorIt('greenyellow')
})

letterI.addEventListener('click', (e) => {
    colorIt('rgb(160, 105, 211)')
})

letterM.addEventListener('click', (e) => {
    colorIt('Cyan')
})

letterB.addEventListener('click', (e) => {
    colorIt('#E8ADAA')
})

letterA.addEventListener('click', (e) => {
    colorIt('#1F45FC')
})


// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
   // of the mouse, set with a mousemove event listener below
   let dots = [],
   mouse = {
     x: 0,
     y: 0
   };

// The Dot object used to scaffold the dots
let Dot = function() {
 this.x = 0;
 this.y = 0;
 this.node = (function(){
   let n = document.createElement("div");
   n.className = "trail";
   document.body.appendChild(n);
   return n;
 }());
};
// The Dot.prototype.draw() method sets the position of 
 // the object's <div> node
Dot.prototype.draw = function() {
 this.node.style.left = this.x + "px";
 this.node.style.top = this.y + "px";
};

// Creates the Dot objects, populates the dots array
for (let i = 0; i < 12; i++) {
 let d = new Dot();
 dots.push(d);
}

// This is the screen redraw function
function draw() {
 // Make sure the mouse position is set everytime
   // draw() is called.
 let x = mouse.x,
     y = mouse.y;
 
 // This loop is where all the 90s magic happens
 dots.forEach(function(dot, index, dots) {
   let nextDot = dots[index + 1] || dots[0];
   dot.x = x;
   dot.y = y;
   dot.draw();
   x += (nextDot.x - dot.x) * .6;
   y += (nextDot.y - dot.y) * .6;
 });
}

addEventListener("mouseup", function(event) {
 //event.preventDefault();
 mouse.x = event.pageX;
 mouse.y = event.pageY;
});

// animate() calls draw() then recursively calls itself
 // everytime the screen repaints via requestAnimationFrame().
function animate() {
 draw();
 requestAnimationFrame(animate);
}

// And get it started by calling animate().
animate();

