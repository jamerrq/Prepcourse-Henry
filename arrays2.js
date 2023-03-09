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
