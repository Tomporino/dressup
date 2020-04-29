let cloth_slots = document.querySelectorAll('.cloth_slot');
const HEAD = document.querySelector('#head-image');
const BODY = document.querySelector('#body-image');
const LEGS = document.querySelector('#leg-image');
const MENTORS = ['/static/images/heads/adam.png', '/static/images/heads/bence.png', '/static/images/heads/laci.png', '/static/images/heads/gabor.png'];

let mentorIndex = 0;
let cloth_path = '';

//util

function clearClothes() {
    $('#clothes').empty();
}

//set defaults

function defaultHead() {
    document.getElementById('head-img').src = MENTORS[mentorIndex];
}

function defaultBody() {
    document.getElementById('top').src = '/static/images/body/default_top.png';
    document.getElementById('bottom').src = '/static/images/body/default_bottom.png';
}

function setTops(tops) {
    clearClothes();
    const class_cloth = document.getElementById('clothes')
    for (t of tops) {
        const top = document.createElement('div');
        top.className = 'cloth_slot';
        const img = document.createElement('img');
        img.id = 'slot'
        img.setAttribute('draggable', 'true');
        img.setAttribute('src', `static/images/tops/${t}`);
        top.append(img);
        class_cloth.append(top)
    }
    addEventListeners();
}

function setBottoms(bottoms) {
    clearClothes();
    const class_cloth = document.getElementById('clothes');
    for (b of bottoms) {
        const bottom = document.createElement('div');
        bottom.className = 'cloth_slot';
        const img = document.createElement('img');
        img.id = 'slot'
        img.setAttribute('draggable', 'true');
        img.setAttribute('src', `static/images/bottoms/${b}`);
        bottom.append(img);
        class_cloth.append(bottom)
    }
    addEventListeners();
}

function setDress(dresses) {
    const class_cloth = document.getElementById('clothes')
    for (d of dresses) {
        const dress = document.createElement('div');
        dress.className = 'cloth_slot';
        const img = document.createElement('img');
        img.id = 'slot'
        img.setAttribute('draggable', 'true');
        img.setAttribute('src', `static/images/dresses/${d}`);
        dress.append(img);
        class_cloth.append(dress)
    }
    addEventListeners();
}

defaultBody();
defaultHead();

//skins and cloth

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
function addEventListeners() {
    for (const bodypart of [HEAD, BODY, LEGS]) {
    bodypart.addEventListener('dragover', dragOver)
    bodypart.addEventListener('drop', dragDrop)
    bodypart.addEventListener('dragenter', dragEnter)
    bodypart.addEventListener('dragleave', dragLeave)
}
    cloth_slots = document.querySelectorAll('.cloth_slot');
    for (let slot of cloth_slots) {
    slot.addEventListener('dragstart', dragStart);
    slot.addEventListener('dragend', dragEnd);
}
}

addEventListeners();

//drag functions

function dragStart(event) {
    console.log('start')
    //callback arrow so invisible will happen after hold started
    setTimeout(() => this.className = 'invisible', 0);
    cloth_path = event.target.getAttribute('src')
}

function dragEnd() {
    //console.log('end');
}

function dragOver(e) {
    //console.log('over')
    e.preventDefault();
}

function dragEnter(e) {
    //e.preventDefault();
    //console.log('enter');
}

function dragLeave(event) {
    //console.log('leave');
}

function dragDrop(event) {
    event.target.setAttribute('src', cloth_path);
    if (cloth_path.slice(14,21) == 'dresses'){
        document.getElementById('top').classList.remove('body-size')
        document.getElementById('body-image').classList.add('dress-margin')
    } else {
        document.getElementById('top').classList.add('body-size')
        document.getElementById('body-image').classList.remove('dress-margin')

    }
    cloth_path = ''
}