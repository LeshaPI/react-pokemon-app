import { IMockList } from "../../App"
import Pagination from "../pagination/Pagination"
import PockemonItem from "../pockemonItem/PockemonItem"

export default function FavoriteItems( favoritItems: IMockList ) {

    const itemList = favoritItems.mock.map(( pockemon ) => <PockemonItem key={pockemon.id} name={pockemon.name} id={pockemon.id}/>)
    
        return(
            <>
              <div className="items">
                { itemList }
              </div>
              <Pagination/>
            </>        
        )
}