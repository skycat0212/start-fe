// 최소,최대값 사이에 랜덤한 숫자를 출력합니다
// 출력할때 숫자가 증가되는 에니메이션 효과를 줍니다 (setInterval())
// 랜덤 숫자가 출력중에는 생성버튼이 비활성가 됩니다

const $box = document.querySelector('#box');
const $min = document.querySelector('#min');
const $max = document.querySelector('#max');
const $btn = document.querySelector('#btn');

let nowVal = 0;
let upFlag = true;
let stop = true;

$box.textContent = nowVal;
let target = 0;

$btn.addEventListener('click', function () {
    var randomValue = makeRandom();
    console.log(randomValue);
    target = randomValue;
});

setInterval(animate, 1);

function makeRandom() {
    var max = parseInt($max.value);
    var min = parseInt($min.value);

    var maxMinusMin = max - min;
    var randomValue = Math.floor(Math.random() * maxMinusMin);
    return randomValue + min;
}

function animate() {
    if (target != nowVal) {
        makeAnimationFrame();
    }
}

function makeAnimationFrame() {
    var max = parseInt($max.value);
    var min = parseInt($min.value);

    if (nowVal > max) {
        upFlag = false;
    } else if (nowVal < min) {
        upFlag = true;
    }

    if (upFlag == true) {
        nowVal += 1;
    } else {
        nowVal -= 1;
    }

    $box.textContent = nowVal;
}
