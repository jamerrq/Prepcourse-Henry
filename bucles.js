var suma = 0;
// suma += 1;
// suma += 2;
// suma += 3;
// suma += 4;
// console.log(suma);


for(var i = 0; i < 10; ++i){
    suma += i + 1;
    console.log("Variable de iteración: " + i);
}
console.log(suma);


var suma2 = 1;
while(suma2 < 50){
    suma2 *= 2;
}
console.log(suma2);


var suma3 = 1;
do{
    suma3 *= 2;
}while(suma3 < 50);
console.log(suma3);
