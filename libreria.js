import { getByCaracter } from './api.js'
let opcion = document.getElementById('caracter')
let solicitud = document.getElementById('peticion')

const resultado = document.getElementById('resultados')

solicitud.addEventListener('click', realizarPeticion)

function realizarPeticion() {
    console.log(opcion.value)
    getByCaracter(opcion.value)
        .then(resHTTP => resHTTP.json())
        .then(resJSON => /*let personaje = resJSON.result
            for (let i = 0; i < personaje.length; i++) {
                let nombre = personaje[i].name
                let genero = personaje[i].gender
                let especie = personaje[i].species
                resultado.innerHTML += `<tr>
                <td>${nombre}</td>
                <td>${genero}</td>
                <td>${especie}</td>
        </tr>`*/console.log(resJSON))

}