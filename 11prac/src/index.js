//start...

// import css from './todos.css';
import './todos.css';

import { render } from './html-render';
import formInput from './form-input';
import { loadData } from './data-manager';


// const $inputForm = document.querySelector('#input-form');
// const $input = document.querySelector('#input');
const $result = document.querySelector('#result');

// console.log($inputForm);

// const todoModel = {
//     id: '',
//     text: '',
//     isDone: false,
// };

const todos = loadData();

// const todos = [

//     // {
//     //     text: 'JS Study111',
//     //     isDone: false,
//     // },
//     // {
//     //     text: 'JS Study222',
//     //     isDone: true,
//     // },
// ];

$result.addEventListener('click', (event) => {
    // console.log(event.target.className);
    const { className } = event.target;
    if(className === 'delete') {
        // console.log('delete');
        // debugger;
        const { index } = event.target.parentElement.dataset;
        // console.log(index);
        todos.splice(index, 1);
        render(todos);
    }
    else if(className === 'toggle-checked') {
        const { index } = event.target.parentElement.dataset;
        todos[index].isDone = !todos[index].isDone;
        render(todos);
    }

});


// 모듈화
// $inputForm.addEventListener('submit', (event) => {
//     // console.log(event);
//     event.preventDefault();

//     const text = $input.value;
//     console.log(text);
//     $input.value = '';
// });


// 모듈화
// function render(data) {
//     const html = data.map((todo, index) => {
//         return `    <li>
//         <button class="delete">×</button>
//         <input type="checkbox" class="toggle-checked" ${
//             todo.isDone ? 'checked' : ''
//         } />
//         <span class="text">${todo.text}</span>
//       </li>`;
//     });
    
//     $result.innerHTML = `<ul>${html.join('')}</ul>`;
// }


formInput.init(todos);
render(todos);


