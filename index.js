

// FOR = () ADENTRO VAN LAS CONDICIONES, ESTA LLEVA 3 PARAMETROS
// 1) Variable (let i = 0) siempre va index o i POR CONVENCIÓN   i= INDICE DE LO QUE SE ESTA RECORRIENDO 0 es el valor de i, puede ser diferentea a 0 segun el caos
// 2) Hacer que se cumpla la condición, se separa por ; (; i<= X)  X= cantidad de veces que va a hacer el recorrido 
// 3) Indicar que i valga un valor más cada que da una vuelta (; i++)
// SINTAXIS FOR =>  for(let i = 0; i <= x; i++){ Logica de lo que quiero que ejecute en cada recorrido indica en mi for}

let  resultFactorial = 1
const numFactorial = 6;

for (let i = 1; i <= numFactorial; i++ ){
    resultFactorial = i * resultFactorial;
}
console.log(resultFactorial);

// DEVOLVER

