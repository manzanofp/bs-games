import'./styles.css';

function Form() {

    const game = {
        id: 1,
        image: "https://images2.alphacoders.com/778/thumb-1920-778340.jpg",
        title: "God of War",
        count: 2,
        score: 4.5
    };





    return (
        <div className="bsgames-form-container">
            <img className="bsgames-movie-card-image" src={game.image} alt={game.title} />
            <div className="bsgames-card-bottom-container">
                <h3>{game.title}</h3>
                <form className="bsgames-form">
                    <div className="form-group bsgames-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group bsgames-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="bsgames-form-btn-container">
                        <button type="submit" className="btn btn-primary bsgames-btn">Salvar</button>
                    </div>
                </form >
                <button className="btn btn-primary bsgames-btn mt-3">Cancelar</button>
            </div >
        </div >
    );
}
export default Form;