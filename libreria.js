import { getByCaracter } from './api.js'
let opcion = document.getElementById('caracter')
let solicitud = document.getElementById('peticion')

const resultado = document.getElementById('resultados')
for (let i = 0; i < 671; i++) {
    
}

opcion.addEventListener('focus', getName)
function getName() {
    for (let i = 0; i < 200; i++) {
        getByCaracter(i+1)
            .then(resHTTP => resHTTP.json())
            .then(resJSON => {
                let nombre = resJSON.name
                opcion.innerHTML += [`<option value="${i + 1}">${(nombre)}</option>`]
            })

    }

}

solicitud.addEventListener('click', realizarPeticion)

function realizarPeticion() {
    console.log(opcion.value)
    getByCaracter(opcion.value)
        .then(resHTTP => resHTTP.json())
        .then(resJSON => {
            let personaje = resJSON
            console.log(resJSON)
            let nombre = personaje.name
            let genero = personaje.gender
            let especie = personaje.species
            let imagen = personaje.image
            let locacion = personaje.location.name
            let origen = personaje.origin.name


            resultado.innerHTML += `<tr>
                <td><img src=${imagen} width="100" height="100"></td>
                <td>${nombre}</td>
                <td>${genero}</td>
                <td>${especie}</td>
                <td>${locacion}</td>
                <td>${origen}</td>
                
        </tr>`
        })

}



/*let personaje = resJSON.result  console.log(resJSON.name)
            for (let i = 0; i < personaje.length; i++) {
                let nombre = personaje[i].name
                let genero = personaje[i].gender
                let especie = personaje[i].species
                resultado.innerHTML += `<tr>
                <td>${nombre}</td>
                <td>${genero}</td>
                <td>${especie}</td>
        </tr>`*/