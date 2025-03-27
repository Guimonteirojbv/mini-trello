const todo = document.querySelector('#todo');
const inProgress = document.querySelector("#inprogress");
const done = document.querySelector('#done');


const sections = [todo, inProgress, done];

sections.forEach((section) => {
    section.addEventListener('drop', (ev) => dropHandler(ev));
    section.addEventListener('dragover', (ev) => dragoverHandler(ev))
})

document.querySelectorAll('.task').forEach(card => {
    card.setAttribute('draggable', 'true'),
    card.addEventListener('dragstart', (ev) => dragStart(ev));
})


function dragStart(ev) {
    ev.dataTransfer.setData('text/plain', ev.target.id);
}
function dragoverHandler(ev) {
    ev.preventDefault(); // Necessário para permitir o drop
    ev.dataTransfer.dropEffect = "move";
}

function dropHandler(ev) {
    ev.preventDefault();
    // Obtém o ID do elemento arrastado
    const cardId = ev.dataTransfer.getData('text/plain');
    const card = document.getElementById(cardId);
    if (card) {
        // Move o card para a nova seção
        ev.target.appendChild(card);
        console.log(`Movido ${cardId} para ${ev.target.id}`);
    }
}


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

    boardsWrapper.appendChild(createListTask(inputValue));
   
})


function createListTask(title) {
    const list = document.createElement('div')
    list.setAttribute('id', title)
    list.classList.add('board');
    list.classList.add('board-Card');

    const headerBoard = document.createElement('div')
    headerBoard.classList.add('boards-header');

    const headerTitle = document.createElement('h2');
    headerTitle.innerText = title;

    const buttonCreate = document.createElement('button');
    buttonCreate.classList.add('button-create');
    buttonCreate.innerText = '+'

    headerBoard.appendChild(headerTitle);
    headerBoard.appendChild(buttonCreate);


    list.appendChild(headerBoard);

    return list

}