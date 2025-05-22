import { useNavigate } from "react-router";
import Button from "../button/Button";
import { MouseEvent } from 'react';
import "./PockemonItem.scss";
import { useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../store/pokemons/favoritePokemonSlice";
import { IPokemonDecscription } from "../../store/pokemons/IPokemons";
import { RootState } from "../../store/store";
import { useStatusDispatcher } from "../../hooks/useStatusDispatcher";

export default function PockemonItem(pokemon: IPokemonDecscription )  {

    const navigate = useNavigate();
    const isAddedToFavorite = useSelector((elem:RootState) => 
        elem.favorites.pokemons.some(p => p.name === pokemon.name)
    )

    const addToFavoritesHook = useStatusDispatcher({
        pokemon: pokemon!,
        isAdded: isAddedToFavorite,
        actionToAdd: addToFavorites,
        actionToRemove: removeFromFavorites,
    });

    const addToFavoritesHandler = ( event: MouseEvent<HTMLButtonElement>) => {
        addToFavoritesHook();
        event.stopPropagation();
    }
    
    const addToComprassionHandler = ( event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
    }

 
    const moveToDetailsHandler = () => navigate(`/pokemons/${pokemon.name}`);
    
    return (
        <div className="item" onClick={moveToDetailsHandler}>
            <h3>{ pokemon.name }</h3>
            <div className="item-buttons">
                <Button handler={ addToFavoritesHandler } >{ isAddedToFavorite ? "Remove from Favorites": 'Add to Favorites' } </Button>
                <Button handler={ addToComprassionHandler }> Add to Comprassion </Button>
            </div>
        </div>
    );
}