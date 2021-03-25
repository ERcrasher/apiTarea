export function getByCaracter(caracter){
    return fetch(`https://rickandmortyapi.com/api/character/${caracter}`)
}