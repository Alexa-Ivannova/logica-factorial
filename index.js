//  TRAER ID
const formCalc = document.getElementById("formCalc");
const valueCal = document.getElementById("valueCal");
const resultFact = document.getElementById("resultFact");
const msgError = document.getElementById("msgError");

// ESCUCHADOR
formCalc.addEventListener("submit", (e) => {
  e.preventDefault();

  const value = valueCal.value;

  //   EVALUAR SI EL VALOR ES UN NÚMERO
  if (isNaN(value)) {
    msgError.style.backgroundColor = "#ffd1d1";
    return (msgError.textContent = "Debe Ingresar un número");
  }

  //   EVALUAR SI EL VALOR ES UN NÚMERO POSITIVO
  if (value <= 0) {
    msgError.style.backgroundColor = "#ffd1d1";
    return (msgError.textContent =
      "Debe ingresar un número positivo mayor a 0");
  }

  //   MODIFICAR ESTILOS CUANDO NO SE PRESENTEN ERRORES
  msgError.style.backgroundColor = "transparent";
  msgError.textContent = "";

  let resultFactorial = 1;
  const numFactorial = value;

  // FOR = () ADENTRO VAN LAS CONDICIONES, ESTA LLEVA 3 PARAMETROS
  // 1) Variable (let i = 0) siempre va index o i POR CONVENCIÓN   i= INDICE DE LO QUE SE ESTA RECORRIENDO 0 es el valor de i, puede ser diferentea a 0 segun el caos
  // 2) Hacer que se cumpla la condición, se separa por ; (; i<= X)  X= cantidad de veces que va a hacer el recorrido
  // 3) Indicar que i valga un valor más cada que da una vuelta (; i++)
  // SINTAXIS FOR =>  for(let i = 0; i <= x; i++){ Logica de lo que quiero que ejecute en cada recorrido indica en mi for}

  // LOGICA FACTORIAL
  for (let i = 1; i <= numFactorial; i++) {
    resultFactorial = i * resultFactorial;
  }
  resultFact.textContent = resultFactorial;
});
