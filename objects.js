// // Declaración de objetos
// var miObjeto = {};


// // Ejemplos
// var deportes = {
//     conBalon: ["Fútbol", "Basketball", "Rugby"],
//     sinBalon: ["Boxeo", "Surf", "Trekking"],
// };

// var persona = {
//     nombre: "Juan",
//     edad: 26,
//     estudios: {
//         esProgramador: true
//     },
// };


// // Acceder a un elemento del objeto a través de Dot Notation
// console.log(persona.edad);

// // Modificar atributos
// persona.nombre = "Martín";
// console.log(persona.nombre);



// var autos = {};
// // Podemos añadir propiedades asignando un nuevo valor sobre estas
// autos.marcas = ["Ford", "Ferrari", "Audi"];
// console.log(autos);

// // Para borrar un atributo se usa delete
// delete autos.marcas;
// console.log(autos);


// // Los atributos también pueden ser funciones!
// var misFunciones = {
//     saludar : function (){
//         console.log("Hola");
//     }
// }
// misFunciones.saludar();


// Dot notation
// var atuendos = {
//     manos: ["Anillos", "Guantes"],
//     pies: ["Zapatos", "Soquetes"],
// }
// console.log(atuendos.manos);

// // Bracket notation
// atuendos["piernas"] = ["Bermudas", "Pantalones"];
// console.log(atuendos);


// var comidas = {};


// var diferenciaDeDotNotation = function(propUno, propDos){
//     comidas.propUno = ["Frutas", "Vegetales"];
//     comidas[propDos] = ["Hamburguesa", "Papas Fritas"];
// }
// diferenciaDeDotNotation("Saludable", "No Saludable");
// console.log(comidas);


// var libro = {
//     autor : "Borges",
//     genero : "Policial",
//     año: 1990,
// };


// // Método hasOwnProperty, se usa para verificar si un objeto posee
// // cierta propiedad
// var tienePropiedad = libro.hasOwnProperty("nombre");
// console.log(tienePropiedad);

// // Método keys
// var todasLasPropiedades = Object.keys(libro);
// console.log(todasLasPropiedades);



// var mundo = {
//     continentes: 7,
//     paises: 195,
//     oceanos: 5,
// };

// // Forma de interar sobre las propiedades de un objeto
// for(var prop in mundo){
//     console.log("Propiedad: " + prop);
//     console.log("Valor: " + mundo[prop]);
// }



var mascota = {
    animal : "Perro",
    raza: "Ovejero Alemán",
    amistoso: true,
    dueña: "María López",
    info: function(){
        console.log("Mi perro es un: " + this.raza);
    }
};
mascota.info()