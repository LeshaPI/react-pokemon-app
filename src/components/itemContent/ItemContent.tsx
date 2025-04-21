import { IMock } from "../../App";
import { addToComprassionHandler, addToFavoritesHandler } from "../../services/handlers";
import Button from "../button/Button";
import "./ItemContent.scss";

export default function ItemContent( {name, height, weight, image, stats}: IMock) {


    return(
        <div className="content">
            <div className="content-card">
                <img className="content-card-image" src={image} alt="img not found" />
                <div className="content-card-info">
                    <h3 className="content-card-info__name" >{name}</h3>
                    <p className="content-card-info__size">Height:{height}</p>
                    <p className="content-card-info__size">weight:{weight}</p>
                    <ul className="content-card-info__stats">
                        {stats.map((power, index) => 
                            <li key={index} className="content-card-info__stat">{power.name}:{power.value}</li>
                        )}
                    </ul>
                    <div className="content-card-info__buttons">
                      <Button handler={ addToFavoritesHandler } > Add to Favorites </Button>
                      <Button handler={ addToComprassionHandler }> Add to Comprassion </Button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}