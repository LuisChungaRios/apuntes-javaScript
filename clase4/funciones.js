/*
	Case Sensitive 
	Punto y coma 
	Espacios en blanco
	Variable: espacio en memoria en el que podemos almacenar informacion
	Recomendable usar let 
	Impresion por consola console.log(algo).
	constantes: const

	Las variables let tienen ambito de bloque 
	undefined: si se ah definido la variable, pero no tiene un valor
	not defined : no se a creado
*/
//Declaracion 
let nombre="Luis chunga";
console.log(nombre);


//Constantes 
const num=12;
console.log(num);

//Tipos de datos

/*
JS es dinámicamente tipado
JS esta basado en prototipos


*/

// datos primitivos


	//string (textos)
	let text="Hola";
	//let saludo="mundo";

	//Texto con comillas

	let hello="Hola \"mundo\" "

	//Template de string

	let amigo ="Luis";
	//Ya no concatenamos la variable, solo usamos el backtick
	let saludo =`bienvenido, ${amigo}`

	//integer/number (enteros)

	let nacimiento=1998;
	let year= new Date().getFullYear();
	let edad= year - nacimiento;
	console.log(edad);

	//boolean true false usados en condicionales


	//undefined: no se le asigna un valor a la variable

	//null: cuando no existe un valor

	//Ver el tipo de dato typeof()
	console.log(typeof(nacimiento));


	//OPERADORES : operacion entre valores
	/*
	suma:   +
	resta: -
	multiplicación: *
	division: / 
	modulo: %

	INCREMENTO  Y DECREMENTO 
	incremento: ++
	decremento: --

	+=
	-=
	*=
	/=

	OPERADORES DE COMPARACION
	< > <= >=   = == === 



	PROPIEDADES Y METODOS

	Propiedad:Es una caracteristica, con solo poner un punto y el nombre te devuelve el valor
		

	Metodo:Algo que se puede hacer, termina entre parentesís(funciones), puede requerir metodos

	toFixed()=redondear
	*/



//datos compuestos u objetos
/*
	arrays 
	objetos 
	maps 
	sets
	funciones
	

*/
