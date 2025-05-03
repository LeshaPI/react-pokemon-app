import { IMock } from "../../App"
import Pagination from "../pagination/Pagination"
import PockemonItem from "../pockemonItem/PockemonItem"

export default function FavoriteItems( favoritItems: IMock[]) {

    const itemList = favoritItems.map(( pockemon ) => <PockemonItem key={pockemon.id} name={pockemon.name} id={pockemon.id}/>)
    
        return(
            <>
              <div className="items">
                { itemList }
              </div>
              <Pagination/>
            </>        
        )
}