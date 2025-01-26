var loader = document.getElementById("preloader")

window.addEventListener("load", function(){
    loader.style.display = "none";
})

let items = document.querySelectorAll('.content');
items.forEach(item => {
    let positionPx = e.x - item.getBoundingClientRect().left;
    let positionX = (positionPx / item.offsetWidth)*100;
    let positionPy = e.x - item.getBoundingClientRect().top;
    let positionY = (positionPy / item.offsetHeight)*100;

    item.style.setProperty('--rX', (0.5)*(50 - positionY) + 'deg');
    item.style.setProperty('--rY', (0.5)*(50 - positionX) + 'deg');
})
item.addEventListener('mouseout', () => {
    item.style.setProperty('--rX', '0deg');
    item.style.setProperty('--rY', '0deg');
})
