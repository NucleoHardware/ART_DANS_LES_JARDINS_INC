//nieve
const TOTAL_SNOWFLAKES = 30;

function createSnowflake() {
    const snowflake = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    snowflake.setAttribute("class", "snowflake");
    snowflake.setAttribute("width", "20");
    snowflake.setAttribute("height", "20");
    snowflake.setAttribute("viewBox", "0 0 24 24");

    snowflake.style.left = Math.random() * 90 + "vw";
    snowflake.style.animationDuration = Math.random() * 5 + 5 + "s"; 
    snowflake.style.animationDelay = Math.random() * 5 + "s"; 

    snowflake.innerHTML = `
        <path fill="white" d="M12 2L13 8H17L14 10L15 16L12 14L9 16L10 10L7 8H11L12 2Z"/>
    `;

    document.body.appendChild(snowflake);

    snowflake.addEventListener("animationend", () => {
        snowflake.remove();
        createSnowflake(); 
    });
}

for (let i = 0; i < TOTAL_SNOWFLAKES; i++) {
    setTimeout(createSnowflake, i * 200);
}


//carrousel
function App() {}

    window.onload = function(event) {
        var app = new App();
        window.app = app;
    }

App.prototype.processingButton = function(event){
    const btn = event.currentTarget;
    const carruselList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const carrusel = track.querySelectorAll('.carrusel');

const carruselWidth = carrusel[0].offsetWidth;

const trackWidth = track.offsetWidth;
const listWidht = carruselList.offsetWidth;

track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);
btn.dataset.button == "button-prev" ? prevAction(leftPosition,carruselWidth, track) : nextAction(leftPosition, trackWidth, listWidht,carruselWidth, track);

}

 let prevAction = (leftPosition,carruselWidth,track)=>{
    if(leftPosition > 0){
        track.style.left = `${-1 * (leftPosition - carruselWidth)}px`;
    }
}

let nextAction = (leftPosition,trackWidth,listWidht,carruselWidth,track)=>{
    if(leftPosition < (trackWidth - listWidht)){
        track.style.left = `${-1 * (leftPosition + carruselWidth)}px`;
    }
}