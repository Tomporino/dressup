let cloth_slots = document.querySelectorAll('.cloth_slot');
const HEAD = document.querySelector('#head-image');
const BODY = document.querySelector('#body-image');
const LEGS = document.querySelector('#leg-image');
const MENTORS = ['/static/images/heads/aadam.png', '/static/images/heads/bence.png', '/static/images/heads/llaci.png', '/static/images/heads/gabor.png'];
const BACKGROUNDS = ['/static/images/background/room1.jpg', '/static/images/background/room2.jpg', '/static/images/background/room3.jpg'];
const DEFAULT_TOP = '/static/images/body/default_top.png';
const DEFAULT_BOTTOM = '/static/images/body/default_bottom.png';

let backgroundIndex = 0;
let mentorIndex = 0;
let cloth_path = '';
let draggedItem;

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
    clearClothes();
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

function setBling(accessories) {
    let currentKing = document.getElementById('head-img').getAttribute('src');
    clearClothes();
    const class_cloth = document.getElementById('clothes')
    for (a of accessories) {
        const bling = document.createElement('div');
        bling.className = 'cloth_slot';
        const img = document.createElement('img');
        img.id = 'slot'
        img.setAttribute('draggable', 'true');
        img.setAttribute('src', `static/images/accessories/${a}`);

        if (currentKing.slice(21,26) == img.getAttribute('src').slice(26,31)){
            bling.append(img);
            class_cloth.append(bling)
        }
        
    }

    addEventListeners();
}

defaultBody();
defaultHead();

//skins and cloth
function nextBackground() {
    if (backgroundIndex < BACKGROUNDS.length - 1) {
        backgroundIndex += 1;
    } else {
        backgroundIndex = 0
    }
    document.body.style.background = `url("${BACKGROUNDS[backgroundIndex]}")`;
}
function previousBackground() {
    if (backgroundIndex < BACKGROUNDS.length - 1) {
        backgroundIndex -= 1;
    } else {
        backgroundIndex = 0
    }
    document.body.style.background = `url("${BACKGROUNDS[backgroundIndex]}")`;
}

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
    console.log(event.target.parentElement.id)
    let dressCheck = document.getElementById('top').getAttribute('src')
    if (event.target.parentElement.id == 'body-image'){

        if (cloth_path.search('dresses') != -1){
        event.target.setAttribute('src', cloth_path);
        document.getElementById('top').classList.remove('body-size');
        document.getElementById('leg-image').style.visibility = 'hidden';
        document.getElementById('top').classList.add('dress-margin');
        document.getElementById('top').classList.add(('dress-size'));

    } else {
            if (cloth_path.search('top') != -1) {
                if (dressCheck.search('dress') != 1){
                    document.getElementById('top').classList.remove(('dress-margin'));
                    document.getElementById('top').classList.remove(('dress-size'));
                    event.target.setAttribute('src', cloth_path);
                    document.getElementById('leg-image').style.visibility = 'visible';
                    document.getElementById('top').classList.add('body-size');


                }
                event.target.setAttribute('src', cloth_path);
                }
            if (cloth_path.search('bottom') != -1 && dressCheck.search('dress') != -1 ) {
                document.getElementById('top').classList.remove(('dress-margin'));
                document.getElementById('top').classList.remove(('dress-size'));
                document.getElementById('bottom').setAttribute('src', cloth_path);
                document.getElementById('top').setAttribute('src', DEFAULT_TOP)
                document.getElementById('leg-image').style.visibility = 'visible';
                document.getElementById('top').classList.add('body-size');
                document.getElementById('body-image').classList.remove('dress-margin');
            }
        }

        } else if (event.target.parentElement.id == 'leg-image' && cloth_path.search('bottom') != -1){

            document.getElementById('bottom').setAttribute('src', cloth_path)

    }else if (event.target.parentElement.id == 'head-image' && (cloth_path.search('hat') != -1
                                                            || cloth_path.search('glass') != -1)) {
            event.target.setAttribute('src', cloth_path);
        }

    cloth_path = ''
}

