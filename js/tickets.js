var suma = function(numero1,numero2,seleccionDesc){
    var numero1 = parseInt(document.getElementById("cantidad").value);
    var numero2 = parseInt(200);
    var seleccionDesc = document.getElementById("categoria");
    var categoria = seleccionDesc.value;

    const desc = {
        "ninguno" : parseInt(1),
        "estudiante" : parseFloat(0.2),
        "trainee" : parseFloat(0.5),
        "junior" : parseFloat(0.85)
    };

    var descuento = desc[categoria];

    var resultado = numero1 * numero2 * descuento;

    if(isNaN(resultado)){
        document.getElementById("total$").innerHTML = "";
    }else{
        document.getElementById("total$").innerHTML = resultado;
    };
}
function borrar() {
    document.getElementById("categoria").value = "ninguno";
    document.getElementById("total$").innerHTML = "";
    document.getElementById("cantidad").value = "";
}


document.getElementById("resumen").addEventListener("click", function(event){
    event.preventDefault()
});


document.getElementById("borra").addEventListener("click", function(event){
    event.preventDefault()
});