/*Las funciones son bloques de código reutilizables.
function name_function(parameters1,parameters2) {
	codigo
}*/

function sumar (a,b) {
	return (a+b);
}
console.log(sumar(1,5));

//FUNCION DENTRO DE UN OBJETO
let myObject = {
	operacion:"operacion",
	suma(a,b) {
		return (a+b);
	}
};
console.log(myObject.suma(4,5));

//Funcion dentro de otra funcion

function restar(a) {
	return function (b) {
		return a-b;
	}
}
console.log(restar(12)(15));

//Funciones autoinvoacadas
let multiplicacion = (function (a,b){
	return a*b;
})(5,2);
console.log(multiplicacion);

//funcion constructora: retorna un objeto, se inicia con mayuscula
let Pais= function(nombre,moneda) {
	this.nombre=nombre;
	this.moneda=moneda;
};
let peru = new Pais('Perú','Sol');
console.log(peru);

/*aply() , call()*/
function add(a,b,c) {
	return a + b + c;
}
let number=[3,4,5];
let myAdd= add.apply(undefined,number);
console.log(myAdd);

let newAdd= add.call(undefined,3,4,5);
console.log(newAdd);