function copyText() {
    
 /* Obten el Texto del Input */
 var copyText = document.getElementById("msg");

 /* Selecciona el Texto del Area a copiar */
 copyText.select();
 copyText.setSelectionRange(0, 99999); /* Para Dispositivos Moviles */

  /* Copea el texto dentro del input*/
 navigator.clipboard.writeText(copyText.value);

 /* Alerta de texto copiado */
 alert("Texto Copiado: " + copyText.value);
}
