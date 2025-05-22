import { useSelector } from "react-redux";
import Pagination from "../pagination/Pagination"
import PockemonItem from "../pockemonItem/PockemonItem"
import { RootState } from "../../store/store";

export default function FavoriteItems( ) {

  const pockemons = useSelector((state: RootState) => state.favorites.pokemons);

  const itemList = pockemons.map(( pockemon, index ) => 
    <PockemonItem key={index} name={pockemon.name} url={pockemon.url}/>
  );

  return(
    <>
      <div className="items">
        { itemList }
      </div>
      <Pagination/>
    </>        
  )
}