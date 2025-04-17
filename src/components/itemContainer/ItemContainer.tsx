import Pagination from "../pagination/Pagination";
import PockemonItem from "../pockemonItem/PockemonItem";
import { IItemContainer } from "./IItemContainer";
import "./ItemContainer.scss";

export default function ItemContainer( { mockList }: IItemContainer ) {

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