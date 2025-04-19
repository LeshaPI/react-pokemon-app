import Pagination from "../pagination/Pagination";
import PockemonItem from "../pockemonItem/PockemonItem";
import { IItemsContainer } from "./IItemsContainer";
import "./ItemContainer.scss";

export default function ItemsContainer( { mockList }: IItemsContainer ) {

    const itemList = mockList.map(( pockemon ) => <PockemonItem key={pockemon.id} name={pockemon.name} id={pockemon.id}/>)

    return(
        <>
          <div className="items">
            { itemList }
          </div>
          <Pagination/>
        </>
          
    )
}