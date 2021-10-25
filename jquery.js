//Tomé como referencia el tp complementario n°3 con sus correcciones y lo reescribí con JQUERY en vez de JS puro. 
//
//
//Creación de los elementos INPUT Y BUTTON desde JQUERY

$(document).ready(function () {

$("#formulario").append("<input>");
$("input:first").addClass("producto");
$("input:first").attr("placeholder", "Ingrese producto");

$("#formulario").append("<input>");
$("input:last").addClass("precio");
$("input:last").attr("placeholder", "Ingrese precio");

$("#formulario").append("<button>Enviar</button>");
$("button").addClass("btn")

const form = $("#formulario");

form.submit( function (e) {
    e.preventDefault() 
    //Tomar info de los inputs
    let producto = $(".producto").val();
    let precio = Number($(".precio").val());

    //Array para guardar la info que entra por input
    let arrayProductos = [{producto,precio}];
    //console.log(arrayProductos);

    for(const productos of arrayProductos){
        $("#divForm").append(`<div>
        <p>  Producto: ${productos.producto}</p>
        <b> $ ${productos.precio}</b></div>`);
    }
    //form.reset(); Me da un error en la consola y no se por qué
})

});






















