// ! Animaciones para la seccion de información
const webdev = document.getElementById('webdev')
const persona = document.getElementById('persona')
//console.log(webdev2)
//console.log(persona2)

window.addEventListener('scroll', function() {

    const posWebDev = webdev.getBoundingClientRect().top
    console.log(posWebDev)

    if ( posWebDev < 1100 ) {
        webdev.style.animation = 'left-to-right 2s forwards'
        persona.style.animation = 'right-to-left 2s forwards'
    }

})



const webdev2 = document.querySelector('#webdev2')
console.log(webdev2);

const persona2 = document.querySelector('#persona2') /* Selecciona un elemento del html */
console.log(persona2);

window.addEventListener('scroll', function() { /* Detecta cuando el usuario hace scroll */
    console.log('Detecto qeu el usuario hace scroll');

    console.log(webdev2.getBoundingClientRect());  /* Devuelve un objeto con la posicion en 4 lados*/

    const posWebDev = webdev2.getBoundingClientRect().top
    console.log(posWebDev);

    if (posWebDev < 620 ) {
        webdev2.style.animation = 'left-to-right 2s forwards'
        persona2.style.animation = 'right-to-left 2s forwards'
    }

})