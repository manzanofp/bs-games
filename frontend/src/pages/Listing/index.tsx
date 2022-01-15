import axios from "axios";
import GameCard from "components/GameCard";
import Pagination from "components/Navbar/Pagination";
import { BASE_URL } from "utils/request";

function Listing() {

// FORMA ERRADA DE SE FAZER A REQUISIÇÃO
axios.get(`${BASE_URL}/games/2`).then(response =>{
console.log(response.data);
});


    return (
        <>
            <Pagination />

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <GameCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <GameCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <GameCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <GameCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <GameCard />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Listing;