import { Routes, Route } from "react-router";
import ItemsContainer from "../itemsContainer/ItemsContainer";
import FavoriteItems from "../favoriteItems/FavoriteItems";
import ItemsToCompare from "../itemsToCompare/ItemsToCompare";
import ItemContent from "../itemContent/ItemContent";



export default function Router() {

    return (
        <Routes>
            <Route path="/" element={<ItemsContainer/>}/>
            <Route path="/favorites" element={<FavoriteItems/>}/>
            <Route path="/comprasion" element={<ItemsToCompare/>}/>
            <Route path='/pokemons/:name' element={<ItemContent/>}/>
        </Routes>
    );
}