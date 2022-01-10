import GameStars from "components/GameStars";
import './styles.css';

function GameScore() {

const score = 3.5;
const count =13;

    return (
        <div className="bsgames-score-container">
            <p className="bsgames-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <GameStars />
            <p className="bsgames-score-count">{count} avaliações</p>
        </div>
    );

}

export default GameScore;