const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty'); //all empty div
const menuOptions = document.querySelectorAll('.menu-options');


fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

//Loop through empty boxes and call drag events

for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

menuOptions.addEventListener('click', chooseOne);


//Drag  Events

function dragStart() {
    this.className += ' hold';
    //callback arrow so invisible will happen after hold started
    setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd() {
    console.log('end')
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();
    console.log('over')
}

function dragEnter(e) {
    e.preventDefault();
    console.log('enter')
    this.className += ' hovered';
}

function dragLeave() {
    console.log('leave')
    this.className = 'empty'; //clears hovered

}

function dragDrop() {
    console.log('DROP')
    this.className = 'empty';
    this.style.background = 'url("/static/bence-roundglass.png")';
}

function chooseOne(event) {
    console.log(event);
}