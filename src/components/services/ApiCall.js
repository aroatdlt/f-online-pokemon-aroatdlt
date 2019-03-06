const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";

const createPromise = () => {
    for(let i = 1; i < 26; i++) {
        console.log(ENDPOINT + i);
        
    }
}

export { createPromise };