import {dropHandler, dragoverHandler} from './dragAndDrop.js'
export function createListTask(title) {
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

    list.addEventListener('drop', (ev) => dropHandler(ev));
    list.addEventListener('dragover', (ev) => dragoverHandler(ev))

    list.appendChild(headerBoard);

    return list

}