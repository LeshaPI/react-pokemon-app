import { useState } from "react";
import Button from "../button/Button";
import "./Pagination.scss"

export default function Pagination() {

    const [page, setPage] = useState(1)

    const prevPageHandler = () => {
        setPage(1);
        console.log(page);
    }

    const nextPageHandler = () => {
        setPage(1);
        console.log(page);
    }

    return(
        <div className="pagination">
            <div className="pagination-content">
                <Button handler={ prevPageHandler } > ← </Button>
                <p className="pagination-current"> { page } </p>
                <Button handler={ nextPageHandler }> → </Button>
            </div>
        </div>
        
    )
}