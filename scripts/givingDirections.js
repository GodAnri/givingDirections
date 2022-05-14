document.querySelectorAll('.mapselector').forEach(item => {
    item.addEventListener('click', event => {
        let city = item.id.slice(9);
        let demoimage = document.getElementById("demo2img");
        demoimage.src='./images/'+city+'.png';
    })
})

document.getElementById("continue1").addEventListener('click', event => {
    document.getElementById("demo2").scrollIntoView({behavior: 'smooth'});
})

document.getElementById("tooltiplink").addEventListener('click', event => {
    document.getElementById("titlePartOne").scrollIntoView({behavior: 'smooth'});
})

document.getElementById("playagain2").addEventListener('click', event => {
    let game2 = document.getElementById("game2");
    game2.style="-webkit-filter: blur(0px); pointer-events:all"
})



// current drag element
let selectedId;

// target area
let dropTargetId;

setupDnD();

function setupDnD() {
    const draggableElements = document.querySelectorAll('.dragElement');
    const dragTargets = document.querySelectorAll('.dragTarget');
    const choiceBox = document.querySelector('.dndChoices');

    choiceBox.addEventListener('dragenter', dragEnter);
    choiceBox.addEventListener('drop', defaultDrop);
    choiceBox.addEventListener('dragover', dragOver);
    choiceBox.addEventListener('dragleave', dragLeave);

    draggableElements.forEach(item => {
        item.textContent ="haha";
        item.draggable=true;
        item.addEventListener('dragstart', dragStart);

    })

    dragTargets.forEach(item => {
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragover', dragOver);
        item.addEventListener('dragleave', dragLeave);
    })
}


function dragStart(){
    selectedId = this.id;
}

function dragEnter(){
    this.classList.add('over');
}

function dragLeave(){
    this.classList.remove('over');
}

function dragOver(ev){
    ev.preventDefault();
}

function defaultDrop(){
    this.appendChild(document.getElementById(selectedId));
    this.classList.remove('over');
}

function dragDrop(){

    dropTargetId = this.id;
    if(checkForMatch(selectedId, dropTargetId)){
        console.log("Yay Party woop woop")
        this.appendChild(document.getElementById(selectedId));
    } else {
        console.log("brööööööpt!!!")
    }
    this.classList.remove('over'); 
}

function checkForMatch(selected, dropTarget){

    const stripSelect = stripIds(selected);
    const stripTarget = stripIds(dropTarget);
    return stripSelect === stripTarget ? true : false;
}

function stripIds(id){
    return id.slice(id.length - 2);
}