import {dragStart} from './dragAndDrop.js';
import {createListTask} from './createList.js';
import {addListToStorage} from './storage.js';


//criando storage das listas para facilitar a criação e persistencia dos dados

function createLists() {
    const isExistsLists = localStorage.getItem('lists') 

    if(!isExistsLists) {
        localStorage.setItem('lists', JSON.stringify([]));
    } else {
        return
    }
}

createLists();


document.querySelectorAll('.task').forEach(card => {
    card.setAttribute('draggable', 'true'),
    card.addEventListener('dragstart', (ev) => dragStart(ev));
})

// criado de listas.

const buttonAddList = document.querySelector('#create-list');
const insertListWrapper = document.querySelector('#insert-list-info');
const buttonCancel = document.querySelector("#button-cancel");
const buttonCreateList = document.querySelector('#add-list');

const boardsWrapper = document.querySelector('.boards-wrapper');


let isCreating = false


buttonAddList.addEventListener('click', () => {
    buttonAddList.classList.add('hidden'); 
    insertListWrapper.style.display = 'block';
})

buttonCancel.addEventListener('click', () => {
    buttonAddList.classList.remove('hidden');
    insertListWrapper.style.display = 'none';
})

buttonCreateList.addEventListener('click',() => {
    const inputValue = document.querySelector('#name-list').value

    const isStorage = addListToStorage(inputValue);
    if(!isStorage) return 
    boardsWrapper.appendChild(createListTask(inputValue));

    buttonAddList.classList.remove('hidden');
    insertListWrapper.style.display = 'none';
})


//preciso dar um jeito da aplicação parar se a lista já existe

