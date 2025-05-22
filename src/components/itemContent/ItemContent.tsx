import Button from "../button/Button";
import "./ItemContent.scss";
import { useParams } from "react-router";
import { IPokemon } from "../../types";
import { useResponseStatus } from "../../hooks/useResponceStatus";
import Loader from "../loader/Loader";
import Error from "../error/Error";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../store/pokemons/favoritePokemonSlice";
import { RootState } from "../../store/store";
import { useStatusDispatcher } from "../../hooks/useStatusDispatcher";
import { addToCompresion, removeFromCompresion } from "../../store/pokemons/compressionPokemonSlice";
import useModal from "../../hooks/useModal";
import Modal from "../modal/Modal";

export default function ItemContent( ) {

    const { name } = useParams(); 
    const dispatch = useDispatch()
    const pokemon = useSelector((state: RootState)  => 
        state.pokemons.currentPokemonList.results.find((pokemon) => pokemon.name === name)
    );

    const isAddedToFavorite = useSelector((elem:RootState) => 
        elem.favorites.pokemons.some(p => p.name === name)
    )

    const addToFavoritesHandler = useStatusDispatcher({
        pokemon: pokemon!,
        isAdded: isAddedToFavorite,
        actionToAdd: addToFavorites,
        actionToRemove: removeFromFavorites,
    });

    const { isOpen, content, openModal, closeModal } = useModal<string>()

    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const {data, loading, error} = useResponseStatus<IPokemon>({ url });

  
    const isAddedToCompression = useSelector((elem:RootState) => elem.compression.pokemonsToCompare.some((elem) => elem.name === name));
    const compressionSize = useSelector((elem: RootState) => elem.compression.pokemonsToCompare.length >= 2);


    
    const addToComprassionHandler = () => {
        if (!isAddedToCompression) {
            dispatch(addToCompresion({...data!, isAdded: true}));
        } else {
            dispatch(removeFromCompresion(data!.name))
        }

        if(!isAddedToCompression && compressionSize) {
            openModal('Можно сравнить только два покемона');
        } 
    }

    if (loading) {
        return <Loader/>
    };

    if (error) {
        return <Error error={error}/>
    }

    return(
        <div className="content">
            {isOpen && (<Modal closeModal={closeModal} isOpen={isOpen}>{ content }</Modal>)}
            <div className="content-card">
                <img className="content-card-image" src={data?.sprites.front_default} alt="img not found" />
                <div className="content-card-info">
                    <h3 className="content-card-info__name" >{data?.name}</h3>
                    <p className="content-card-info__size">Height:{data?.height}</p>
                    <p className="content-card-info__size">weight:{data?.weight}</p>
                    <ul className="content-card-info__stats"> 
                        {data?.abilities.map((abil, id) => <li key={id}>{abil.ability.name}</li>)}
                    </ul>
                    <div className="content-card-info__buttons">
                      <Button handler={ addToFavoritesHandler } > { isAddedToFavorite ? "Remove from Favorites": 'Add to Favorites' } </Button>
                      <Button handler={ addToComprassionHandler }> {isAddedToCompression ? "Remove from Compression": 'Add to Compression'} </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
