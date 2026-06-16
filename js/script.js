const botonModo = document.getElementById("modoBtn");

if(localStorage.getItem("modo") === "oscuro"){
    document.body.classList.add("dark-mode");
}

botonModo.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("modo", "oscuro");
    }else{
        localStorage.setItem("modo", "claro");
    }

});

const guardarNombre = document.getElementById("guardarNombre");

guardarNombre.addEventListener("click", () => {

    let nombre =
        document.getElementById("nombre").value;

    localStorage.setItem("nombreUsuario", nombre);

    alert("Nombre guardado correctamente");
});

window.addEventListener("load", () => {

    let nombreGuardado =
        localStorage.getItem("nombreUsuario");

    if(nombreGuardado){

        document.getElementById("nombre").value =
            nombreGuardado;
    }
});

const menuBtn =
    document.getElementById("menuBtn");

const menuNav =
    document.getElementById("menuNav");

menuBtn.addEventListener("click", () => {

    menuNav.classList.toggle("activo");

});