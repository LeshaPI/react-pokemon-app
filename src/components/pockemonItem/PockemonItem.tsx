import { useNavigate } from "react-router";
import Button from "../button/Button";
import { MouseEvent } from 'react';
import "./PockemonItem.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../store/pokemons/favoritePokemonSlice";
import { IPokemonDecscription } from "../../store/pokemons/IPokemons";
import { AppDispatch, RootState } from "../../store/store";
import { useStatusDispatcher } from "../../hooks/useStatusDispatcher";
import { getPokemonAsync, removeFromCompresion } from "../../store/pokemons/compressionPokemonSlice";
import useModal from "../../hooks/useModal";
import Modal from "../modal/Modal";

export default function PockemonItem(pokemon: IPokemonDecscription )  {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const isAddedToFavorite = useSelector((elem:RootState) => 
        elem.favorites.pokemons.some(p => p.name === pokemon.name)
    );

    const { isOpen, content, openModal, closeModal } = useModal<string>()


    const isAddedToCompression = useSelector((elem:RootState) => elem.compression.pokemonsToCompare.some((elem) => elem.name === pokemon.name));
    const compressionSize = useSelector((elem: RootState) => elem.compression.pokemonsToCompare.length >= 2);


    const addToFavoritesHook = useStatusDispatcher({
        pokemon: pokemon!,
        isAdded: isAddedToFavorite,
        actionToAdd: addToFavorites,
        actionToRemove: removeFromFavorites,
    });

    const addToFavoritesHandler = ( event: MouseEvent<HTMLButtonElement>) => {
        addToFavoritesHook();
        event.stopPropagation();
    };
    
    const addToComprassionHandler = ( event: MouseEvent<HTMLButtonElement>) => {

        if (!isAddedToCompression) {
            dispatch(getPokemonAsync(pokemon.url));
        } else {
            dispatch(removeFromCompresion(pokemon.name));
        }

        if(!isAddedToCompression && compressionSize) {
            openModal('Можно сравнить только два покемона');
        } 

        
        event.stopPropagation();
    };

    const moveToDetailsHandler = () => navigate(`/pokemons/${pokemon.name}`);
    
    return (
        <div className="item" onClick={moveToDetailsHandler}>
            {isOpen && (<Modal closeModal={closeModal} isOpen={isOpen}>{ content }</Modal>)}
            <h3>{ pokemon.name }</h3>
            <div className="item-buttons">
                <Button handler={ addToFavoritesHandler } >{ isAddedToFavorite ? "Remove from Favorites": 'Add to Favorites' } </Button>
                <Button handler={ addToComprassionHandler }> { isAddedToCompression ? "Remove from Compression": 'Add to Compression' } </Button>
            </div>
        </div>
    );
}
