import GameScore from "components/GameScore";
import { Link } from "react-router-dom";
import { Game } from "types/game";


type Props ={
  game: Game;
}

function GameCard( { game } : Props) {

    



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