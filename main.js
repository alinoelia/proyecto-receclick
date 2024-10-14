// import * as bootstrap from 'bootstrap'
// import './css/style.css'

const btnSingIn =document.getElementById("sign-in"),
    btnSingUp = document.getElementById("sign-up"),
    formRegistro = document.querySelector(".registro"),
    formLogin = document.querySelector(".login");

btnSingIn.addEventListener("click", e => {
    formRegistro.classList.add("hide");
    formLogin.classList.remove("hide");
})

btnSingUp.addEventListener("click", e => {
    formLogin.classList.add("hide");
    formRegistro.classList.remove("hide");
})