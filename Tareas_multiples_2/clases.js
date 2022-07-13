class Persona{

    constructor(nombre,apellido,fecha_nacimiento){
        this.nombre = nombre
        this.apellido = apellido
        this.fecha_nacimiento = fecha_nacimiento
    }

    calcularEdad(){
        return 2022 - this.fecha_nacimiento
    }

    mostrarDatos(){
        console.log("Nombre: " + this.nombre + "\nApellido: " + this.apellido + "\n" + "Edad: " + this.calcularEdad())
    }
}

let persona = new Persona("Pedrito","Perez",2001)

let fechaDeHoy = new Date()
let dia = fechaDeHoy.getDate()
let mes = fechaDeHoy.getMonth() +1
let anio = fechaDeHoy.getFullYear()

let fecha = String(dia + "/" + mes + "/" + anio)

class Cuenta_Bancaria{

    constructor(nombre,apellido,saldo,fechaUltimaExtraccion,fechaUltimoDeposito,fecha){
        this.nombre = nombre
        this.apellido = apellido
        this.saldo = saldo
        this.fechaUltimaExtraccion = fechaUltimaExtraccion
        this.fechaUltimoDeposito = fechaUltimoDeposito
        this.fecha = fecha
    }

    verDatos(){
        console.log("Nombre: " + this.nombre)
        console.log("Apellido: " + this.apellido)
        console.log("Fecha de ultima extraccion: " + this.fechaUltimaExtraccion)
        console.log("Fecha de ultimo deposito: " + this.fechaUltimoDeposito)
        return console.log("Fecha de hoy: " + this.fecha)
    }

    mostrarSaldo(){
        return console.log("Saldo actual: " + this.saldo)
    }

    realizarDeposito(montoDepositar){
        this.saldo = this.saldo + montoDepositar
        this.fechaUltimoDeposito = this.fecha
        return console.log("Deposito realizado con exito.")
    }

    realizarExtraccion(montoExtraer){
        this.saldo = this.saldo - montoExtraer
        this.fechaUltimaExtraccion = this.fecha
        return console.log("Extraccion realizada con exito.")
    }
}

let cuentaBanco = new Cuenta_Bancaria("Facundo","Maggi",1000,"1/5/2022","2/5/2022",fecha)