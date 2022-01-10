import GameScore from "components/GameScore";
import { Link } from "react-router-dom";

function GameCard() {

    const game = {
        id: 1,
        image: "https://images2.alphacoders.com/778/thumb-1920-778340.jpg",
        title: "God of War",
        count: 2,
        score: 4.5
    };



    return (
        <div>
            <img className="bsgames-movie-card-image" src={game.image} alt={game.title} />
            <div className="bsgames-card-bottom-container">
                <h3>{game.title}</h3>
                <GameScore />


                <Link to={`/form/${game.id}`}>
                    <div className="btn btn-primary bsgames-btn">Avaliar</div>
                </Link>

            </div>
        </div>

    );
}
export default GameCard;