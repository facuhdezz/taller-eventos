const div1 = document.getElementById("div1");
const boton = document.getElementById("boton");

function alerta(){
    alert('Hola! Soy el div');
}

function alerta2(){
    alert('Hola!');
}

boton.addEventListener("click", (e) => {
    e.stopPropagation();
    alerta2();
});

div1.addEventListener("click", () => {
    alerta();
});