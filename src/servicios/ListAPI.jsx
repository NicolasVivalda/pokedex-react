const API_URL = "https://pokeapi.co/api/v2/pokemon";

export async function getAllPokemonList() {
    try {
        const response = await fetch(`${API_URL}?limit=100000&offset=0`);
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.error(error);
    }
};

export async function getPokemonByName(name) {
    try {
        const response = await fetch(`${API_URL}/${name}`);
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error);
    }
};
