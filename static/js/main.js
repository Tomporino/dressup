const cloth_slots = document.querySelectorAll('.cloth_slot');
const HEAD = document.querySelector('#head-image');
const BODY = document.querySelector('#body-image');
const LEGS = document.querySelector('#leg-image');
const MENTORS = ['/static/images/heads/adam.png', '/static/images/heads/bence.png', '/static/images/heads/laci.png', '/static/images/heads/gabor.png'];

let mentorIndex = 0;
let cloth_path = '';

//set defaults

function defaultHead() {
    document.getElementById('head-img').src = MENTORS[mentorIndex];
}

function defaultBody() {
    document.getElementById('top').src = '/static/images/body/default_top.png';
    document.getElementById('bottom').src = '/static/images/body/default_bottom.png';
}
defaultBody();
defaultHead();

function nextMentor() {
    if (mentorIndex < MENTORS.length - 1) {
        mentorIndex += 1;
    } else {
        mentorIndex = 0
    }
    document.getElementById('head-img').src = MENTORS[mentorIndex];
}

function previousMentor() {
    if (mentorIndex == 0) {
        mentorIndex = MENTORS.length - 1;
    } else {
        mentorIndex -= 1;
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

function dragStart(event) {
    console.log('start')
    //callback arrow so invisible will happen after hold started
    setTimeout(() => this.className = 'invisible', 0);
    cloth_path = event.target.getAttribute('src')
}

function dragEnd() {
    console.log('end');
}

function dragOver(e) {
    console.log('over')
    e.preventDefault();
}

function dragEnter(e) {
    //e.preventDefault();
    console.log('enter');
}

function dragLeave(event) {
    console.log('leave');
}

function dragDrop(event) {
    console.log(this)
    console.log(cloth_path)
    document.getElementById('top').src = cloth_path;
    cloth_path = ''
}