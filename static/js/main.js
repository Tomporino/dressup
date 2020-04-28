const cloth_slots = document.querySelectorAll('.cloth_slot');
const HEAD = document.querySelector('#head-image');
const BODY = document.querySelector('#body-image');
const LEGS = document.querySelector('#leg-image');
const MENTORS = ['/static/images/bodies/adam2.png', '/static/images/bodies/bence2.png', '/static/images/bodies/laci2.png', '/static/images/bodies/gabor2.png'];

let mentorIndex = 0;

function defaultHead() {
    document.getElementById('head-img').src = MENTORS[mentorIndex];
}
defaultHead();

function nextMentor() {
    if (mentorIndex < MENTORS.length - 1) {
        mentorIndex += 1;
    } else {
        mentorIndex = 0
    }
    document.getElementById('head-img').src = MENTORS[mentorIndex]
}


//Drag and Drop
//add event listeners

for (const bodypart of [HEAD, BODY, LEGS]) {
    bodypart.addEventListener('dragover', dragOver)
    bodypart.addEventListener('drop', dragDrop)
    bodypart.addEventListener('dragenter', dragEnter)
    bodypart.addEventListener('dragleave', dragLeave)
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