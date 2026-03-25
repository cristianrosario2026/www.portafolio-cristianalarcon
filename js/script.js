//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

const links = document.querySelectorAll("nav ul li a");
const nav = document.getElementById("nav");

links.forEach(link => {
    link.addEventListener("click", function () {

        // quitar la clase a todos
        links.forEach(l => l.classList.remove("seleccionado"));

        // agregar al que clickeaste
        this.classList.add("seleccionado");

        // 🔥 cerrar menú en móvil
        nav.className = "";
    });
});