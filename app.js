
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
    ],
};
//contadores 
let winCount = 0;
let Count = 0;
let choseWord = "";

const displayOptions = () =>{
    opcionesContainer.innerHTML += `<h3> porfavor seleccione una opcion </h3>`;
    //innerHTML sirve para poder ingresar codigo html en js
    let buttonCon = document.createElement("div");
    for (let value in options){
        buttonCon.innerHTML += `<button class= "options" onclick="generateWord('${value}')">${value}</button>`};
        optionsContainer.appendChild(buttonCon);
    
};

const blocker = ()=>{
    let optionsButtons = document.querySelectorAll('.options');
    let letterButtons = document.querySelectorAll('.letters');

    optionsButtons.forEach((button)=>{
        button.disabled = true;
    });

    letterButtons.forEach((button)=>{
        button.disabled.true;
    });

    nuevoJuegoContainer.classList.remove("hide");
}

//generador de palabras

const generateWord = (optionValue) =>{
    let optionsButtons = document.querySelectorAll('.options');
    optionsButtons.forEach((button)=>{
        if (button.innerText.toLowerCase() === optionValue){             
        }
         button.disabled= true;
    });


//inicializar el contenido de las letras en 0 y limpiamos lo anterior 

letrasContainer.classList.remove("hide");
seccionIngresarUsuario.innerText="";

//Array: similar a una lista que puede ser recorrida con un for
let optionArray = options[optionValue];

//elegir una palabra aleatoria 
choseWord = optionArray[Math.floor(Math.random()*
     optionArray.length)];
     //la funcion UpperCase devuelve la cadena en mayuscula
  choseWord = choseWord.toUpperCase();

  //remplazaremos las letras con "_"
  let disablayItem = choseWord.replace(/./g,'<span class ="dashes">_</span>');
  
  seccionIngresarUsuario .innerHTML = disablayItem;
};

//cuando se presione el boton de "nuevo juego" 
//se debe reiniciar todo

seccionIngresarUsuario.innerHTML="";
opcionesContainer.innerHTML="";
letrasContainer.classList.add("hide");
nuevoJuegoContainer,classList.add("hide");
letrasContainer.innerHTML="";


//crear las letras
for (let i= 65; i<91 ;i++){  //65 al 90 son las letras en  mayuscula y del 97 al 122 son el miniscula
  let button= document.createElement("botton");
  button.classList.add("letters");
  //de numeros a ASCII ( a - z )
  button.innerText = String.fromCharCode(i);

  //botones de los caracteres
  button.addEventListener("click",()=>{
    //la funcion split() divide un objeto en string
    let charArray = choseWord.split("");
    let dashes = document.getElementByIdClassName("dashes");

    if(charArray,icludes(button.innerText)){
        charArray.forEach((char, index)=>{
            if(cha === button.innerText){
                //reemplazar ell espacio en blanco por el caracter 
                dashes[index].innerText = char;
                // incrementar el contador winCount
                winCount += 1;
                if (winCount == charArray.length){
                    resultadoTexto.innerHTML= `<h2 class="win-msg">Ganaste :) </h2>`;
                    //bloquear todos los botones 
                    blocker();
                }
            }
        })
    }
  })
   
  
}