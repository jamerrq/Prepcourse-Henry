// var palabra = "Henri";
// var palabraSeparada = palabra.split("");

// console.log(palabraSeparada);

// palabraSeparada.pop();
// palabraSeparada.push("y");

// var palabraArreglada = palabraSeparada.join("");
// console.log(palabraArreglada);


var numeros = [1, 2, 3, 4];

numeros.forEach((num) => {
    if(num == 3){
        console.log(num);
    }
});

var masUno = numeros.map((num) => {
    return num + 1;
});
console.log(masUno);
var numeros = [1, 2, 3, 4, 5];

for(var i = 0; i < numeros.length; ++i){
    console.log(numeros[i]);
}


function encontrarLetraP(string){
    var letras = string.split("");
    for(var i = 0; i < letras.length; ++i){
        if(letras[i] === 'p'){
            console.log("Si contiene la letra p");
        }
    }
}
encontrarLetraP("Javascript");
encontrarLetraP("Henry");


var arr = [];
while(arr.length < 5){
    arr.push("BOOM");
}
console.log(arr);
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
