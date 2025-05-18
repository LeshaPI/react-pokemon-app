import { useDispatch, useSelector } from "react-redux";
import Pagination from "../pagination/Pagination";
import PockemonItem from "../pockemonItem/PockemonItem";
import "./ItemsContainer.scss";
import { AppDispatch, RootState } from "../../store/store";
import { getPokemonsAsync } from "../../store/pokemons/pokemonSlice";
import { useEffect } from "react";
import { getURL } from "../../API/API";
import Loader from "../loader/Loader";
import Error from "../error/Error";

export default function ItemsContainer() {

  const pockemons = useSelector((state: RootState) => state.pokemons.currentPokemonList.results);
  const pageLimit = useSelector((state: RootState) => state.pokemons.pageLimit);
  const isLoading = useSelector((state:RootState) => state.pokemons.isloading);
  const error = useSelector((state:RootState) => state.pokemons.error);
  const dispatch =  useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getPokemonsAsync(getURL(pageLimit)));
  }, [dispatch, pageLimit]);

  const itemList = pockemons.map(( pockemon, index ) => 
    <PockemonItem key={index} name={pockemon.name} url={pockemon.url}/>
  );

  if(isLoading) {
    return <Loader/>;
  }

  if(error) {
    return <Error error={error}/>
  }
  
  return <>
    <div className="items"> 
      {itemList} 
    </div>;
    <Pagination/>
  </> 
};
