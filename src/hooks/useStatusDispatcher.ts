import { useDispatch } from "react-redux";
import { PayloadAction } from "@reduxjs/toolkit";
import { IPokemonDecscription, TExtendedDescription } from "../store/pokemons/IPokemons";

interface IUseStatus {
    pokemon: IPokemonDecscription,
    isAdded: boolean,
    actionToAdd: (payload: TExtendedDescription) => PayloadAction<TExtendedDescription>;
    actionToRemove: (payload: TExtendedDescription) => PayloadAction<TExtendedDescription>;
};

export function useStatusDispatcher({ pokemon, isAdded, actionToAdd, actionToRemove }: IUseStatus): () => void {

    const dispatch = useDispatch()

    return () => {
        if(!pokemon) return; 

        if(!isAdded) {
            dispatch(actionToAdd({...pokemon, isAdded}));
            return;
        };   
        dispatch(actionToRemove({...pokemon, isAdded}));
    
    };
}