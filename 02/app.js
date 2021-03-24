console.log('app');

// ---------------------------------------------------------

// // Create
// var todos = ['운동']
// var todo = '게임';
// todos.push(todo);
// console.log(todos);

// ---------------------------------------------------------

// // Read

// todos.forEach(function(todo){
    
//     console.log(todo);
// });

// ---------------------------------------------------------

// // Update
//     // var arr = [1,2];
//     // arr[1] = 3;
//     // // arr = 1,3

// var todos = ['운동', '게임'];
// var updateTodo = '게임';
// var updateIndex = todos.findIndex(function(todo) {
//     return todo === updateTodo;
//   });
// console.log(updateIndex);
// todos[updateIndex] = '공부';
// console.log(todos);

// ---------------------------------------------------------

// // Delete

// var todos = ['운동', '공부', '목욕'];
// var deleteTodo = '공부';
// var deleteIndex = todos.findIndex(function(todo) {
//   return todo === deleteTodo;
// });
// todos.splice(deleteIndex, 1);
// console.log(todos);

// ---------------------------------------------------------

// // if

// // var isMan = true;
// var isMan = false;
// if(isMan){
//     console.log('1');
// } else if(isMan && isHero){
//     console.log('man & hero');
// } else {
//     console.log('2');
// }

// ---------------------------------------------------------

// window.alert('1');
// // alert('1');
// alert('안녕하세요');
// alert('1');


// var who = prompt('당신은 누구세요?');
// console.log(who);


// confirm('정말 삭제하시겠습니까?');

// var isDelete = confirm('정말 삭제하시겠습니까?');
// console.log(isDelete);


// ---------------------------------------------------------

// function sum(a,b){
//     // return a + b;
// }
// console.log(sum(1,2));

// ---------------------------------------------------------

// var car = {
//     year: '2014',
//     starting: function() {
//       console.log('starting..');
//     },
//   };
  
//   car.starting();

// ---------------------------------------------------------

// // 익명 즉시실행함수, 스코프 보호
// (function() {
//     //코드
//     var a = 'a'; // --> 변수의 캡슐화 효과
//     console.log(a);
// })();

// ---------------------------------------------------------

function sum(x, y) {
    if (!y) y = 1;
    console.log(x + y);
}
console.log(sum(3));
console.log(sum(3,3));

// ---------------------------------------------------------



// ---------------------------------------------------------
