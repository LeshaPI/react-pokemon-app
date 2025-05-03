import Button from "../button/Button";
import { IItemsToCompare } from "./IItemsToCompare";
import './ItemsToCompare.scss';

export default function ItemsToCompare( {firstPockemon, secondPockemon}: IItemsToCompare ) {
    
    const removeRowHandler = () => {
        console.log('Removed')
    } 

    return (
        <div className="compare">
           <table className="compare-table">
            <thead>
                <tr>
                    <td className="compare-table-сell">
                        Name:
                    </td>
                    <td className="compare-table-сell">
                        {firstPockemon.name}
                    </td>
                    <td className="compare-table-сell">
                        {secondPockemon.name}
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="compare-table-сell">
                        Height:
                    </td>
                    <td className="compare-table-сell">
                        {firstPockemon.height}
                        <Button handler={removeRowHandler}> Remove </Button>
                    </td>
                    <td className="compare-table-сell">
                        {secondPockemon.height}
                        <Button handler={removeRowHandler}> Remove </Button>
                    </td>
                </tr>
                <tr>
                    <td className="compare-table-сell">
                        Weight:
                    </td>
                    <td className="compare-table-сell">
                        {firstPockemon.weight}
                        <Button handler={removeRowHandler}> Remove </Button>
                    </td>
                    <td className="compare-table-сell">
                        {secondPockemon.weight}
                        <Button handler={removeRowHandler}> Remove </Button>
                    </td>
                </tr>
            </tbody>
            </table> 
        </div>
    )
}