// // BOM - window

// console.log(window.outerWidth)

// console.log(window.name)

// window.open('http://www.daum.net');




// DOM 탐색

// console.log(document.getElementById('debug'))

// var debug = document.getElementById('debug')
// console.log(debug)


// var box = document.querySelector('.box');
// var box2 = document.querySelectorAll('.box');
// console.log(box2);

// var box = document.querySelector('#debug');
// console.log(box);




// // DOM 생성

// var div = document.createElement('div');
// console.log(div);
// div.style.border = '1px solid #000';
// div.innerHTML = 'Hello!';

// document.body.appendChild(div);




// // DOM 삽입

// const span = document.createElement('span');
// const textNode = document.createTextNode('hello!'); 
// span.appendChild(textNode);
// document.querySelector('#debug').appendChild(span);




// // DOM 제거

// var debug = document.getElementById('debug');
// debug.remove();

// const list = document.getElementById('list'); 
// list.removeChild(list.children[0]);




// 이벤트

// document.body.addEventListener('click', function(){
//     console.log('click');
// })

// document.querySelector('.box').addEventListener('click', function(){
//     console.log('click');
// });

// function clickBody(){
//     console.log('click');
// }
// document.querySelector('.box').addEventListener('click', clickBody);


// var clickCount = 0;
// function popup(event){
//     console.log(++clickCount);
//     console.log(arguments ,event ,event.type, event.currentTarget);
// }
// document.body.addEventListener('click', popup);

// document.body.addEventListener('click', function(){
//     console.log("click");
// });


// var list = document.querySelector('#list');
// console.log(list.children);

// // debugger;
// for(var i=0; i<list.children.length; i++){
//     console.log(list.children[i]);
//     list.children[i].addEventListener('click',function(){
//         console.log(1);
//     })
// }


// var app = document.getElementById("list");

// app.addEventListener("click", function(event) {
//     if(event.target.nodeName == "LI"){
//         //한개의 event리스너로 모든 li에 click이벤트 등록과 비슷
//         console.log('li');
//         event.stopPropagation();
//     }
// });

// document.body.addEventListener('click', function(){
//     console.log('body');
// })


var link = document.querySelector('#link');
link.addEventListener('click', function(){
    console.log(11111);
    // event.stopPropagation();
    event.preventDefault();
});







