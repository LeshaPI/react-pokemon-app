import Button from "../button/Button";
import "./Pagination.scss"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { getPokemonsAsync } from "../../store/pokemons/pokemonSlice";

export default function Pagination() {

    const pockemons = useSelector((state: RootState) => state.pokemons.currentPokemonList);
    const currentPage = useSelector((state: RootState) => state.pokemons.currentPage);
    const dispatch =  useDispatch<AppDispatch>();

    const prevPageHandler = () => {
        if(currentPage >= 0 && pockemons.previous) {
            dispatch(getPokemonsAsync(pockemons.previous));
        };
    }

    const nextPageHandler = () => {
        if(currentPage <= pockemons.count && pockemons.next){
           dispatch(getPokemonsAsync(pockemons.next));
        }
    }

    return(
        <div className="pagination">
            <div className="pagination-content">
                <Button handler={ prevPageHandler } > ← </Button>
                <p className="pagination-current"> { currentPage } </p>
                <Button handler={ nextPageHandler }> → </Button>
            </div>
        </div>
        
    )
}