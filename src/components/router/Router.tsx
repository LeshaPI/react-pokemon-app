import { Routes, Route } from "react-router";
import ItemsContainer from "../itemsContainer/ItemsContainer";
import FavoriteItems from "../favoriteItems/FavoriteItems";
import { IMockList } from "../../App";
import ItemsToCompare from "../itemsToCompare/ItemsToCompare";


export default function Router( mockList : IMockList) {
    return (
        <Routes>
            <Route path="/" element={<ItemsContainer mock = {mockList.mock}/>}/>
            <Route path="/favorites" element={<FavoriteItems mock = {mockList.mock}/>}/>
            <Route path="/comprasion" element={<ItemsToCompare firstPockemon={mockList.mock[0]} secondPockemon={mockList.mock[1]} />}/>
        </Routes>
    );
}