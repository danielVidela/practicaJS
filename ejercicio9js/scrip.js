window.onload = iniciar;

function iniciar() {
    //boton agregar escucha el click
    var btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", clickBtnAgregar);

    //boton borrar escucha el click
    var btnBorrar = document.getElementById("btnBorrar");
    btnBorrar.addEventListener("click", clickBtnBorrar);

    //renderizar la nota
    mostrarNotas()
}
function clickBtnAgregar() {
    //traemos txt notas
    var txtNota = document.getElementById("txtNota");
     
    var notas =[];
    if (localStorage.notas){ 
    notas = JSON.parse(localStorage.notas);
    }
     notas.push(txtNota.value)
     localStorage.notas= JSON.stringify(notas);
    mostrarNotas()
}

/////////////////////////
function clickBtnBorrar() {
    localStorage.clear();
    mostrarNotas()
    alert("Todos los datos fueron borrados");
    
}


function mostrarNotas() {
    //trae el div notas
    var divNotas = document.getElementById("divNotas");
    //le asigna las notas desde el localStorage (almacenamiento local)
    var notas =[];
    if (localStorage.notas){ 
    notas = JSON.parse(localStorage.notas);
    }
    var html="";
    for (var nota of notas) {
        html += nota + "<br>";
    }
    divNotas.innerHTML = html;

}