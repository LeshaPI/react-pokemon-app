import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPokemonResp } from "./IPokemons";
import { getCurrentPage } from "../../services";
import { getPockemons } from "../../components/API/API";

const initialState:IPokemonResp = {
    currentPokemonList: {
        count: 0,
        next: null,
        previous: null,
        results: [],
    },
    currentPage: 0,
    pageLimit: 20,
    isloading: false,
    error: '',
};

const pokemonSlice = createSlice({
    name: "pokemons",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPokemonsAsync.fulfilled, (state, action) => {
            state.currentPokemonList = action.payload;
            state.currentPage = getCurrentPage(
                action.payload.next,
                action.payload.previous,
                state.pageLimit,
            );
            state.isloading = false;
        });
        builder.addCase(getPokemonsAsync.pending,(state) => {
            state.isloading = true;
        });
        builder.addCase(getPokemonsAsync.rejected, (state) => {
            state.isloading = false;
            state.error = 'error';
        });
    }
});

export const getPokemonsAsync = createAsyncThunk(
    "pokemons/getDataAsync",
    getPockemons,
)

export default pokemonSlice.reducer;