import { addToComprassionHandler, addToFavoritesHandler } from "../../services/handlers";
import Button from "../button/Button";
import { IPockemonItem } from "./IPockemonItem";
import "./PockemonItem.scss";

export default function PockemonItem({name, id}: IPockemonItem  )  {
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