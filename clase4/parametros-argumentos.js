/* Parametros y argumentos  */
function sumar (a,b) {
    console.log(arguments);
}

sumar(2,3);
/*Si hay más parámetros que argumentos, los argumentos faltantes son undefined
* Si hay mas argumentos que parametros,no devuelve error
*
* */

/*ES 6 LOS TRES PUNTOS*/
function sumarTodos() {
    console.log(...arguments);
    return [...arguments].reduce((a,b)=>a+b);
}
console.log(sumarTodos(1,2,3,4));

/*PARAMETROS  POR DEFECTO */

function newSumaDefecto(a,b=3) {
    return a+b;
}
console.log(newSumaDefecto(4));

/*PARAMETROS REST: SE COLOCA 3 PUNTOS EN EL PARAMETRO PARA INDICAR QUE SE PUEEDE ENVIAR VARIOS PARAMETROS, Y LO CONVIERTE EN UN ARRAY*/
function newSumaTodos(...elements) {
    return elements.reduce((a,b)=>a+b);
}
console.log(newSumaTodos(1,5,4,8,7,8,7,9,7,56,474));