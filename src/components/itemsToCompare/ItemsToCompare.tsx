import { useDispatch, useSelector } from "react-redux";
import Button from "../button/Button";
import './ItemsToCompare.scss';
import { RootState } from "../../store/store";
import { removeFromCompresion } from "../../store/pokemons/compressionPokemonSlice";

export default function ItemsToCompare(  ) {

    const pokemonToCompare = useSelector((pokemon: RootState) => pokemon.compression.pokemonsToCompare);


    const dispatch = useDispatch();

    const firstPokemon = pokemonToCompare[0];
    const secondPokemon = pokemonToCompare[1];

  
    const removeHandler = (pokemonName: string) => () => {
        if (!pokemonName || pokemonToCompare.length === 0) return;

        if (pokemonToCompare[0].name === pokemonName) {
            dispatch(removeFromCompresion(pokemonName));
        } else {
            dispatch(removeFromCompresion(pokemonToCompare[0].name));
        }

    };
    
    

    return (
        <div className="compare">
           <table className="compare-table">    
            <thead>
                <tr>
                    <td className="compare-table-сell">
                        Name:
                    </td>
                    <td className="compare-table-сell">
                        {firstPokemon ? firstPokemon.name : ' '}
                    </td>
                    <td className="compare-table-сell">
                        {secondPokemon ? secondPokemon.name : ' '}
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="compare-table-сell">
                        Height:
                    </td>
                    <td className="compare-table-сell">
                        {firstPokemon ? firstPokemon.height : ' '}
                    </td>
                    <td className="compare-table-сell">
                        {secondPokemon ? secondPokemon.height : ' '}
                    </td>
                </tr>
                <tr>
                    <td className="compare-table-сell">
                        Weight:
                    </td>
                    <td className="compare-table-сell">
                        {firstPokemon ?  firstPokemon.weight : ' ' }
                    </td>
                    <td className="compare-table-сell">
                        {secondPokemon ? secondPokemon.height : ' '}
                    </td>
                </tr>
            </tbody>
            </table> 
            <div className="compare-buttons">
                <Button handler={removeHandler(firstPokemon ? firstPokemon.name : '')}> { 'remove first pokemon' }</Button>
                <Button handler={removeHandler(secondPokemon ? secondPokemon.name : '')}> { 'remove second pokemon' }</Button>
            </div>
        </div>
    )
}
