//IF ELSE ELSEIF
// && = y  || = or
let edad=18;
if (edad) {
    console.log('Tienes 18 años');
}

//truthy: strings no vacios,[],{},numeros diferentes de cero.similar a un true 
//falsy: 0,strings vacios,undefined,null,NaN

//switch: comparar un valor con diferentes valores posibles


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

//OPERADOR TERNARIO
//es una forma abreviada de esribir un if

// condicion? valorTrue: valorFalse
let myEdad=20;
edad?console.log("Luis tiene 20 años"):console.log("Luis no tiene 20 años");

//LOOPS o CICLOS
//for : 
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// continue: si la condicion se cumple, se omite y sigue ejecutandose
//break : si la condicion se cumple , se termina de ejecutar la condicion

//while: ejecuta una porcion de codigo mientras una condicion se cumpla

// while (condition) {
    
// }

//do while: es similar al while pero este se ejecuta por lo menos una vez,primero ejecuta y luego evalua la condicion
// do {
    
// } while (condition);


//for of (ES6) similar a un foreach php
let name= "Luis";

for (const value of name) {
    console.log(value);
}