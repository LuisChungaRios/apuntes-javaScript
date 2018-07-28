
//METODOS STRINGS

let saludo ="Hello World";
//Propiedad

let longitud= saludo.length;
console.log(longitud);

//Metódo 
//Trim quita los espacios al inicio y al final
console.log(saludo.trim());

//toUpperCase : Mayusculas
console.log(saludo.toUpperCase());

//toLowerCase : Minusculas
console.log(saludo.toLowerCase());

//Metódos con parametros
//indexOf() devuelve el lugar en donde esta el parametro indicado
//si no lo encuentra te devuelve -1
console.log(saludo.indexOf('W'));
console.log(saludo.indexOf('o',5))

//lastIndexOf(): similar a indexof() pero busca desde el ultimo parametro
console.log(saludo.lastIndexOf('o',5));

//replace (oldString,newString): reemplaza un texto

let newSaludo= saludo.replace('World','Mundo');
console.log(newSaludo);


//split('separador',Numero de elementos que tendra el arreglo)usualmente no se ponde el N: crea un arreglo

let arraySaludo=saludo.split(' ');
console.log(arraySaludo);


//substring(inicio,fin), substr(inicio,cantidad de caracteres), slice(inicio,fin): Extraer una porcion del string
//substring: si el segundo valor es negativo va hacia atras
let substring,substr,slice;
substring=saludo.substring(0,6);
console.log(substring);

substr= saludo.substr(2,6);
console.log(substr);

slice=saludo.slice();


//Nuevos metodos ES6 (devuelven un boolean)
//startsWith(), endsWidth(), includes()

console.log(saludo.startsWith('H'));
console.log(saludo.endsWith('o'));
console.log(saludo.includes('Mundo'));