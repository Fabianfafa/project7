var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"
var draw = false;
// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y

  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

// Step 2: drawSquare and drawCircle functions
function drawSquare(x, y, size, color) {
  var newcircle = document.createElementNS(namespace, "rect")
newcircle.setAttribute("x", x)
newcircle.setAttribute("y", y)
newcircle.setAttribute("width", size)
newcircle.setAttribute("height", size)
newcircle.setAttribute("fill", color)
screen.appendChild(newcircle)
  // square drawing code here
}

function drawCircle(x, y, size, color) {
  var newcircle = document.createElementNS(namespace, "circle")
newcircle.setAttribute("cx", x)
newcircle.setAttribute("cy", y)
newcircle.setAttribute("r", size)
newcircle.setAttribute("fill", color)
screen.appendChild(newcircle)

}

// Step 3: Event listeners
document.addEventListener("mousemove", function(e) {
// what do you want to do when the user presses down
  // on the mouse button?
  if (draw == true){
  var pt = transformPoint(e)

  var selectShape = document.getElementById('shapeSelect').value
  var selectSize = document.getElementById('sizeSelect').value
  var selectColor = document.getElementById('colorSelect').value

  if (selectShape == "circle"){
    drawCircle(pt.x, pt.y, selectSize, selectColor)

  }
  else if (selectShape == "square"){
    drawSquare(pt.x, pt.y, selectSize, selectColor)

  }
}
})
document.addEventListener("mousedown", function(e) {
draw = true;

// what do you want to do when the user presses down
  // on the mouse button?
})
document.addEventListener("mouseup", function(e){
  draw = false;
})
