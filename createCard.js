import {dragStart} from './dragAndDrop.js';


export function HandleCreateCard(name) {

    if(!name) throw new Error('Ocorreu um erro', {cause: 404})

    const card = document.createElement('div');
    card.classList.add('card-container');

    card.setAttribute('draggable', true);
    card.addEventListener('dragstart', (ev) => dragStart(ev));

    const cardTitle = document.createElement('h1');
    cardTitle.innerText = name;

    card.appendChild(cardTitle);

    return card;
}