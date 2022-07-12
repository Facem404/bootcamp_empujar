let persona = {
    nombre : "Pepe",
    apellido : "Perez",
    fecha_nac : 2001,
    edad : function(){
        return 2022 - this.fecha_nac
    },
    MostrarDatos: function(){
        console.log("Nombre: " + this.nombre + " " + this.apellido + " " + "Edad: " + this.edad())
    }
}

let cuenta_bancaria = {

    nombre:"Pedro",
    apellido:"Perez",
    saldo:1000,
    fechaUltimaExtraccion:"24/3",
    fechaUltimoDeposito:"25/5",
    verDatos: function(){
        console.log("Nombre: "+ this.nombre +" "+ this.apellido + "\nFecha ultima extraccion: "+this.fechaUltimaExtraccion+"\nFecha ultimo deposito: "+this.fechaUltimoDeposito)
    },
    mostrarSaldo: function(){
        console.log("Saldo: " + this.saldo)
    }, 
    realizarDeposito:function(monto,fecha_hoy){
        this.saldo = this.saldo + monto
    },
    realizarExtraccion:function(monto,fecha_hoy){
        this.saldo = this.saldo - monto
    },
}
