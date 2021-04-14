// quiz5 문제
// 1. 박스를 누르면 드래그가 시작됩니다 (mousedown 이벤트)
// 2. 마우스가 눌린 상태로 마우스를 움직이면 박스가 마우스 커서를 따라 움직입니다 (mousemove 이벤트)
// 3. 클릭을 해제하면 드래그가 멈춥니다 (mouseup 이벤트)
// 4. 박스가 여러개이므로 함수가 코드 재활용이 잘 되도록 작성 해야 합니다

const $boxes = document.querySelectorAll('.box');

for (var i = 0; i < $boxes.length; i++){
    $boxes[i].offset = {x:0, y:0};
    $boxes[i].isDown = false;

    addDown($boxes[i]);
    addUp($boxes[i]);
    addMove($boxes[i]);
}

function addDown(box) {
    box.addEventListener('mousedown', (event) => {
        box.isDown = true;
    
        box.offset.x = box.offsetLeft - event.clientX;
        box.offset.y = box.offsetTop - event.clientY;
    
    });
}

function addUp(box) {
    box.addEventListener('mouseup', (event) => {
        box.isDown = false;
    
    });
}

function addMove(box) {
    document.addEventListener('mousemove', (event) => {
        if (!box.isDown) return;
    
        box.style.left = (event.clientX + box.offset.x) + "px";
        box.style.top = (event.clientY + box.offset.y) + "px";
    
    });
}

