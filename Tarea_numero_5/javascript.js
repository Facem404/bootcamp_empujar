let p1 = document.getElementById("p1")
let enlace1 = document.getElementById("enlace1")
let img1 = document.getElementById("img1")
let p2 = document.getElementById("p2")
let enlace2 = document.getElementById("enlace2")
let img2 = document.getElementById("img2")
let p3 = document.getElementById("p3")
let enlace3 = document.getElementById("enlace3")
let img3 = document.getElementById("img3")
let p4 = document.getElementById("p4")
let enlace4 = document.getElementById("enlace4")
let img4 = document.getElementById("img4")

const ocultarParrafo = () => {
    p1.style.display = "none";
}

const ocultarParrafo2 = () => {
    p4.style.display = "none";
}

const animacionImagen = () => {
    img2.style.transform = "rotate(180deg)"
}

enlace1.addEventListener("click", ocultarParrafo, false)
enlace2.addEventListener("click", animacionImagen, false)
enlace4.addEventListener("click", ocultarParrafo2,false)