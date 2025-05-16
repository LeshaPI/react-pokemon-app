export const getURL = (pageLimit: number) => {
    return `https://pokeapi.co/api/v2/pokemon?limit=${pageLimit}`
};

export const getPockemons = async (URL: string ) => {
    const responce = await fetch(URL);
    return await responce.json();
};
