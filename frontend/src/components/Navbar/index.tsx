
import { ReactComponent as GithubIcon } from 'assets/img/githubIcon.svg';
import'./styles.css';
function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="bsgames-nav-content">
                    <h1>BSGames</h1>
                    <a href="https://github.com/manzanofp">
                        <div className="bsgames-contact-container">
                            <GithubIcon />
                            <p className="bsgames-contact-link">/manzanofp</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}
export default Navbar;