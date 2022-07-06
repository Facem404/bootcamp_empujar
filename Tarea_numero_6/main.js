const imgArray=[
    "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg"
]

let img = document.getElementById("slide")
let boton = document.getElementById("boton")
let i = 0
boton.addEventListener("click",slideMostrar,false)

function slideMostrar(){
    img.src = imgArray[i]
    i++
    if(i===4){
        i = 0
    }
}