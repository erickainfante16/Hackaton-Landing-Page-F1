
let form1 = document.getElementById("baction");
form1.style.display = "none";

function baction() {
    
    document.getElementById("botonaction")
    form1.style.display = "block";
    alert("Por favor, rellene el formulario para suscribirse a nuestro boletin de noticias");
    
}

function closeForm() {
    document.getElementById("enviar");
    form1.style.display = "none";
    alert("Se ha suscrito correctamente a nuestro boletin de noticias");
}

// We select the elements
const name = document.querySelector("#name");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const benviar = document.querySelector("#enviar");

const CLAVE = "dName"; 
const CLAVE1 = "dLastname";
const CLAVE2 = "dEmail";

// Hacemos una función que guarda en localStorage y muestra en pantalla
function guardarMensaje() {
    const valor = name.value;
    const valor1 = lastname.value;
    const valor2 = email.value;

    localStorage.setItem(CLAVE, valor);
    localStorage.setItem(CLAVE1, valor1);
    localStorage.setItem(CLAVE2, valor2);
}

// Función que al abrir la página muestre el último contenido guardado
function cargarMensaje() {
    const guardado = localStorage.getItem(CLAVE);
    const guardado1 = localStorage.getItem(CLAVE1);
    const guardado2 = localStorage.getItem(CLAVE2);

    if (guardado !== null) {
        name.value = guardado;
    }

    if (guardado1 !== null) {
        lastname.value = guardado1;
    }

    if (guardado2 !== null) {
        email.value = guardado2;
    }
}

// Hacemos la conexión entre eventos
benviar.addEventListener("click", guardarMensaje);

window.addEventListener("DOMContentLoaded", cargarMensaje);
