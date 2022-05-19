// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
    //clave  D: 1,  //objeto de clave          //valor
    //clave  B: 2,  //objeto de clave          //valor
    //clave  C: 3   //objeto de clave          //valor
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí:
  //objeto.clave o objeto[clave] es para mirar el valor.
  //usamos el for in para buscar un objeto.
  let newArray = [];
  for(let clave in objeto){
    newArray.push([clave, objeto[clave]]);
  }
  return newArray;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí:
  let objeto = {};
  for(let i = 0; i < string.length; i++){
    if(objeto.hasOwnProperty(string[i])){   //Para saber si tiene una propiedad adentro del objeto
      objeto[string[i]] = objeto[string[i]] + 1;  //si a tiene otro a repetida, el +1 lo aumenta y seria a:2
    }else{
      objeto[string[i]] = 1; //aca si es nuevo la letra, queda en uno solo.
    }
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí:
  let mayuscula = "";
  let minuscula = "";
  for(let i = 0; i < s.length; i++){
    if(s[i] === s[i].toLowerCase()){  //toLowerCase es para las letras en minusculas, estamos comparando si son iguales
      minuscula = minuscula + s[i]; //aca pones las letras en minusculas
    }else{
    mayuscula = mayuscula + s[i]; //aca para poner las letras en mayusculas
    }
  }
  return mayuscula + minuscula; //como primero van las mayusculas, pones primero mayuscula y luego + minuscula, lo juntamos
}

//pasar str a array
//array del str = ["The", "Henry", "Challenge", "is", "close!"]
// "The" -- ["T","h","e"] --- ["e","h","T"] --- "e","h","T"
function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí:
  let invertida = str.split(" ");  //usamos el metodo split(" ") para convertir la frase a arreglo. El " " espacio entre comillas indica cada palabra
  let fraseFinal = invertida.map(function(elem){ //la palabra "ehT" nos retorna la vuelta del map, la palabra, ej: "ehT". Es el primer elemento que nos va a guardar en fraseFinal y por cada elemento nos va a retornar y dar la vuelta del map
    return elem.split("").reverse().join(""); //.split("") convierte en array la palabra, separa las palabras ej: ["T","h","e"], // .reverse() nos da vuelta. Ej: ["e","h","T"] y se aplica al array y por eso hacemos el metodo .split("") // .join("") pasa a hacer un string, ej: "ehT", si quisieramos poner .join(" ") espacio dentro de las comillas, seria asi ej: "e h T". Junta las letras del array pero las junta con un espacio entre medio
  });
  return fraseFinal.join(" "); //fraseFinal va a hacer un array que va a tener cada una de las palabras pero invertida ej: "ehT yrneH egnellahC si !esolc". Eso lo que va a quedar guardado gracias al map // .join(" ") este join si tiene que tener un espacio entre las comillas
                              //por que? porque cuando estamos haciendo un join para juntar las letras de una palabras, esta bien que quede sin espacios dentro de las comillas. Ej: "ehT"
                              //Pero cuando estamos haciendo un join para juntar varias palabras necesitamos que entre medio de esas palabras haya un espacio y ese es el espacio que le estamos pasando como argumento al metodo .join(" ")  
}

//354 
function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  //let numString = numero.toString(); //aca lo pasamos a string el numero "1, 2, 3"
  //let resultado = numString.split("").reverse().join(""); //split convierte en array // reverse pone al reves y // join junta todo el array
  //if(numString === resultado){
    //return "Es capicua";
  //}else{
    //return "No es capicua";
  //}
  let numString = numero.toString();
  let resultado = numString.split("").reverse().join("");
  if(numString === resultado){
    return "Es capicua";
  }else{
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let deleteLetras = "";
  for(let i = 0; i < cadena.length; i++){
    if(cadena[i] === "a" || cadena[i] === "b" || cadena[i] === "c"){
      continue; //esto nos ignora las letras y sigue
    }else{
      deleteLetras += cadena[i];
    }
  }
  return deleteLetras;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let newArray = arr.sort(function(a,b){
    return a.length - b.length;
  });
  return newArray;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  let newArray = [];    //aca ponemos el nuevo array
  for(let i = 0; i < arreglo1.length; i++){ //aca hacemos el bucle for para iterar todas las letras
    for(let j = 0; j < arreglo2.length; j++){ //aca lo mismo pero esto se llama for anidado j
      if(arreglo1[i] === arreglo2[j]){// aca comparamos si ambos son iguales, si se cumple la funcion. Si son iguales
        newArray.push(arreglo1[i]); //agregamos en el array nuevo el 1er arreglo1[i].
      }
    }
  }
  return newArray;  //retornamos newArray porque ahi es donde queremos que vayan los numeros que son iguales, que sea union
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

