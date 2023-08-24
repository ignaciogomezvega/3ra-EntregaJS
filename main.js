/*    ENTREGA TRES DEL PROYECTO FINAL JAVASCRIPT   */
let contenedor = document.getElementById("container");
let seccion = "carrito";

if (seccion === "carrito"){
    contenedor.innerHTML = "<h1> Ordena tu pedido </h1>";
    contenedor.className = "rojo";
}

const productos = [
    {id: 1, nombre: "PROCESADOR AMD", precio: 60000},
    {id: 2, nombre: "PROCESADOR Intel", precio: 80000},
    {id: 3, nombre: "Disco Solido", precio: 10000},
    {id: 5, nombre: "Disco Duro", precio: 5500},
    {id: 6, nombre: "Memoria 8gb", precio: 6000},
    {id: 7, nombre: "Memoria 4gb", precio: 4000},
];

productos.forEach(item => {
    let div = document.createElement("div");
    div.innerHTML = `
    <h2>Producto: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
    <hr />`
    document.body.append(div)
})

localStorage.setItem("listaWeb",JSON.stringify(productos));


// /* USUARIO */ 
localStorage.setItem("nombres", "Ignacio");
localStorage.setItem("producto","PROCESADOR Intel");
localStorage.setItem("precio",80000);



/*ELIMINACION DE CARRITO*/
// let eliminar = document.getElementById("eliminar");
// let productos = [];
// let productosStorage = localStorage.getItem("productos");

// if (productos){
//     productos = JSON.parse(productosStorage);
// }

// eliminar.addEventListener("click", () => {
//localStorage.clear();
// })





/*-----------------------------------------------------------------------*/
/* ESTO PERTENECE A DEMAS ENTREGAS */
// alert("----BIENVENIDO A ´ARMA TU PC´----");


// let nombre = prompt("Ingrese su nombre: ");

// alert("*********LISTA DE PRECIOS*********")
// alert("AMD $60.000 / Intel $80.000  | | Memoria Ram: 8gb $5000 / 4gb $2500 | | Disco Solido $2500 / Duro $1500");

// let procesador = prompt("Ingrese el tipo de procesador que necesita (´f´ para finalizar)");
// while (procesador != "f"){
//     if (procesador == "Intel"){
//         procesador = 80000;
//         alert("Procesador Intel 5 3400gHz");
//     }else if (procesador == "AMD"){
//         procesador = 60000;
//         alert("Procesador AMD Ryzen 5 3400g")
//     }else{
//         alert("No se ha encontrado el procesador")
//         procesador = prompt("Ingrese el tipo de procesador que necesita (´f´ para finalizar)");
//     }

//     memoria = parseInt(prompt("Ingrese la cantidad de memoria (solo numero)"));
//     if(memoria == 8){
//         memoria = 5000;
//         alert("8gb");
//     }else if (memoria == 4){
//         memoria = 2500;
//         alert("4gb");
//     }else{
//         alert("Memoria no disponible");
//         parseInt(prompt("Ingrese la cantidad de memoria (solo numero)"));
//     }
  


//     disco = prompt("Ingrese que tipo de disco desea tener (Solido o Duro)");
//     if(disco == "Solido"){
//         disco = 2500;
//         alert("Disco Solido 240gb");
//     }else if (disco == "Duro"){
//         disco = 1500;
//         alert("Disco Duro 1t");
//     }else{
//         alert("Disco no encontrado");
//         prompt("Ingrese que tipo de disco desea tener (Solido o Duro)");
//     }

//     resultado = procesador + memoria + disco;
//     alert(`${nombre}, este es su presupuesto final: $${resultado}`);
//     resultado = 0;
//     procesador = 0;
//     memoria = 0;
//     disco = 0;

//     alert("Muchas gracias!!")
//     alert("----BIENVENIDO A ´ARMA TU PC´");
//     nombre = prompt("Ingrese su nombre: ");
//     procesador = prompt("Ingrese el tipo de procesador que necesita (´f´ para finalizar)");
// }
