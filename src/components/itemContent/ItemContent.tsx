import Button from "../button/Button";
import "./ItemContent.scss";
import { useParams } from "react-router";
import { IPokemon } from "../../types";
import { useResponseStatus } from "../../hooks/useResponceStatus";
import Loader from "../loader/Loader";
import Error from "../error/Error";
import { useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../store/pokemons/favoritePokemonSlice";
import { RootState } from "../../store/store";
import { useStatusDispatcher } from "../../hooks/useStatusDispatcher";

export default function ItemContent( ) {

    const { name } = useParams(); 
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

    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const {data, loading, error} = useResponseStatus<IPokemon>({ url });

  
    
    const addToComprassionHandler = () => {
        console.log('Added to comprassion');
    }

    if (loading) {
        return <Loader/>
    };

    if (error) {
        return <Error error={error}/>
    }


    return(
        <div className="content">
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
                      <Button handler={ addToComprassionHandler }> Add to Comprassion </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
