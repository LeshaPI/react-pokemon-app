import { configureStore } from "@reduxjs/toolkit";
import pockemonReducer from "./pokemons/pokemonSlice";

export const store = configureStore({
    reducer: {
        pokemons: pockemonReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
