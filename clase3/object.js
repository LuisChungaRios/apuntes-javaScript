//OBJETOS

// let myObj = {
//     propiedad: valor,
//     propiedad1: valor1,
//     propiedad2: valor2
// }

let yo = {
    nombre: 'Luis',
    apellidos:'Chunga Rios',
    edad: '20',
    profesion: 'Técnico en computación e informática'
}

//OPERADORES

// delete -> elimina una propiedad
// in-> devuelve true si existe la propiedad en el objeto o en el prototipo

delete yo.edad;
console.log(yo);
console.log('edad' in yo);

//Si quieres consultar si la propiedad existe en el objeto y no en el prototipo 
//utilizas .hasOwnProperty('propiedad')
console.log(yo.hasOwnProperty('profesion'));

//ES6
//copia de un objeto
let yo2=Object.assign({},yo);
console.log(yo2);

//Asignar variables existentes a propiedades

let a="hola",b="mundo";
let myObj= {
    a,
    b

}
console.log(myObj);

//EXPRESIONES EN PROPIEDADES 

let myObj2 = {
    [a+b] :'Hola mundo'
}
console.log(myObj2);