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
