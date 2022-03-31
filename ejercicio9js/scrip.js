window.onload=iniciar;

function iniciar() {
    //boton agregar escucha el click
    var btnAgregar =document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", clickBtnAgregar);
    //renderizar la nota
    mostrarNotas()
}
function clickBtnAgregar() {
 var txtNota = document.getElementById("txtNota");
 localStorage.nota= txtNota.value
 var divNotas=document.getElementById("divNotas");
 divNotas.innerHTML= txtNota.value;
  mostrarNotas()
}
function mostrarNotas() {
    //trae el div notas
    var divNotas=document.getElementById("divNotas");
    //le asigna las notas desde el localStorage (almacenamiento local)
    divNotas.innerHTML= localStorage.nota;
 
}