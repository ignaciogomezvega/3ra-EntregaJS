/*    ENTREGA TRES DEL PROYECTO FINAL JAVASCRIPT   */
var componentes = document.getElementById("carritoComponentes");
componentes.addEventListener('submit',function(){
    var componentesTitulo = document.getElementById("addcomponente").value;

    if(componentesTitulo.length >= 1){
        localStorage.setItem(componentesTitulo, componentesTitulo);
    }
})

var ul = document.getElementById("listasComponentes");
for(var i in localStorage){
    console.log(localStorage[i]);

    if(typeof localStorage[i] == "string"){
        var li = document.createElement("li")
        li.append(localStorage[i])
        ul.append(li)

        console.log(li);
    }
}
var carritoBorrar = document.getElementById("carritoBorrar");

carritoBorrar.addEventListener('submit', function(){
    var componentesBorrar = document.getElementById("carritoB").ariaValueMax;

    if(componentesBorrar.length >= 1){
        localStorage.removeItem(componentesBorrar);
    }
})

// EVENTOS 
const saludar = (nombre) => {
    console.log(`Hola ${nombre}`);
   }
   
let boton = document.getElementById("boton");
boton.addEventListener("click", () => saludar("Andres"))
// boton.addEventListener("keydown", () => console.log("keydown"));
// boton.addEventListener("keydown", () => console.log("keydown"));

localStorage.clear();
