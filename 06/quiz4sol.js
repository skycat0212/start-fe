// quiz4 문제
// 1. 박스를 누르면 드래그가 시작(mousedown 이벤트)
// 2. 마우스가 눌린 상태로 마우스를 움직이면 박스가 마우스 커서를 따라 움직임 (mousemove 이벤트)
// 3. 클릭을 해제하면 드래그가 멈춤 (mouseup 이벤트)

const $box = document.getElementById('box');

let offset = {x:0, y:0};
let isDown = false;

$box.addEventListener('mousedown', (event) => {
    isDown = true;
    // console.log($box.offsetLeft);
    // console.log('mousedown');
    offset.x = $box.offsetLeft - event.clientX;
    offset.y = $box.offsetTop - event.clientY;
});

$box.addEventListener('mouseup', (event) => {
    isDown = false;

    // console.log('mouseup');
});

document.addEventListener('mousemove', (event) => {
    // console.log('mousemove');
    // console.log(event.clientX, event.clientY);

    if (!isDown) return;

    $box.style.left = (event.clientX + offset.x) + "px";
    $box.style.top = (event.clientY + offset.y) + "px";

});