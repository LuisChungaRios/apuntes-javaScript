//ESTRUCTURA DE DATOS
// ARRAYS

let myArray=[1,2,3,4,5,6];
//console.log(myArray);
//let contador=0;
//length-> longitud o cantidad de los elementos
// console.log(myArray.length);
// console.log(myArray[0]);
// for (const value of myArray) {
// 	contador+=value;
// }
// console.log(contador);

//indexOf()
// console.log(myArray.indexOf(3));	

//Agregar elementos al array 
//push(element1...) -> añade al final 
//unshift(element1..)-> añade al inicio

// myArray.push(7,8);
// myArray.unshift(0);
// for (const element of myArray) {
// 	console.log(element);
// }

//ELIMINAR UN ELEMENTO AL FINAL O ELEMENTO
//Estos metodos devuelven el elemento eliminado
//.pop()-> elimina al final, sin parametros
//.shift()-> elimina al inicio, sin parametros

// let deleteArray = myArray.pop();
// console.log(deleteArray);

// let deleteIniArray = myArray.shift();
// console.log(deleteIniArray);

//.join('separador'): convertir un array a  un string
//'separador es por defecto una coma'

//console.log(myArray.join());

//.splice(a,b,items): añade o quita elementos
//a : posicion
//b: elementos a eliminar
//items: elementos a añadir separos por coma 
// myArray.splice(1,2);->eliminar
//myArray.splice(1,0,'hola')-> añadir

// myArray.splice(1,2,'Javascript');
// console.log(myArray);

//.slice(a,b)->crea un nuevo array apartir de un array
// sin parametros crea una copia del array
// a: inicio
//b: fin

// let newArray= myArray.slice(0,3);
// console.log(newArray);

//ES6

//.find(ab): devuelve el primer numero dependiendo de la condicion
//ab: array function

// let vectorNum=[1,2,3,4,5,6];
// let numVector=vectorNum.find(el => el>3);
// console.log(numVector);

//.findIndex: similar a .find(), devuelve la posicion o el indice del elemento que cumple con la condicion

// let positionVector=vectorNum.findIndex(el => el>3);
// console.log(positionVector);

//ITERADORES: recuerdan la posicion anterior

//Son objetos que contienen un método next();
//ese metodo devuelve un objeto con dos propiedades
//valor, done

//.keys() .values() .entries()

let iterador = myArray.keys();
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());


