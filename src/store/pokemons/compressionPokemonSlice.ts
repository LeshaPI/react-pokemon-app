import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPockemons } from "../../API/API";
import { TExtendedPokemon } from "./IPokemons";

interface ICompression{
    pokemonsToCompare: TExtendedPokemon[];
}

const initialState: ICompression = {
    pokemonsToCompare: [],
};

const compressionPokemonSlice = createSlice({
    name: "compresion",
    initialState,
    reducers: {
        addToCompresion(state, action: PayloadAction<TExtendedPokemon>) {

            if(state.pokemonsToCompare.length >= 2) return;
            
            const isUsed = state.pokemonsToCompare.some((pokemon) => pokemon.name === action.payload.name);


            if(isUsed) return;

            state.pokemonsToCompare.push(action.payload);

        },
        removeFromCompresion(state, action: PayloadAction<string>) {
            state.pokemonsToCompare = state.pokemonsToCompare.filter(
               (pokemon) => pokemon.name !== action.payload
            );
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPokemonAsync.fulfilled, (state, action: PayloadAction<TExtendedPokemon>) => {

            if(state.pokemonsToCompare.length >= 2) return;

            state.pokemonsToCompare.push({...action.payload, isAdded: true});
        })
    }
});

export const getPokemonAsync = createAsyncThunk(
    "compression/getPokemonAsync",
    getPockemons
)

export const { removeFromCompresion, addToCompresion } = compressionPokemonSlice.actions;
export default compressionPokemonSlice.reducer;
