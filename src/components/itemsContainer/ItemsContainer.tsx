import { IMockList } from "../../App";
import Pagination from "../pagination/Pagination";
import PockemonItem from "../pockemonItem/PockemonItem";
import "./ItemsContainer.scss";

export default function ItemsContainer( mockList: IMockList ) {

    const itemList = mockList.mock.map(( pockemon ) => <PockemonItem key={pockemon.id} name={pockemon.name} id={pockemon.id}/>)

    return(
        <>
          <div className="items">
            { itemList }
          </div>
          <Pagination/>
        </>  
    )
}