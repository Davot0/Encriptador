let textoCodificar = document.getElementById(`texto`);
let textoCodificado = document.getElementById(`resultado`);
let msgTexto = document.getElementById(`titulo`);
let msgCopia = document.getElementById(`textoCopia`);

let matriz = [
    ["a", "xbf"],
    ["e", "an"],
    ["i", "sai"],
    ["o", "tem"],
    ["u", "rat"]
];

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

function ponerImagen() {
    // Verificar si la imagen ya está presente
    if (!document.getElementById("imagenBusqueda")) {
        // Crear un elemento de imagen
        var imagen = document.createElement("img");
        imagen.id = "imagenBusqueda";
        imagen.src = "Imagenes/imagen.PNG"; // Ruta de la imagen
        imagen.alt = "imagen no encontrada";
        
        // Agregar la imagen al contenedor
        document.getElementById("imagen").appendChild(imagen);
    }
}

function quitarImagen() {
    // Seleccionar la imagen por su ID
    var imagen = document.getElementById("imagenBusqueda");

    // Verificar si la imagen existe
    if (imagen) {
        // Eliminar la imagen
        imagen.parentNode.removeChild(imagen);
    }
}

function crearBoton() {
    // Crear un nuevo botón
    var boton = document.createElement("button");
    boton.innerHTML = "COPIAR"; // Texto dentro del botón

    // Establecer un identificador y una clase al botón (opcional)
    boton.id = "miBoton";
    boton.className = "desencriptarbt"; // Puedes definir estilos en CSS para esta clase

    // Definir una función que maneje el evento clic
    function clicEnBoton() {
        // Seleccionar el contenido a copiar
        var contenido = document.getElementById("resultado");

        // Crear un rango de selección
        var range = document.createRange();
        range.selectNodeContents(contenido);

        // Seleccionar el contenido
        var seleccion = window.getSelection();
        seleccion.removeAllRanges();
        seleccion.addRange(range);

        // Copiar el contenido seleccionado
        document.execCommand("copy");

        // Deseleccionar el contenido
        seleccion.removeAllRanges();

        // Informar al usuario que se ha copiado el contenido
        msgCopia.innerHTML = "Contenido copiado al portapapeles.";
    }

    // Agregar un evento de clic al botón y pasar la función como argumento
    boton.addEventListener("click", clicEnBoton);

    // Agregar el botón al contenedor en el documento HTML
    document.getElementById("contenedorBoton").appendChild(boton);
}

function eliminarBoton() {
    var boton = document.getElementById("miBoton");
    var contenedor = document.getElementById("contenedorBoton");
    if (boton) {
        contenedor.removeChild(boton);
    }
}
