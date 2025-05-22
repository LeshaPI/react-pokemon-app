import { configureStore } from "@reduxjs/toolkit";
import pockemonReducer from "./pokemons/pokemonSlice";
import favoritePokemonsReducer from "./pokemons/favoritePokemonSlice";

export const store = configureStore({
    reducer: {
        pokemons: pockemonReducer,
        favorites: favoritePokemonsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
