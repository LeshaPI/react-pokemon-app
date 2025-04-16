import Pagination from "../pagination/Pagination";
import PockemonItem from "../pockemonItem/PockemonItem";
import "./ItemContainer.scss";

type mock = { 
    name: string, 
    id: number
}

export default function ItemContainer( { mockList }: {mockList: Array<mock>} ) {

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