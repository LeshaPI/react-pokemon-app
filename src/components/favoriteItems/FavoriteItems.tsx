import { IMockList } from "../../App"
import Pagination from "../pagination/Pagination"
import PockemonItem from "../pockemonItem/PockemonItem"

export default function FavoriteItems( favoritItems: IMockList ) {

    const itemList = favoritItems.mock.map(( pockemon, index ) => <PockemonItem key={index} name={pockemon.name}/>)
    
        return(
            <>
              <div className="items">
                { itemList }
              </div>
              <Pagination/>
            </>        
        )
}