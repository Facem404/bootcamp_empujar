// Declaracion de variables
let operandoa;
let operandob;
let operacion;
let resultado;

// Variable de la pantalla de la calculadora
let display = document.getElementById("letra_syntax");

// Agregar numero a la pantalla
function addNumDisplay(numberText) {
  display.innerText += numberText;
}

// Reseteo de display
function cleanDisplay() {
  display.innerText = '';
}

// Funciones para operar
function addValues(valor1, valor2) {
  resultado = valor1 + valor2
  return resultado
}

function substractValues(valor1, valor2) {
  resultado = valor1 - valor2
  return resultado
}

function multValues(valor1, valor2) {
  resultado = valor1 * valor2
  return resultado
}

function divValues(valor1, valor2) {
  resultado = valor1 / valor2
  return resultado
}

// Le agregamos la funcionalidad a cada boton dependiendo de la operacion
function sumar() {
  operandoa = parseFloat(display.innerText);
  operacion = "+";
  display.innerText += "+";
  cleanDisplay()
}

function restar() {
  operandoa = parseFloat(display.innerText);
  operacion = "-";
  display.innerText += "-";
  cleanDisplay()
}

function multiplicar() {
  operandoa = parseFloat(display.innerText);
  operacion = "*";
  display.innerText += "*";
  cleanDisplay()
}

function dividir() {
  operandoa = parseFloat(display.innerText);
  operacion = "/";
  display.innerText += "/";
  cleanDisplay()
}

// Creacion del Operando B y aplicacion del resultado final segun el simbolo 
function operandob_mas_resultado_final() {
  operandob = parseFloat(display.innerText)

  switch (operacion) {
    case "+":
      addValues(operandoa,operandob);
      break;
    case "-":
      substractValues(operandoa,operandob);
      break;
    case "*":
      multValues(operandoa,operandob);
      break;
    case "/":
      divValues(operandoa,operandob);
      break;
  }

  display.innerText = resultado;
}