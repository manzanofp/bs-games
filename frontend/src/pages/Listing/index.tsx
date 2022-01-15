import axios from "axios";
import GameCard from "components/GameCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { GamePage } from "types/game";
import { BASE_URL } from "utils/request";

function Listing() {

    const [pageNumber,setPageNumber] = useState(0);

    const [page, setPage] = useState<GamePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true,
    });


    useEffect(() => {

        axios.get(`${BASE_URL}/games?size=12&page=${pageNumber}&sort=id`).then(response => {
            const data = response.data as GamePage;
            setPage(data);

        });

    }, [pageNumber]);

const handlePageChange = (newPageNumber : number) =>{
    setPageNumber(newPageNumber);
}



    return (
        <>

            <Pagination page={page} onChange={handlePageChange}/>

            <div className="container">
                <div className="row">
                    {page.content.map(game => (
                        <div key={game.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <GameCard game={game} />
                        </div>
                    )
                    )}
                </div>
            </div>
        </>
    );
}
export default Listing;