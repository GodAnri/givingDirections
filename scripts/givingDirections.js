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