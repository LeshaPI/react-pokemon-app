import { useNavigate } from "react-router";
import Button from "../button/Button";
import { IPockemonItem } from "./IPockemonItem";
import { MouseEvent } from 'react';
import "./PockemonItem.scss";

export default function PockemonItem({name}: IPockemonItem  )  {

    const navigate = useNavigate();

    const addToFavoritesHandler = ( event: MouseEvent<HTMLButtonElement>) => {
        console.log('Added to favorites');
        event.stopPropagation();
    }
    
    const addToComprassionHandler = ( event: MouseEvent<HTMLButtonElement>) => {
        console.log('Added to comprassion');
        event.stopPropagation();
    }

 
    const moveToDetailsHandler = () => navigate(`/pokemons/${name}`);
    
    

    return (
        <div className="item" onClick={moveToDetailsHandler}>
            <h3>{ name }</h3>
            <div className="item-buttons">
                <Button handler={ addToFavoritesHandler } > Add to Favorites </Button>
                <Button handler={ addToComprassionHandler }> Add to Comprassion </Button>
            </div>
        </div>
    );
}