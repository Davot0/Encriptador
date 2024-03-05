// Seleccionar elementos del HTML
let textoCodificar = document.getElementById(`texto`);
let textoCodificado = document.getElementById(`resultado`);
let msgTexto = document.getElementById(`titulo`);
let msgCopia = document.getElementById(`textoCopia`);

// Matriz de sustitución
let matriz = [
    ["a", "xbf"],
    ["e", "an"],
    ["i", "sai"],
    ["o", "tem"],
    ["u", "rat"]
];

//Accion del boton de encriptacion
function btnEncriptar(){
    let texto = encriptar(textoCodificar.value);
    msgCopia.innerHTML = "";
    eliminarBoton();
    if (texto.trim().length == 0){
        ponerImagen();
        msgTexto.innerHTML = "Ningun mensaje fue encontrado"
        textoCodificado.innerHTML = "Ingresa el texto que desees encriptar o desencriptar";
    } else{
        quitarImagen();
        msgTexto.innerHTML = "El texto encriptado es"
        textoCodificado.innerHTML = (texto);
        crearBoton();
    }
}

// Función para encriptar texto
function encriptar(textoCodificado){
    for(let i = 0; i < matriz.length; i++){
        if (textoCodificado.includes(matriz[i][0])){
            textoCodificado = textoCodificado.replaceAll(
                matriz[i][0],
                matriz[i][1]
            )
        }
    }
    return textoCodificado;
}

//Accion del boton para desencriptacion
function btnDesencriptar(){
    msgCopia.innerHTML = "";
    eliminarBoton();
    let texto = desencriptar(textoCodificar.value);
    if (texto.trim().length == 0){
        ponerImagen();
        msgTexto.innerHTML = "Ningun mensaje fue encontrado"
        textoCodificado.innerHTML = "Ingresa el texto que desees encriptar o desencriptar";
    } else{
        quitarImagen();
        msgTexto.innerHTML = "El texto desencriptado es"
        textoCodificado.innerHTML = (texto);
        crearBoton();
    }
}

// Función para desencriptar texto
function desencriptar(textoCodificado){
    for(let i = 0; i < matriz.length; i++){
        if (textoCodificado.includes(matriz[i][1])){
            textoCodificado = textoCodificado.replaceAll(
                matriz[i][1],
                matriz[i][0]
            )
        }
    }
    return textoCodificado;
}

// Función para mostrar una imagen cuando no se encuentra
function ponerImagen() {
    if (!document.getElementById("imagenBusqueda")) {
        var imagen = document.createElement("img");
        imagen.id = "imagenBusqueda";
        imagen.src = "Imagenes/imagen.PNG";
        imagen.alt = "imagen no encontrada";
        document.getElementById("imagen").appendChild(imagen);
    }
}

// Función para quitar la imagen
function quitarImagen() {
    var imagen = document.getElementById("imagenBusqueda");

    // Verificar si la imagen existe
    if (imagen) {
        imagen.parentNode.removeChild(imagen);
    }
}

// Función para crear un botón de copia de texto
function crearBoton() {
    var boton = document.createElement("button");
    boton.innerHTML = "COPIAR";
    boton.id = "miBoton";
    boton.className = "desencriptarbt";

    // Definir una función que maneje el evento clic
    function clicEnBoton() {
        var contenido = document.getElementById("resultado");
        var range = document.createRange();
        range.selectNodeContents(contenido);
        var seleccion = window.getSelection();
        seleccion.removeAllRanges();
        seleccion.addRange(range);
        document.execCommand("copy");
        seleccion.removeAllRanges();
        msgCopia.innerHTML = "Contenido copiado al portapapeles.";
    }

    boton.addEventListener("click", clicEnBoton);
    document.getElementById("contenedorBoton").appendChild(boton);
}

// Función para eliminar el botón de copia de texto
function eliminarBoton() {
    var boton = document.getElementById("miBoton");
    var contenedor = document.getElementById("contenedorBoton");
    if (boton) {
        contenedor.removeChild(boton);
    }
}
