function mayorYMenor(num){
    if(num > 5 && num < 10){
        console.log(true);
    }else{
        console.log(false);
    }
}


function mayorYMenorYPar(num){
    if(num > 5 && num < 10 && num % 2 == 0){
        console.log(true);
    }else{
        console.log(false);
    }
}


function operadorOr(str){
    if(str === 'Henry' || str.length < 2){
        console.log(true);
    }else console.log(false);
}


function negacion(permiso){
    if(permiso !== false){
        console.log('Tiene permiso');
    }
}


function condicionCompleja(num){
    if(num > 9 && num % 2 === 0 || num === 3){
        console.log(true);
    }else{
        console.log(false);
    }
}

// mayorYMenor(2);
// mayorYMenor(7);
// //
// mayorYMenorYPar(7);
// mayorYMenorYPar(8);
// //
// operadorOr('Henry');
// operadorOr('a');
// operadorOr('JavaScript');
// //
// negacion(true);
// negacion(false);
condicionCompleja(10);
condicionCompleja(6);
condicionCompleja(3);
condicionCompleja(5);
