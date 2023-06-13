let ubicacionP = window.pageYOffset;

window.onscroll = function (){
    let desplazamientoActual = window.pageYOffset;

    if(ubicacionP >= desplazamientoActual){
        document.getElementById('header').style.top = '0';
    }else{
        document.getElementById('header').style.top = '-100px';
    }
    ubicacionP = desplazamientoActual;

    if(desplazamientoActual >= 150){
        document.getElementById('secImg').className = 'row justify-content-center animate__animated animate__fadeInRight';
        document.getElementById('secImg').style = 'display:flex;';
    }
    ubicacionP = desplazamientoActual;
}