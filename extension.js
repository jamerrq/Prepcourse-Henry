class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log("Hola, mi nombre es " + this.nombre + ". Tengo " + this.edad);
    }
}


var martin = new Persona("Martín", 26);
martin.saludar();


// Extensión de clase
class Programador extends Persona{
    constructor(nombre, edad, añosDeExperiencia){
        super(nombre, edad);
        this.añosDeExperiencia = añosDeExperiencia;
    }

    codear(){
        console.log("Soy " + this.nombre + ". Codeo desde hace " +
        this.añosDeExperiencia + " años.")
    }
}


var programador = new Programador("María", 37, 4);
programador.codear();
programador.saludar();
