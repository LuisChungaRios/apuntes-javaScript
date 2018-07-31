/*Tipos de funciones */
/*Funcion por definicion y expresion*/

function funcionDefinicion () {
    //codigo
}
funcionDefinicion();

let funcionExpresion=function() {
    //cuerpo de la funcion
}
funcionExpresion();


/*Funciones nombradas y anonimas */
/* callback= una funcion que es ejecutada por otra luego de un proceso */

/*EJEMPLO: CUANDO AGREGAMOS UN EVENTO A UN ELEMENTO DEL DOM*/

/*a.addEventListener('click',function () {
    codigo
})*/

/*funciones de flecha(arrow functions ) ES6
*  son funciones anonimas
*   (parametro1,paramtro2 )=>valor de retorno
*
*   Ejemplo:
 *  */
let sum = (a,b)=>a+b;
console.log(sum(31,3));

let cuadrado= a=> {
    if(typeof a == 'number') {
        return a*a;
    }
};
console.log(cuadrado(4));

/*DEVOLVER UN OBJETO CON ARROW FUNCTION */
 let arrowObj= (a,b)=> ({
     a,
     b
 });
console.log(arrowObj('Hola','Mundo'));