let cloth_slots = document.querySelectorAll('.cloth_slot');
//const HEAD = document.querySelector('#head-image');
//const BODY = document.querySelector('#body-image');
//const LEGS = document.querySelector('#leg-image');
const MENTORS = ['/static/images/heads/aadam.png', '/static/images/heads/bence.png', '/static/images/heads/llaci.png', '/static/images/heads/gabor.png'];
const BACKGROUNDS = ['/static/images/background/room1.jpg', '/static/images/background/room2.jpg', '/static/images/background/room3.jpg'];
const DEFAULT_TOP = '/static/images/body/default_top.png';
const DEFAULT_BOTTOM = '/static/images/body/default_bottom.png';

let backgroundIndex = 0;
let mentorIndex = 0;
let cloth_path = '';
let draggedItem;
let slcdCategory = '';
let mentor = '';

//util

function clearClothes() {
    $('#clothes').empty();
}

//set defaults


///

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

function nextMentor(accessories) {
    if (mentorIndex < MENTORS.length - 1) {
        mentorIndex += 1;
    } else {
        mentorIndex = 0
    };
    document.getElementById('head-img').src = MENTORS[mentorIndex];
    refBling(accessories);
}

function previousMentor(accessories) {
    if (mentorIndex == 0) {
        mentorIndex = MENTORS.length - 1;
    } else {
        mentorIndex -= 1;
    };
    document.getElementById('head-img').src = MENTORS[mentorIndex];
    refBling(accessories);
}


function refBling(accessories) {
    if (slcdCategory == 'accessories') {
        setBling(accessories)
    };
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

