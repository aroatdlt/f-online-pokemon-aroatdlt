const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";

const createPromise = () => {
    let dataRawAllPokemon = [];
    for(let i = 1; i < 26; i++) {
        const dataRawOnePokemon = {
            name: "",
            id: "",
            image: "",
            types: []
        }
        fetch(ENDPOINT + i)
        .then(response => response.json())
        .then(data => {
            dataRawOnePokemon.name = data.name;
            dataRawOnePokemon.id = data.id;
            dataRawOnePokemon.types = data.types;
            dataRawOnePokemon.image = data.sprites.front_default;
        })
        dataRawAllPokemon.push(dataRawOnePokemon);
    }
    return dataRawAllPokemon;
}

export { createPromise };