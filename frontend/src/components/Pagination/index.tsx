import{ReactComponent as Arrow} from 'assets/img/arrow.svg';
import { GamePage } from 'types/game';
import './styles.css';

type Props = {
    page: GamePage;
    onChange: Function;
}


function Pagination({page, onChange}:Props) {

    
    return (
        <div className="bsgames-pagination-container">
            <div className="bsgames-pagination-box">
                <button className="bsgames-pagination-button" disabled={page.first} onClick={()=>onChange(page.number-1)}>
                    <Arrow />
                </button>
                <p>{`${page.number + 1} de ${page.totalPages}`}</p>
                <button className="bsgames-pagination-button" disabled={page.last} onClick={()=>onChange(page.number+1)}>
                    <Arrow className="bsgames-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}

export default Pagination;