// No cambies los nombres de las funciones.

//      nombreArray.length === 3
//  var nombreArray = [2, "aad", true];
//  clave/key          0    1      2
function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];  //el 0 es el primero, iniciamos poniendo [0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1]; //usamos .length y - 1 para saber el ultimo elemento
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;  //.length para saber todos los elementos de un array.
}


//       2  3  4  5  6  7  8
//      [1, 2, 3, 4, 5, 6, 7]
// [i] = 0  1  2  3  4  5  6
function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  //let newArray = [/*2, 3, 4, 5, 6, 7, 8 */]; //aca ponemos los nuevos valores que nos pide, ya incrementados. Mostramos el final del return
  //for(let i = 0; i < array.length; i++){
    //newArray = array[i] + 1 //[i] nos representa 0 que seria 1. El inicio
  //} //el .push ingresa al ultimo lugar, ingresa por la derecha. El push lo que hace es colocar todos los valores adentro del newArray vacio, en el mismo orden que esta en el array que nos vino como argumento.
  //return newArray;//nos retorna el nuevo valor del newArray
  let incremento = [];
  for(let i = 0; i < array.length; i++){
    incremento.push(array[i] + 1);
  }
  return incremento;
}//console.log(incrementarPorUno([1,2,3,4,5]));

// var array = ["volsvagen", "fiat", "peugeot"]
// var elemento = "audi"
function agregarItemAlFinalDelArray(array, elemento){ //2 argumentos
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento); //el push añade al final del array lo que nosotros le mandamos.
  return array;
}



function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);//el metodo .unshift ingresa al principio del array
  return array;
}


//let palabras = ["Hello", "world!"];
//                "Hello world!"
function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
   //junta las palabras con un espacio entre medio
   return palabras.join(" ");
}

// let array =                     [1, 2, 3, 4, 5, 6];
// key/clave =                      0  1  2  3  4  5
// let elemento = [4];
// para buscar el valor = array[i]  0  1  2  3  4  5
function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  //i++ = incrementar +1
   
 //se pone saliendo del for
  for(let i = 0; i < array.length; i++){
    if(array[i] === elemento){
      return true;
    }
  }
  return false;
}//console.log(arrayContiene([1,2,3,4,5],(1)))

//    numeros [3, 5, 9]
//    clave    0  1  2
function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let acumulador = 0;
  for(let i = 0; i < numeros.length; i++){
    acumulador = acumulador + numeros[i];
  }
  return acumulador;
}

//    resultadosTest [9, 8, 7]      24 / 3 = PROMEDIO
function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let promedio = 0;
  for(let i = 0; i < resultadosTest.length; i++){
    promedio = promedio + resultadosTest[i];
  }
  return promedio / resultadosTest.length;
}

//numeros = [1, 2, 5, 7, 9, 3]
//key     =  0  1  2  3  4  5
function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let numeroGrande = 0;
  for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > numeroGrande){
      numeroGrande = numeros[i]
    }
  }
  return numeroGrande;
}

// array  [5, 7, 9]
// key     0  1  2
function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let acumulador = 1;
  if(arguments.length === 0){
    return 0;
  }else if(arguments.length === 1){
    return arguments[0];
  }else{
    for(let i = 0; i < arguments.length; i++){
      acumulador = acumulador * arguments[i];
    }
  }
  return acumulador;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let acumulador = 0;
  for(let i = 0; i < arreglo.length; i++){
    if(arreglo[i] > 18){
      acumulador = acumulador + 1;
    }
  }
  return acumulador;
}

//domingo     lunes     martes      miercoles     jueves      viernes     sabado
//  1           2         3           4             5           6            7
function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí
  if(numeroDeDia === 1 || numeroDeDia === 7){
    return "Es fin de semana";
  }else if(numeroDeDia > 1 || numeroDeDia < 7){
    return "Es dia Laboral"
  }
} 

//numero    968
//array     "9 6 8"
//key, clave 0 1 2

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  
     //clave /key [0]
  let numeroEntero = n.toString();
  if(numeroEntero[0] === "9"){
    return true;
  }
  return false;
}

// arreglo [2, 2, 2]
//  key     0  1  2
function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for(let i = 0; i < arreglo.length -1; i++){//-1 tiene el recorrido del 0 al 1 del key
    if(arreglo[i] !== arreglo[0]){
      return false;
    }
  }
  return true;
} 

//var array = ["Enero", "Marzo", "Mayo", "Julio", "Octubre", "Noviembre"];
// key            0        1        2       3         4           5
function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let mesesBuscados = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
      mesesBuscados.push(array[i]);
    }
  }
  if(mesesBuscados.includes("Enero") && mesesBuscados.includes("Marzo") && mesesBuscados.includes("Noviembre")){ //Si tenemos un valor adentro de un array //&& necesitamos que los 3 esten incluidos
    return mesesBuscados;
  }
  return "No se encontraron los meses pedidos";
}


//  array = [9, 15, 189, 56, 12, 112]
//   key  =  0   1   2   3   4    5
function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let resultado = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] > 100){
      resultado.push(array[i]);
    }
  }
  return resultado;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let newArray = [];
  let suma = numero;
  for(let i = 0; i < 10; i++){
    suma = suma + 2;
    if(suma === i){
      break;
    }else{
      newArray.push(suma);
    }
  }
  if(newArray.length < 10){
    return "Se interrumpió la ejecución";
  }else if(newArray.length === 10){
    return newArray;
  }
}

// arrayValores [10, 12, 14, 16, 18,        20, 22, 24, 26]
//    key         0   1   2   3   4    5     6  7   8    9

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let newArray = [];
  let suma = numero;
  for(let i = 0; i < 10; i++){
    if(i === 5){
      continue;
    }else{
      suma = suma + 2;
      newArray.push(suma);
    }
  }
  return newArray;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
