/* Scope es el ambito o contexto donde se ejecuta una funcion y existen sus variables  */
/*Cada funcion y bloque genera un scope*/

/*CLousure : funcion que puede acceder al ambito de otra funcion que esta por encima*/
/*Accede a una funcion desde afuera*/
function  afuera() {
    let num=1;
    return function () {
        num++;
        console.log(num);
    }
    
}
let aumentar = afuera();
aumentar();
aumentar();
aumentar();
aumentar();
aumentar();