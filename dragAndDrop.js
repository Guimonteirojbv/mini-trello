function dragStart(ev) {
    ev.dataTransfer.setData('text/plain', ev.target.id);
}
function dragoverHandler(ev) {
    ev.preventDefault(); 
    ev.dataTransfer.dropEffect = "move";
}

function dropHandler(ev) {
    ev.preventDefault();

    const cardId = ev.dataTransfer.getData('text/plain');
    const card = document.getElementById(cardId);
    if (card) {
        ev.target.appendChild(card);
    }
}

export {dragStart, dragoverHandler, dropHandler}