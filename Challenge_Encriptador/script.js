//Funcion para encriptar el mensaje del texto 
function encriptar (){
    //Obtengo el texto del mensaje del usuario.
    var texto = document.querySelector("#input-texto").value;
    //Encripto el mensaje que el usuario puso.
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value;
    }

    
var btnEncrypt= document.querySelector("#btn-encriptar"); btnEncrypt.onclick = encriptar;

//Funcion para desencriptar el mensaje del texto.
function desencriptar (){ 

    //obtengo el texto encriptado
    var texto = document.querySelector("#input-texto").value; 
    //Desencripto del texto ya optenido anteriormente.
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    document.querySelector(".text-input-salida").value = textoCifrado; 
    document.querySelector("#input-texto").value;

}

var btnDecrypt = document.querySelector("#btn-desencriptar"); btnDecrypt.onclick = desencriptar;

