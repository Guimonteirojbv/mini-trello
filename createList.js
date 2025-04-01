import {dropHandler, dragoverHandler} from './dragAndDrop.js'
import {HandleCreateCard} from './createCard.js';
export function createListTask(title) {
    const list = document.createElement('div')
    list.setAttribute('id', title)
    list.classList.add('board-Card');

    const headerBoard = document.createElement('div')
    headerBoard.classList.add('boards-header');

    const headerTitle = document.createElement('h2');
    headerTitle.innerText = title;

    const createCard = document.createElement('button');
    createCard.innerText = '+ Adicionar um cartão';
    createCard.classList.add('create-card');


   

    const inputTextWrapperClasses = ['input-text-card-wrapper', 'hidden']
    const inputTextCardWrapper = document.createElement('div');
    inputTextCardWrapper.classList.add(...inputTextWrapperClasses);
  
    const inputTextCard = document.createElement('input');
    const buttonActionsInputTextCardWrapper = document.createElement('div');

    inputTextCardWrapper.appendChild(inputTextCard);
    inputTextCardWrapper.appendChild(buttonActionsInputTextCardWrapper);



    const buttonActionCreateCard = document.createElement('button');
    buttonActionCreateCard.innerText = 'Criar cartão'
    const buttonActionDeleteCard = document.createElement('button');
    buttonActionDeleteCard.innerText = 'X'

    buttonActionsInputTextCardWrapper.appendChild(buttonActionCreateCard);
    buttonActionsInputTextCardWrapper.appendChild(buttonActionDeleteCard);


    headerBoard.appendChild(headerTitle);

    createCard.addEventListener('click', () => {
        inputTextCardWrapper.classList.remove('hidden');
        createCard.classList.add('hidden');
    })



    list.addEventListener('drop', (ev) => dropHandler(ev));
    list.addEventListener('dragover', (ev) => dragoverHandler(ev))

    list.appendChild(headerBoard);
    list.appendChild(createCard);

    list.appendChild(inputTextCardWrapper);

    buttonActionCreateCard.addEventListener('pointerdown', () => {
        const cardName = inputTextCard.value
        if(!cardName) return
        inputTextCardWrapper.classList.add('hidden');
        createCard.classList.remove('hidden');
        list.appendChild(HandleCreateCard(cardName))
       
        

    })

    return list

}