// Animacion de Habilidad
window.addEventListener('scroll', function(){
    // let animado = this.document.getElementsByClassName('animado');
    let animado = document.getElementById('skill');
    let posicion1 = animado.getBoundingClientRect().top;
    // console.log(posicion1);
    let tamanioPantalla = window.innerHeight/2;

    if(posicion1 < tamanioPantalla){
        animado.style.animation = 'barra 3s with ease-in-out';
    }
});
