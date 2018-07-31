/* this devuelve windows (objeto global) */
/* 'use strict': buenas practicas */

let myObj= {
    nombre:'Luis',
    saludo() {
        console.log(`HOla ${this.nombre}`)
    }
};
myObj.saludo();

'use strict';
function checkThis() {
    console.log(this)
}
checkThis();

//Lexical this

function Boy(edad) {
    this.edad=0;
    setInterval(()=>{
        this.edad ++ ;
    },1000)
}
let juanito= new Boy();