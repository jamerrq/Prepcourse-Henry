// var listaDeCompras = [];
// listaDeCompras[3] = "Tomates";
// listaDeCompras[1] = "Lechuga";

// // console.log(listaDeCompras);

// var elemento = listaDeCompras[1];
// console.log(elemento);

// console.log(listaDeCompras.length);

// var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
// console.log(nombres);


// var colores = ["amarillo", "azul"];
// // para agregar un elemento al final usamos push
// colores.push("rojo");
// // para agregar un elemento al principio usamos unshift
// colores.unshift("verde");

// console.log(colores);

// // para borrar el último elemento usamos pop
// colores.pop();
// console.log(colores);

// // para borrar el primer elemento usamos shift
// colores.shift();
// console.log(colores);


var pintores = ["Picasso", "Velazquez", "Van Gogh", "Dali"];
var incluyeDali = pintores.includes("Dali");
console.log(incluyeDali);

var numeros = [7, 6, 8, 9];
// Verificar si todos los elementos de un arreglo cumplen una condición
var cumpleCondicion = numeros.every((num) => {
    return num > 5;
})
console.log(cumpleCondicion);
