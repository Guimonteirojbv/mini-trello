const todo = document.querySelector('#todo');
const inProgress = document.querySelector("#inprogress");
const done = document.querySelector('#done');


const sections = [todo, inProgress, done];

sections.forEach((section) => {
    section.addEventListener('drop', (ev) => dropHandler(ev));
    section.addEventListener('dragover', (ev) => dragover_handler(ev))
    section.addEventListener('dragstart', (ev) => dragStart(ev))
})

document.querySelectorAll('.task').forEach(card => {
    card.setAttribute('draggable', 'true'),
    card.addEventListener('dragstart', (ev) => dragStart(ev));
})

function dropHandler(ev) {
  

    
    console.log(ev)

   
}

function dragover_handler(ev) {

    // console.log(ev)
    ev.dataTransfer.dropEffect = "copy";
}


function dragStart(ev) {



    ev.dataTransfer.setData('text/plain', ev.target.id);

    // console.log(ev)
}