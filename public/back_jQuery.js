
// Java Script for JQuery

// Setting up the Variables
var bars = document.getElementById("nav-action");
var nav = document.getElementById("nav");


//setting up the listener
bars.addEventListener("click", barClicked, false);


//setting up the clicked Effect
function barClicked() {
  bars.classList.toggle('active');
  nav.classList.toggle('visible');
}



// for random curve

function randomizeCurve() {
  const curve = document.getElementById('curve-path');
  const width = window.outerWidth;
  const height = window.innerHeight;
  const startX = Math.random() * width;
  const startY = Math.random() * height;
  const endX = Math.random() * width;
  const endY = Math.random() * height;
  const controlX1 = Math.random() * width;
  const controlY1 = Math.random() * height;
  const controlX2 = Math.random() * width;
  const controlY2 = Math.random() * height;

  const path = `M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`;

  curve.setAttribute('d', path);

  const pathElement = curve;
  const pathLength = pathElement.getTotalLength();

  pathElement.style.transition = 'none';
  pathElement.style.strokeDasharray = pathLength;
  pathElement.style.strokeDashoffset = pathLength;

  // Trigger reflow to apply initial path
  curve.getBoundingClientRect();

  pathElement.style.transition = 'stroke-dashoffset 3s ease-in-out';
  pathElement.style.strokeDashoffset = 0;

  setTimeout(() => {
      curve.style.animation = 'glow 3s ease-in-out infinite';
      randomizeCurve();
  }, 4000); // Change the curve and start the glow animation every 4 seconds
}

randomizeCurve();


// for audio
$(".btn").click(function(){
  alert("hiohji");
})