// -------------------------------------------------------
// let const


// let a = 'aa';
// const b = 'bb';
// var c = '11';
// c = 33;
// // b = 11;

// console.log(a, b, c);


// -------------------------------------------------------
// 템플릿 표현식

// var str = 'aaaaa \
// aa';
// const s = `aaaaaaaaa
// ccccc
// ddd`;

// console.log(str, s);


// -------------------------------------------------------
// 기본 매개변수

// // function sum (x, y) {
// //     return x + y;
// // }

// function sum (x, y=1) {
//     return x + y;
// }

// // console.log(sum(1, 2));
// console.log(sum(1))


// -------------------------------------------------------
// 화살표 함수

// const arr = [1, 2, 3];

// const newArr = arr.map(function(item){
//     return item + 1;
// });
// const newArr2 = arr.map( (item) => {
//     return item + 1;
// });
// const newArr3 = arr.map( (item) => item + 1 );
// console.log(newArr);
// console.log(newArr2);
// console.log(newArr3);

// document.getElementById('box').addEventListener('click', event => console.log(1));


// -------------------------------------------------------
// 전개 구문

// function sum(x, y, z) {
//     return x + y + z;
//   }
// const numbers = [1, 2, 3];
// console.log(sum(...numbers));
// console.log(sum(1,2,3));


// -------------------------------------------------------
// Rest 파라미터

// function func(...param) {
//     console.log(param);
// }

// func(1, 2, 3);

// // es5
// function func() {
//     console.log(arguments);
// }
  
// func(1, 2, 3);


// -------------------------------------------------------
// 구조 분해 할당

// const words = ['a', 'b'];
// const [c1, c2] = words;

// console.log(c1);
// console.log(c2);


// -------------------------------------------------------
// 향상된 객체 리터럴

const number = 1234;

const student = {
  // number: number
  number,
};

console.log(student);


// -------------------------------------------------------


