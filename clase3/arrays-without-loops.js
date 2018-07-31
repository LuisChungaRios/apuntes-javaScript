//.map()
//filter()
//.reduce()

let estudiantes=[
    {
        nombre:"luis",
        calificacion:09
    },
    {
        nombre:"maria",
        calificacion:12
    },
    {
        nombre:"dina",
        calificacion:20
    },
    {
        nombre:"estefany",
        calificacion:18
    }
];
//map(elemento=> lo que va a retornar)
//transforma cada elemento del array según el callback
//devuelve un nuevo array
//Ejemplo obtener el nombre de los estudiantes del objeto usando map()

let estudiantesNombres=estudiantes.map(estudiante=>estudiante.nombre);
console.log(estudiantesNombres);

//.filter() => similar a map() pero te devuelve la propiedad con sus valores dependiendo de la condicion
//ejemplo: obtener los estudiantes que hayan aprobado el curso dependiendo de su calificacion

let estudiantesAprobados=estudiantes.filter(estudiante=>estudiante.calificacion>10);
console.log(estudiantesAprobados);
let estudiantesAprobadosNombres=estudiantesAprobados.map(estudiante=>estudiante.nombre);
console.log(estudiantesAprobadosNombres);


//.reduce(cb(prev,current[,i,arr]),[initial])=> devuelve un valor 


let numeros=[1,2,3,4,5,6];
let suma = numeros.reduce((a,b)=>a+b);
console.log(suma);
//lo que hace el reduce, es cojer los primeros dos indices
// y luego sumarlos, el resultado lo suma con el siguiente, asi hasta el ultimo indice

let max= numeros.reduce((a,b)=> a>b?a:b);
console.log(max);


//Sacar el promedio de numeros

let promedio = numeros.reduce((a,b,i,arr)=> {
    b += a;
    return i==arr.length-1? b/arr.length : b;
    
});
console.log(promedio);


//Estudiante que saco la mayor nota de el array Estudiante

let mejorEstudiante= estudiantes.reduce((a,b)=>{
    if (a.calificacion>b.calificacion) {
        return {
            nombre: a.nombre,
            calificacion: a.calificacion
        }}
    else { 
          return {
            nombre: b.nombre,
            calificacion: b.calificacion
          }
        }
        
    
});
console.log(mejorEstudiante);