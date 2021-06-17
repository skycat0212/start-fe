// // const sum = require('./sum');
// import sum from './sum';


// // alert(1, 3);
// // console.log(sum(1, 212));

// document.getElementById('debug').innerHTML = sum(10, 2);



// const avg = require('../quiz9/average');
// const random = require('../quiz9/random');
import avg from '../quiz9/average';
import random from '../quiz9/random';

console.log("평균 구하는 모듈");
console.log("1, 2, 3, 4");
console.log(avg(1, 2, 3, 4));
console.log("1, 2");
console.log(avg(1, 2));
console.log("1, 2, 3, 4, 5, 6");
console.log(avg(1, 2, 3, 4, 5, 6));
console.log("1, 'a', 2");
console.log(avg(1, 'a', 2));
console.log("[1,2,3]");
console.log(avg([1,2,3]));

console.log();

console.log("랜덤한 숫자를 구하는 모듈")
console.log("random(0, 100)");
console.log(random(0, 100));
console.log("radmon(3)");
console.log(radmon(3));
console.log("random(0, 'a')");
console.log(random(0, 'a'));