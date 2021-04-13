// 문제 1
// .add-red 클릭하면 .box class속성에 .red를 추가
var addRed = document.querySelector('.add-red');
addRed.addEventListener('click',addRedClick);

function addRedClick(event){
    var boxes = document.querySelectorAll('.box');

    for(var i=0; i<boxes.length; i++){
        boxes[i].className += ' red';
    }

}


// 문제 2
// .add-btn 클릭하면 .box 엘리먼트를 body 에 하나씩 추가
var addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', addBtnClick);

function addBtnClick(event){
    var body = document.querySelector('body');
    
    const div = document.createElement('div');
    div.className = 'box';
    document.body.appendChild(div);
}


// 문제 3
// .delete-btn 클릭하면 모든 .box 엘리먼트를 하나씩 삭제
var deleteBtn = document.querySelector('.delete-btn');
deleteBtn.addEventListener('click', deleteBtnClick);

function deleteBtnClick(event){
    const boxes = document.querySelectorAll('.box');
    const el = boxes.item(boxes.length - 1);
    el.remove();
}


// 문제 4
// .text-btn 클릭하면 .txt에 value값을 가져와서 .box에 가져온 value값 텍스트 추가
// .box 엘리먼트가 여러개 있을경우 동일하게 추가
var textBtn = document.querySelector('.text-btn');
textBtn.addEventListener('click', textBtnClick);

function textBtnClick(event){
    const textEl = document.querySelector('.txt');
    const textValue = textEl.value;

    var boxes = document.querySelectorAll('.box');
    for(var i=0; i<boxes.length; i++){
        boxes[i].textContent += textValue;
    }
}


// 문제 5
// .reset-btn 클릭하면 모든 .box 엘리먼트 제거
var resetBtn = document.querySelector('.reset-btn');
resetBtn.addEventListener('click', resetBtnClick);

function resetBtnClick(event){
    var boxes = document.querySelectorAll('.box');
    for(var i=0; i<boxes.length; i++){
        boxes.item(i).remove();
    }

}

// 문제 6
// .toggle-btn 클릭하면 .box 엘리먼트 숨기고 다시 클릭하면 보이게 토글버튼 처리면
var toggleBtn = document.querySelector('.toggle-btn');
toggleBtn.addEventListener('click', toggleBtnClick);

function toggleBtnClick(event){
    var boxes = document.querySelectorAll('.box');
    for(var i=0; i<boxes.length; i++){
        if (boxes[i].style.display === "none") {
            boxes[i].style.display = "block";
        } else {
            boxes[i].style.display = "none";
        }
    }
}


// 문제 7
// .image-btn 클릭하면 .box 엘리먼트에 이미지 출력
// 이미지 주소: https://i.imgur.com/69NjYBH.png
// .box 엘리먼트가 없을경우 생성후 처리
var imageBtn = document.querySelector('.image-btn');
imageBtn.addEventListener('click', imageBtnClick);

function imageBtnClick(event){
    var boxes = document.querySelectorAll('.box');
    if(boxes.length == 0){
        addBtnClick();
        boxes = document.querySelectorAll('.box');
    }
    
    for(var i=0; i<boxes.length; i++){
        const img = document.createElement('img');
        img.src = "https://i.imgur.com/69NjYBH.png"
    
        boxes[i].appendChild(img);
    }
}


// 문제 8
// 위에서 작성한 코드들을 최대한 함수화, 재사용성 높임





