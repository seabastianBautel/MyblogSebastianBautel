// Obtén referencias a los elementos HTML
var boton = document.getElementById("miBoton");
var menu = document.getElementById("miMenu");
menu.style.display = "none";
// Agrega un evento de clic al botón
  boton.addEventListener("click", function() {
    // Alterna la visibilidad del menú
    if (menu.style.display === "block") {
      menu.style.display = "none"; // Cierra el menú
    } else {
      menu.style.display = "block"; // Abre el menú
    }
});
