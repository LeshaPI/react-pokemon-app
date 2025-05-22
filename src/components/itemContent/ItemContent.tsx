import Button from "../button/Button";
import "./ItemContent.scss";
import { useParams } from "react-router";
import { IPokemon } from "../../types";
import { useResponseStatus } from "../../hooks/useResponceStatus";
import Loader from "../loader/Loader";
import Error from "../error/Error";

export default function ItemContent( ) {

    const { name } = useParams();
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const {data, loading, error} = useResponseStatus<IPokemon>({ url });

    const addToFavoritesHandler = () => {
        console.log('Added to favorites');
    }
    
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
                    <ul className="content-card-info__stats"> </ul>
                    <div className="content-card-info__buttons">
                      <Button handler={ addToFavoritesHandler } > Add to Favorites </Button>
                      <Button handler={ addToComprassionHandler }> Add to Comprassion </Button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}