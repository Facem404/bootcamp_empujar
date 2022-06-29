//Realiza las funciones que soliciten al usuario valores numéricos y muestre por pantalla 
//solo la suma de los valores mayores que el numero 10.

let valor_uno = Number(prompt("Ingrese un numero: "))
let valor_dos = Number(prompt("Ingrese otro numero: "))

function suma_mayores_10(input_uno,input_dos) {
    
    if (input_uno + input_dos > 10) {
        return input_uno + input_dos;
    }else{
        return "La suma es menor a 10!!"
    }
}

alert(suma_mayores_10(valor_uno,valor_dos))

//Realiza el código con las funciones que permitan al usuario ingresar una lista de compras (elemento por elemento) 
//hasta que ingrese la palabra "fin", cada uno de los elementos de a lista de compra se deben almacenar en un array. 
//Un elemento puede contener varias palabras, ej: "leche descremada", "chocolate blanco", etc.

function array_compras() {

    let input_array = ""
    let array = []

    while (input_array != "fin") {
        input_array = prompt("Ingrese productos de lista de compras: ")
        array.push(input_array)
    }

    return array
}

let para_mostrar = array_compras()

para_mostrar.forEach(element => {
    console.log(element)
});

//Desafío: como harías para mostrar el contenido del array del ejercicio anterior eliminando los espacios 
//en blanco y colocando todas las palabras en mayúsculas.

