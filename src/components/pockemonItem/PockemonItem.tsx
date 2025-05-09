import Button from "../button/Button";
import { IPockemonItem } from "./IPockemonItem";
import "./PockemonItem.scss";

export default function PockemonItem({name, id}: IPockemonItem  )  {

    const addToFavoritesHandler = () => {
        console.log('Added to favorites');
    }
    
    const addToComprassionHandler = () => {
        console.log('Added to comprassion');
    }
    
    return (
        <div className="item">
            <h3>{ name }</h3>
            <p>{ id }</p>
            <div className="item-buttons">
                <Button handler={ addToFavoritesHandler } > Add to Favorites </Button>
                <Button handler={ addToComprassionHandler }> Add to Comprassion </Button>
            </div>
        </div>
    );
}