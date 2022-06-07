import {getDndItems} from "./dndItems.js";
import {getNodes} from "./nodes.js";
import {getPaths} from "./paths.js";

let moveStack = [];
let finished = false;

//selecting map creates nodes and changes image of the map
document.querySelectorAll('.mapselector').forEach(item => {
    item.addEventListener('click', event => {
        selectedCity = item.id.slice(9);
        let demoimage = document.getElementById("game2img");
        demoimage.src='./maps/'+selectedCity+'.png';

        document.querySelectorAll('.startpoint').forEach(button => {
            const id = button.id.slice(10);
            switch(selectedCity){
                case 'newyork':
                    switch(id){
                        case '1':
                            button.textContent="Grand Central Station";
                            break;  
                        case '2':
                            button.textContent="MOMA";
                            break;    
                        case '3':
                            button.textContent="Empire State Building";
                            break;
                        case '4':
                            button.textContent="Rockefeller Center";
                            break;
                        default:
                    }
                    break;
                case 'london':
                    switch(id){
                        case '1':
                            button.textContent="Hyde Park";
                            break;  
                        case '2':
                            button.textContent="Big Ben";
                            break;    
                        case '3':
                            button.textContent="The British Museum";
                            break;
                        case '4':
                            button.textContent="London Bridge";
                            break;
                        default:
                    }
                    break;
                case 'paris':
                    switch(id){
                        case '1':
                            button.textContent="Eiffel Tower";
                            break;  
                        case '2':
                            button.textContent="Arc de Triomphe";
                            break;    
                        case '3':
                            button.textContent="Pantheon";
                            break;
                        case '4':
                            button.textContent="Palais Garnier";
                            break;
                        default:
                    }
                    break;
                default:
            }
        })
        document.getElementById("menuContainer1").style.display="none";
        document.getElementById("menuContainer2").style.display="flex";
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

document.getElementById("tooltiplink").addEventListener('click', event => {
    document.getElementById("titlePartOne").scrollIntoView({behavior: 'smooth'});
})

document.querySelector('#select_local').addEventListener('click', event => {
    setRole('local');
    document.getElementById("menuContainer2").style.display="none";
    document.getElementById("menuContainer3").style.display="flex";
})

document.querySelector('#select_tourist').addEventListener('click', event => {
    setRole('tourist');
    document.getElementById("menuContainer2").style.display="none";
    document.getElementById("menuContainer3").style.display="flex";
})

document.querySelectorAll('.startpoint').forEach(button => {
    button.addEventListener('click', event => {
        const id = button.id.slice(10);

        switch(selectedCity){
            case "newyork":
                switch(id){
                    case "1":
                        selectedNode = "4";
                        break;
                    case "2": 
                        selectedNode = "52";
                        break;
                    case "3":
                        selectedNode = "1";
                        break;
                    case "4":
                        selectedNode = "32";
                        break;
                    default:            
                }
                break;
            case "london":
                switch(id){
                    case "1":
                        selectedNode = "4";
                        break;
                    case "2": 
                        selectedNode = "14";
                        break;
                    case "3":
                        selectedNode = "22";
                        break;
                    case "4":
                        selectedNode = "32";
                        break;
                    default:            
                }
                break;
            case "paris":
                switch(id){
                    case "1":
                        selectedNode = "9";
                        break;
                    case "2": 
                        selectedNode = "5";
                        break;
                    case "3":
                        selectedNode = "65";
                        break;
                    case "4":
                        selectedNode = "52";
                        break;
                    default:            
                }
                break;
            default:    
        }

        document.getElementById("menuContainer3").style.display="none";
        if(userRole == "tourist"){
            document.getElementById("menuContainer4").style.display="flex";
        } else {
            document.getElementById("menuContainer6").style.display="flex";
        }

    })
})

document.querySelector('#killMenu4').addEventListener('click', e => {
    document.querySelector('#menuContainer4').style.display = "none";
    document.querySelector('#menuContainer5').style.display = "flex";
})

document.querySelector('#killMenu7').addEventListener('click', e => {
    document.querySelector('#menuContainer7').style.display = "none";
})

document.querySelector('#killMenu8').addEventListener('click', e => {
    document.querySelector('#menuContainer8').style.display = "none";
})

document.querySelectorAll('.startgame').forEach(button => {
    button.addEventListener('click', event => {
        finished = false;
        moveStack = [];
        let node = getNodes(selectedCity)[selectedNode - 1];
        node.neighbours.forEach(neighbour =>{
            addNode(neighbour)
        })
        document.getElementById("menuContainer5").style.display="none";
        document.getElementById("menuContainer6").style.display="none";

        let gameImage = document.getElementById("game2img");
        gameImage.style.filter='none';
        gameImage.style.pointerEvents = 'all';

        let map = document.getElementById("game2");
        let info = document.getElementById("info2");
    
        let newNode = document.createElement('img');
        newNode.classList.add("node");
        newNode.id = 'node' + node.id;
        newNode.src = './images/selectnode.png';
        newNode.style.width = '15px';
        newNode.style.height = '15px';
        newNode.style.position = 'absolute';
        newNode.style.top = node.y / 3 + 'px';
        newNode.style.left = node.x / 3 + 'px';
        map.insertBefore(newNode, info);

        document.querySelector('#finishGame2').style.display = 'inline';
    })
})

document.querySelector('#undo2').addEventListener('click', event => {
    if (moveStack.length === 0 || finished)
        return;
    
    removeNodes();

    let last = moveStack.pop();
    let paths = document.getElementById("paths");

    paths.removeChild(paths.lastChild);

    getNodes(selectedCity)[last - 1].neighbours.forEach(neighbour => {
        if (!moveStack.includes(neighbour.toString()))
            addNode(neighbour);
    });

    selectedNode = last;
})

document.querySelector('#finishGame2').addEventListener('click', event => {
    finished = true;
    removeNodes();
    if(userRole === "tourist"){
        document.querySelector('#menuContainer8').style.display = "flex";
    } else {
        document.querySelector('#menuContainer7').style.display = "flex";
    }
})



//clicking the play again button on game 2 removes all nodes and shows map selector
document.getElementById("playagain2").addEventListener('click', event => {
    removeNodes();
    selectedNode = -1;
    document.querySelectorAll('.path').forEach(element => {
        element.remove();
    });
    document.querySelectorAll('.menuContainer').forEach(container => {
        container.style.display = 'none';
    })
    document.querySelector('#menuContainer1').style.display = 'block';
    let gameImage = document.querySelector("#game2img");
    gameImage.style.filter='blur(5px)';
    gameImage.style.pointerEvents = 'none';
    document.querySelector('#endgameContainer').style.display='none';
    document.querySelector('#finishGame2').style.display='none';
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

        let img = document.createElement('img');
        img.classList.add('dnd-target-image');
        img.id='targetImg'+item.id;
        img.textContent = 'Image ' + item.id;
        img.src="./images/dndimgs/img"+ item.id +".png" 
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

async function dragDropTarget(){

    const ele = document.getElementById(selectedId);
    if(checkForMatch(selectedId, this.id)){
        this.appendChild(ele);
    } else {
        this.appendChild(ele);
        if(stripIds(this.parentNode.id) <=4){
            ele.classList.add("bounce");
        } else {
            ele.classList.add("bounce-far");
        }
        ele.classList.add("bounce");

        await new Promise(r => setTimeout(r, 400));

        document.querySelector('.dnd-choices').appendChild(ele);
        ele.classList.remove("bounce");
        ele.classList.remove("bounce-far");

    }
    selectedId = -1;
    this.classList.remove('over'); 

    checkForFinish();
}

async function dragDropImage(){

    const ele = document.getElementById(selectedId);
    if(checkForMatch(selectedId, this.nextSibling.id)){
        this.nextSibling.appendChild(ele);
    } else {
        this.nextSibling.appendChild(ele);
        if(stripIds(this.parentNode.id) <=4){
            ele.classList.add("bounce");
        } else {
            ele.classList.add("bounce-far");
        }
        ele.classList.add("bounce");

        await new Promise(r => setTimeout(r, 500));

        document.querySelector('.dnd-choices').appendChild(ele);
        ele.classList.remove("bounce");
        ele.classList.remove("bounce-far");

    }
    selectedId = -1;
    this.classList.remove('over');
    checkForFinish();
}

function checkForMatch(selected, dropTarget){
    const stripSelect = stripIds(selected);
    const stripTarget = stripIds(dropTarget);
    return stripSelect === stripTarget ? true : false;
}

function checkForFinish(){
    let emptyAnswers = [];
    document.querySelectorAll('.dnd-target').forEach(target => {
        if(!target.hasChildNodes()){
            emptyAnswers.push(target.id);
        }
    });
    if(emptyAnswers.length === 0){
        const feedback = document.querySelector('.dnd-feedback');
        feedback.innerHTML = '';
        let feedbackText = document.createElement('p');
        feedbackText.textContent = "Well Done! \r\n You have matched the labels to the correct images.";
        feedbackText.style = "white-space: pre;";
        let feedbackBtn = document.createElement('button');
        feedbackBtn.classList.add("dnd-feedback-remove");
        feedbackBtn.textContent = "x";
        feedbackBtn.addEventListener('click', event => {
            feedback.style = 'display:none'
        });
        feedback.appendChild(feedbackText);
        feedback.appendChild(feedbackBtn);
        feedback.style = 'display: block';
    }
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

//user selected role
let userRole;

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
    let path;

    getPaths(selectedCity).forEach(item => {
        if(item.nodes.includes(selectedNode) && item.nodes.includes(id)){
            path = document.createElementNS('http://www.w3.org/2000/svg',"path");
            path.classList.add("path");
            path.setAttributeNS(null,"d",item.d);
            document.getElementById("paths").appendChild(path);
        }
    })

    moveStack.push(selectedNode);

    getNodes(selectedCity)[id - 1].neighbours.forEach(neighbour => {
        if (!moveStack.includes(neighbour.toString()))
            addNode(neighbour);
    });

    selectedNode = id;
}

function setRole(role){
    userRole = role;
}
