import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TExtendedDescription } from "./IPokemons";

interface IInitialState {
    pokemons: TExtendedDescription[];
}

const initialState: IInitialState = {
    pokemons: [],
};

const favoritePokemonSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addToFavorites( state, action: PayloadAction<TExtendedDescription> ) {
            if ( 
              state.pokemons.some(pokemon => pokemon.name === action.payload.name)
            ) return;

            state.pokemons.push(action.payload);

        },
        removeFromFavorites( state, action: PayloadAction<TExtendedDescription> ) {
            state.pokemons = state.pokemons.filter(pokemon => pokemon.name !== action.payload.name);
        },
    },
})

export const { addToFavorites, removeFromFavorites } = favoritePokemonSlice.actions;
export default favoritePokemonSlice.reducer;
