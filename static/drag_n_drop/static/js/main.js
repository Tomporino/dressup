const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty'); //all empty div

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

//Loop through empty boxes and call drag events

for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

//Drag  Events

function dragStart() {
    this.className += ' hold';
    //callback arrow so invisible will happen after hold started
    setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd() {
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    this.className = 'empty'; //clears hovered
}

function dragDrop() {
    this.className = 'empty';
    this.append(fill);
}
