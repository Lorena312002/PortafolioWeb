/* dark light made*/

// function dark(){

//     var body = document.getElementById("body");
//     body.classList.toggle('dark');

// }


// Obtener el botón de cambio de modo y el elemento body
const btnMode = document.querySelector('#btn');
const body = document.querySelector('body');

// Verificar si el modo está almacenado en localStorage
if (localStorage.getItem('modo') === 'oscuro') {
  body.classList.add('modo-oscuro');
}

// Agregar un escuchador de eventos al botón de cambio de modo
btnMode.addEventListener('click', () => {
  // Alternar la clase "modo-oscuro" en el elemento body
  body.classList.toggle('modo-oscuro');
  
  // Almacenar el modo en localStorage
  if (body.classList.contains('modo-oscuro')) {
    localStorage.setItem('modo', 'oscuro');
  } else {
    localStorage.setItem('modo', 'claro');
  }
});
function mostrarTexto() {
  var texto = document.getElementById("miTexto");
  if (texto.style.display === "none") {
    texto.style.display = "block";
  } else {
    texto.style.display = "none";
  }
}

let darkModeIcon = document.querySelector('#darkMode-icon');

 darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
   document.body.classList.toggle('dark-mode');
 };

//<div class="contenedor">
  //<img src="../imgmancha.png">
  //<img src="../img/Picsart_22-10-22_18-11-15-814.png" class="encima">
//</div>



