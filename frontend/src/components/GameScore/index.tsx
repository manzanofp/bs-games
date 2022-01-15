import GameStars from "components/GameStars";
import './styles.css';

type Props = {
    score: number;
    count: number;
}


function GameScore({score, count}:Props) {


    return (
        <div className="bsgames-score-container">
            <p className="bsgames-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <GameStars score={score} />
            <p className="bsgames-score-count">{count} avaliações</p>
        </div>
    );

}

export default GameScore;