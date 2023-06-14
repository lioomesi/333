
/*console.log("hola mundo")
console.log(2+3)
console.log("hola la temperatura de hoy es: ", 10,) */
const letrasContainer = document.gerElementById("letras-container");
const opcionesContainer =  document.gerElementById("opciones-container");
const seccionIngresarUsuario = document.gerElementById("seccion-ingresar-usuario");
const nuevoJuegoContainer = document.gerElementByClassName("nuevo-juego-container");
const nuevoJuegoButton = document.gerElementById("nuevo-juego-button");
const canvas = document.gerElementById("canvas");
const resultadoTexto = document.gerElementById("resultado-texto"); 


let opciones ={
    frutas :[
        "manzana",
        "frutilla",
        "pera",
        "banana",
        "sandia",
        "naranja",
        "mandarina",
        "limon",
        "uva",
        "melon",
    ],
    paises:[
        "Argentina",
        "Brasil",
        "Ecuador",
        "Bolivia",
        "Chile",
        "Paraguay",
        "Mexico",
        "Alemania",
        "Estados Unidos",
        "España",
    ],
    animales : [
        "perro",
        "Gato",
        "Leon",
        "Loro",
        "Pantera",
        "Tigre",
        "Jirafa",
        "Rinoceronte",
        "Hamster",
        "Mapache",
    ]
}