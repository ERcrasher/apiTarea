import { getByCaracter } from './api.js'
let opcion = document.getElementById('caracter')
let solicitud = document.getElementById('peticion')

const resultado = document.getElementById('resultados')

solicitud.addEventListener('click', realizarPeticion)

function realizarPeticion() {
    console.log(opcion.value)
    getByCaracter(opcion.value)
        .then(resHTTP => resHTTP.json())
        .then(resJSON => console.log(resJSON))

}