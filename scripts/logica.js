//instanciar objetos de html en variables
const txtEncriptar = document.querySelector(".txtEncriptar");
const txtDesencriptar = document.querySelector(".txtDesencriptar");
const btnEncriptar = document.querySelector(".encriptar");
const btnDesencriptar = document.querySelector(".desencriptar");
const btnCopiar = document.querySelector(".copiar");
const mensajeCopiado = document.querySelector(".txtcopiado");
const mensajes = document.querySelectorAll(".ocl");

const ocultarElementos = () => {
  mensajes.forEach((elemento) => elemento.classList.add("ocultar"));
  txtDesencriptar.classList.remove("ocultar");
  btnCopiar.classList.remove("ocultar");
};

// funcion encriptar
const encriptar = () => {
  let texto = txtEncriptar.value.toLowerCase();
  texto = texto
    .replaceAll(/e/gi, "enter")
    .replaceAll(/i/gi, "imes")
    .replaceAll(/o/gi, "ober")
    .replaceAll(/a/gi, "ai")
    .replaceAll(/u/gi, "ufat");
  txtDesencriptar.value = texto.trim();
  txtEncriptar.value = "";
};

//funcion desencriptar
const desencriptar = () => {
  let texto = txtEncriptar.value.toLowerCase();
  texto = texto
    .replaceAll(/enter/gi, "e")
    .replaceAll(/imes/gi, "i")
    .replaceAll(/ober/gi, "o")
    .replaceAll(/ai/gi, "a")
    .replaceAll(/ufat/gi, "u");
    txtDesencriptar.value = texto.trim();
    txtEncriptar.value = "";
};

//comprobamos los campos vacíos, de ser true recargamos la pagina automáticamente
const comprobarCampoEncriptar = () => {
  if (txtEncriptar.value != "") {
    ocultarElementos();
    encriptar();
  }
};

const comprobarCampoDesencriptar = () => {
  if (txtEncriptar.value != "") {
    ocultarElementos();
    desencriptar();
  }
};

btnEncriptar.addEventListener("click",() => {
  comprobarCampoEncriptar();
});

btnDesencriptar.addEventListener("click", () => {
  comprobarCampoDesencriptar();
});


btnCopiar.addEventListener("click", () => {
  txtDesencriptar.select();
  txtDesencriptar.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(txtDesencriptar.value);
  mensajeCopiado.classList.remove("ocultar");
  //tiempo para ejcutar otra accion
  setTimeout(() => {
    mensajeCopiado.classList.add("ocultar");
  }, 2000);
});