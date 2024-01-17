
const urlApiGeneral = "https://rickandmortyapi.com/api/character"
export async function getProfiles (){
    return fetch(urlApiGeneral)
        .then((response)=> response.json())
        
}