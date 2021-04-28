// quiz7 문제
// 빨간타겟이 box영역에서만 랜덤으로 출현
// 빨간타겟을 클릭하면 점수 +1
// 빨간타겟을 클릭못하면 생명 -1
// 생명이 0이면 gameover 메세지 출력


const $box = document.querySelector('.box');
const $point = document.getElementById('point');
const $life = document.getElementById('life');

const $bug = document.getElementById('bug');

var isFinish = false;
var catchFlag = false;

$bug.addEventListener('click', function(){
    console.log('catch');
    catchBug();
});

makeBug();

function makeBug(){
    setBugLoc();
    showBug();
    setTimeout(function(){
        missBug();
    }, 1000);
}

function missBug(){
    disappearBug();
    if (catchFlag === false) {
        setlife(getlifeAsInt()-1);
        checkFinish();
    } else {
        catchFlag = false;
        checkFinish();
    }
    setTimeout(function() {
        if (isFinish === false){
            makeBug();
        } else {
            alert("Game over. 게임이 끝났습니다.");
        }
    }, 1000);
}

function catchBug(){
    setPoint(getPointAsInt() + 1);
    catchFlag = true;
    disappearBug();
}

function checkFinish() {
    if (getlifeAsInt() <= 0){
        isFinish = true;
    }
}

function disappearBug(){
    $bug.hidden = true;
}

function showBug(){
    $bug.hidden = false;
}

function getRandomValue(max) {
    return Math.floor(Math.random() * max);
  }

function setBugLoc(){
    const x = getRandomValue($box.offsetWidth - $bug.offsetWidth);
    const y = getRandomValue($box.offsetHeight - $bug.offsetHeight);
  
    $bug.style.left = `${x}px`;
    $bug.style.top = `${y}px`;
}

function setPoint(point){
    $point.textContent = point;
}

function getPointAsInt(){
    return parseInt($point.textContent);
}

function setlife(life){
    $life.textContent = life;
}

function getlifeAsInt(){
    return parseInt($life.textContent);
}