// ...existing code...

//carrousel
function App() {}

window.onload = function(event) {
    var app = new App();
    window.app = app;
    app.startAutoSlide(); // Iniciar el carrusel automático al cargar la página
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

App.prototype.startAutoSlide = function() {
    const track = document.querySelector('#track');
    const carrusel = track.querySelectorAll('.carrusel');
    const carruselWidth = carrusel[0].offsetWidth;
    const trackWidth = track.offsetWidth;
    const listWidht = document.querySelector('.carrusel-list').offsetWidth;

    setInterval(() => {
        let leftPosition = track.style.left == "" ? 0 : parseFloat(track.style.left.slice(0, -2) * -1);
        if (leftPosition < (trackWidth - listWidht)) {
            track.style.left = `${-1 * (leftPosition + carruselWidth)}px`;
        } else {
            track.style.left = "0px"; // Reiniciar al inicio
        }
    }, 3000); // Cambia cada 3 segundos
}