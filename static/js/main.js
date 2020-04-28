

//Drag and Drop
const cloth_slots = document.querySelectorAll('.cloth_slot');
const HEAD = document.querySelector('#head-image');
const BODY = document.querySelector('#body-image');
const LEGS = document.querySelector('#leg-image');

//add event listeners

for (const bodypart of [HEAD, BODY, LEGS]) {
    bodypart.addEventListener('dragover', dragOver)
    bodypart.addEventListener('drop', dragDrop)
    bodypart.addEventListener('dragenter', dragEnter)
    bodypart,addEventListener('dragleave', dragLeave)
}

for (const slot of cloth_slots) {
    slot.addEventListener('dragstart', dragStart);
    slot.addEventListener('dragend', dragEnd);
}

//drag functions

function dragStart() {
    console.log('start')
    //callback arrow so invisible will happen after hold started
    // setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd() {
    console.log('end');
}

function dragOver(e) {
    console.log('over')
    //e.preventDefault();
}

function dragEnter(e) {
    //e.preventDefault();
    console.log('enter')
}

function dragLeave() {
    console.log('leave')
}

function dragDrop() {
    console.log(this.id)
}