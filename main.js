// Fence Optimization Calculator by Kaydence Riehl

// Canvas Set Up
let cnv = document.getElementById("fence-cnv");
let ctx = cnv.getContext("2d");
cnv.height = 400;
cnv.width = 600;

// Event Listener and Main Function
document.getElementById("btn").addEventListener("click", calculate);

function calculate() {
  // Input
  let numOfEnclosures = +document.getElementById("enclosure-in").value;
  let perimeter = +document.getElementById("fence-in").value;

  // Draw Fence
  drawFence(numOfEnclosures);

  // Process
  let area = getArea(perimeter, numOfEnclosures);
  let length = getLength(perimeter, numOfEnclosures);
  let width = area / length;

  // Output
  document.getElementById("area-out").innerHTML = `Area = ${area}m²`;
  document.getElementById("length-out").innerHTML = `Length = ${length}m`;
  document.getElementById("width-out").innerHTML = `Width = ${width}m`;
}

// Drawing Functions

function drawFence(enclosures) {
  // Clear Canvas
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Draw initial rect
  ctx.strokeStyle = "blue";
  ctx.strokeRect(
    cnv.width / 8,
    cnv.height / 8,
    cnv.width - cnv.width / 4,
    cnv.height - cnv.height / 4
  );

  // Draw Enclosures
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 2;
  for (let i = 1; i <= enclosures - 1; i++) {
    ctx.beginPath();
    ctx.moveTo(
      cnv.width / 8 + (i / enclosures) * (cnv.width * 0.75),
      cnv.height / 8
    );
    ctx.lineTo(
      cnv.width / 8 + (i / enclosures) * (cnv.width * 0.75),
      cnv.height - cnv.height / 8
    );
    ctx.stroke();
  }
}

// Calculating Functions
function getArea(perimeter, enclosures) {
  let a = -2 / (enclosures + 1);
  let q = ((perimeter / (enclosures + 1) / a / 2) * -1) ** 2 * a * -1;

  return q;
}

function getLength(perimeter, enclosures) {
  let a = -2 / (enclosures + 1);
  let p = (perimeter / (enclosures + 1) / a / 2) * -1;
  return p;
}
