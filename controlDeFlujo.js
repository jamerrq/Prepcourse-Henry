function viajar(destino){
    if (destino === "Brasil"){
        console.log("gire a la izquierda");
    } else if (destino === "Argentina"){
        console.log("gire a la derecha");
    } else {
        console.log("nos perdimos :(");
    }
}


function puedeManejar(edad){
    if (edad >= 18){
        console.log(true);
    }else{
        console.log(false);
    }
}

viajar("Chile");
puedeManejar(17);