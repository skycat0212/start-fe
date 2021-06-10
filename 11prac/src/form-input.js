import todoModel from './todo-model';
import { render } from './html-render';

const $inputForm = document.querySelector('#input-form');
const $input = document.querySelector('#input');

// const todoModel = {
//     id: '',
//     text: '',
//     isDone: false,
// };

function init(data) {
    $inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
    
        const text = $input.value;
        if(!text) return;
        $input.value = '';

        data.push({
            ...todoModel,
            text,
            isDone: false,
        });
        // data.push(Object.assign(todoModel, {
        //     text,
        //     isDone: false,
        // }));
        
        render(data);
    });
}

export default {
    init,
};


