import { useDispatch, useSelector } from "react-redux";
import Pagination from "../pagination/Pagination";
import PockemonItem from "../pockemonItem/PockemonItem";
import "./ItemsContainer.scss";
import { RootState } from "../../store/store";
import { getPokemonsAsync } from "../../store/pokemons/pokemonSlice";
import { useEffect } from "react";
import { getURL } from "../API/API";

export default function ItemsContainer() {

  const pockemons = useSelector((state: RootState) => state.pokemons.currentPokemonList.results);
  const pageLimit = useSelector((state: RootState) => state.pokemons.pageLimit);
  const isLoading = useSelector((state:RootState) => state.pokemons.isloading);
  const error = useSelector((state:RootState) => state.pokemons.error);
  const dispatch =  useDispatch();

  useEffect(() => {
    dispatch(getPokemonsAsync(getURL(pageLimit)));
  }, [dispatch, pageLimit]);

  const itemList = pockemons.map(( pockemon ) => 
    <PockemonItem key={pockemon.id} name={pockemon.name} id={pockemon.id}/>
  );

  if(isLoading) {
    return <div className="loader">Loading...</div>;
  }

  if(error) {
    return <div className="error">{ error }</div>;
  }
  
  return <>
    <div className="items"> 
      {itemList} 
    </div>;
    <Pagination/>
  </> 
};
