import {getDndItems} from "./dndItems.js";
import {getNodes} from "./nodes.js";

//selecting map creates nodes and changes image of the map
document.querySelectorAll('.mapselector').forEach(item => {
    item.addEventListener('click', event => {
        selectedCity = item.id.slice(9);
        let demoimage = document.getElementById("game2img");
        demoimage.src='./maps/'+selectedCity+'.png';
        demoimage.style.filter = 'none';
        getNodes(selectedCity).forEach(item => {
            addNode(item.id);
        });
        document.querySelector('.mapselectorcontainer').style.display = "None";
    })
})

//clicking the continue button on the dnd game moves the viewpoint towards the second game
document.getElementById("dnd-control-continue").addEventListener('click', event => {
    document.getElementById("demo2").scrollIntoView({behavior: 'smooth'});
})

//clicking the play again button on the dnd game re-shuffles all the images
document.getElementById("dnd-control-playagain").addEventListener('click', event =>{
    document.querySelector('.dnd-choices').innerHTML = '';
    document.querySelectorAll('.dnd-target-container').forEach(container =>{
        container.innerHTML = '';
    });
    setupDnD();
}) 

//clicking the check button on the dnd game checks for the validity of the solution
document.getElementById("dnd-control-check").addEventListener('click', checkDndSolution);


document.getElementById("tooltiplink").addEventListener('click', event => {
    document.getElementById("titlePartOne").scrollIntoView({behavior: 'smooth'});
})

//clicking the play again button on game 2 removes all nodes and shows map selector
document.getElementById("playagain2").addEventListener('click', event => {
    removeNodes();
    document.querySelector('.mapselectorcontainer').style.display = 'block';
})

setupDnD();

// current drag element
let selectedId;

// initialize the dnd game with a random arrangement of words and a selection of target pictures
function setupDnD() {

    let dndItems = getDndItems();
    const choiceBox = document.querySelector('.dnd-choices');
    const targetContainers = document.querySelectorAll('.dnd-target-container');

    choiceBox.addEventListener('dragenter', dragEnter);
    choiceBox.addEventListener('drop', defaultDrop);
    choiceBox.addEventListener('dragover', dragOver);
    choiceBox.addEventListener('dragleave', dragLeave);


    dndItems = shuffleArray(dndItems);

    dndItems.forEach(item => {
        let dragElement = document.createElement('div');
        dragElement.classList.add('dnd-element');
        dragElement.id = 'vocab'+item.id;
        dragElement.textContent = item.text;
        dragElement.draggable = true;
        dragElement.addEventListener('dragstart', dragStart);

        choiceBox.appendChild(dragElement);
    })

    // re-shuffle items list to get the images in a different order
    dndItems = shuffleArray(dndItems);

    targetContainers.forEach(container => {
        let item = dndItems.pop();

        let img = document.createElement('div');
        img.classList.add('dnd-target-image');
        img.id='targetImg'+item.id;
        img.textContent = 'Image ' + item.id;
        img.addEventListener('dragenter', dragEnter);
        img.addEventListener('drop', dragDropImage);
        img.addEventListener('dragover', dragOver);
        img.addEventListener('dragleave', dragLeave);
        container.appendChild(img);

        let dropArea = document.createElement('div');
        dropArea.classList.add('dnd-target');
        dropArea.id = 'target' + item.id;
        dropArea.addEventListener('dragenter', dragEnter);
        dropArea.addEventListener('drop', dragDropTarget);
        dropArea.addEventListener('dragover', dragOver);
        dropArea.addEventListener('dragleave', dragLeave);
        container.appendChild(dropArea);
    })
}

// check whether all lables are with the correct pictures
function checkDndSolution(){
    const targetAreas = document.querySelectorAll('.dnd-target');
    let falseAnswers = [];
    const choiceBox = document.querySelector('.dnd-choices');
    
    targetAreas.forEach(target => {
        let selection;
        target.hasChildNodes ? selection = target.firstChild : selection = undefined;
        
        if(selection != undefined){
            if(!checkForMatch(selection, target)){
                falseAnswers.push(selection)
            }
        } else {
            falseAnswers.push(selection);
        }
    })

    if(falseAnswers.length === 0){
        const feedback = document.querySelector('.dnd-feedback');
        feedback.innerHTML = '';
        let feedbackText = document.createElement('p');
        feedbackText.textContent = "Well done! Everything is correct!";
        let feedbackBtn = document.createElement('button');
        feedbackBtn.classList.add("dnd-feedback-remove");
        feedbackBtn.textContent = "x";
        feedbackBtn.addEventListener('click', event => {
            feedback.style = 'display:none'
        });
        feedback.appendChild(feedbackText);
        feedback.appendChild(feedbackBtn);
    } else {
        falseAnswers.forEach(answer => {
            if(answer != undefined){
                choiceBox.appendChild(answer);
            }
        })

        const feedback = document.querySelector('.dnd-feedback');
        feedback.innerHTML = '';
        let feedbackText = document.createElement('p');
        feedbackText.textContent = "Oh no! It seems like you have made some mistakes You can try again";
        let feedbackBtn = document.createElement('button');
        feedbackBtn.classList.add("dnd-feedback-remove");
        feedbackBtn.textContent = "x";
        feedbackBtn.addEventListener('click', event => {
            feedback.style = 'display:none'
        });
        feedback.appendChild(feedbackText);
        feedback.appendChild(feedbackBtn);
    }

    document.querySelector('.dnd-feedback').style="display: block;";
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

function dragDropTarget(){
    this.appendChild(document.getElementById(selectedId));
    this.classList.remove('over'); 
}

function dragDropImage(){
    this.nextSibling.appendChild(document.getElementById(selectedId));
    this.classList.remove('over');
}

function checkForMatch(selected, dropTarget){

    const stripSelect = stripIds(selected.id);
    const stripTarget = stripIds(dropTarget.id);
    return stripSelect === stripTarget ? true : false;
}

function stripIds(id){
    return id.slice(id.length - 2);
}

function shuffleArray(array){
    let currentIndex = array.length, randomIndex;

    while(currentIndex != 0){

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}

//current intersection
let selectedNode = -1;

//current city
let selectedCity;

// adding a specific node
function addNode(id) {
    let map = document.getElementById("game2");
    let info = document.getElementById("info2");

    let node = getNodes(selectedCity)[id - 1];

    let newNode = document.createElement('img');
    newNode.classList.add("node");
    newNode.id = 'node' + node.id;
    newNode.src = './images/node.png';
    newNode.addEventListener("mouseover", function(event) {
        event.target.setAttribute('src', './images/selectnode.png');
    })
    newNode.addEventListener("mouseout", function(event) {
        event.target.setAttribute('src', './images/node.png');
    })
    newNode.addEventListener("click", function(event) {
        moveToNeighbour(event.target.id.slice(4))
    })
    newNode.style.width = '15px';
    newNode.style.height = '15px';
    newNode.style.position = 'absolute';
    newNode.style.top = node.y / 3 + 'px';
    newNode.style.left = node.x / 3 + 'px';
    map.insertBefore(newNode, info);
}

//removing nodes
function removeNodes() {
    document.querySelectorAll('.node').forEach(element => {
        element.remove();
    });
}

function moveToNeighbour(id) {
    removeNodes();
    console.log("SelectedNode: " + selectedNode);
    getNodes(selectedCity)[id - 1].neighbours.forEach(neighbour => {
        console.log(neighbour)
        if (neighbour != selectedNode)
            addNode(neighbour);
    });
    selectedNode = id;
}