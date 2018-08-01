/*
*   Clase-> plantilla a partir de la cual se crean objetos
*   Instancia-> cada objeto creado a partir  de una clase
*   Constructor-> funcion  que se ejecuta automaticamente al instanciar una clase
*   propiedad: valores
*   metodos: funciones
*
*   Clases en ES6
* */
class Persona {
    constructor(nombre,apellido,pais) {
        this.nombre=nombre;
        this.apellido =apellido;
        this.pais= pais;
        this.nombreCompleto=`${nombre}  ${apellido}`
    }
    saludar() {
        return `Hola, soy ${this.nombreCompleto} y vivo en ${this.pais}`;
    }
}
const luis = new Persona('Luis','Chunga Rios','Perú');
console.log(luis.saludar());

/* Extender clases */
class Profesor extends Persona{
    constructor(nombre,apellido,pais,curso) {
        super(nombre,apellido,pais);
        //COn super traemos las propiedades de la clase Padre
        this.curso=curso;

    }
    invitarAlCurso() {
        return `Hola soy ${this.nombreCompleto} y te invito al curso ${this.curso}`;
    }
}
const maria= new Profesor('Maria','CHunga Rios','Perú','Aritmetica');
console.log(maria.saludar());
console.log(maria.invitarAlCurso());


// Metodos estaticos: llamar al metodo sin instanciar a la clase
class Matematica{
    constructor(a,b) {
        this.num1=a;
        this.num2=b
    }
    static sumar(a,b) {
        return (a  + b);
    }
}
console.log(Matematica.sumar(6,10));

