import{ReactComponent as Arrow} from 'assets/img/arrow.svg';
import './styles.css';

function Pagination() {

    return (
        <div className="bsgames-pagination-container">
            <div className="bsgames-pagination-box">
                <button className="bsgames-pagination-button" disabled={true} >
                    <Arrow />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="bsgames-pagination-button" disabled={false} >
                    <Arrow className="bsgames-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}

export default Pagination;