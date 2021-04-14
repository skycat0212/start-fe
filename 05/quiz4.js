// quiz4 문제
// 1. 박스를 누르면 드래그가 시작(mousedown 이벤트)
// 2. 마우스가 눌린 상태로 마우스를 움직이면 박스가 마우스 커서를 따라 움직임 (mousemove 이벤트)
// 3. 클릭을 해제하면 드래그가 멈춤 (mouseup 이벤트)

var box = document.querySelector("#box");
box.addEventListener('mousedown', mouseDown);
box.addEventListener('mousemove', mouseMove);
box.addEventListener('mouseup', mouseUp);

var isMouseDown = false;

var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

function mouseDown(event){
    console.log("hey");
    isMouseDown = true;

    if (event.type === "touchstart") {
        initialX = event.touches[0].clientX - xOffset;
        initialY = event.touches[0].clientY - yOffset;
    } else {
        initialX = event.clientX - xOffset;
        initialY = event.clientY - yOffset;
    }

    if (event.target === box) {
        isMouseDown = true;
    }
}

function mouseMove(event){
    if (isMouseDown) {
        event.preventDefault();
      
        if (event.type === "touchmove") {
            currentX = event.touches[0].clientX - initialX;
            currentY = event.touches[0].clientY - initialY;
        } else {
            currentX = event.clientX - initialX;
            currentY = event.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, box);
    }
}

function mouseUp(e){
    initialX = currentX;
    initialY = currentY;

    isMouseDown = false;
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}