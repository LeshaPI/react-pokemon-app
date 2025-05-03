import { Link } from "react-router";
import Button from "../button/Button";
import "./Header.scss";

export default function Header() {

    const moveToFavoritesHandler = () => {
        console.log('favorites');
    }

    const moveToComprasionHandler = () => {
        console.log('comprassion');
    }

    return (
        <header className="header">
            <Link to="/" className="header-logo__link">
                <h1 className="header-logo__content">React pokemon app</h1>
            </Link>
            <div className="header-buttons">
                <Link to="/favorites">
                    <Button handler={ moveToFavoritesHandler } >Favorites</Button>
                </Link>
                <Link to="/comprasion">
                    <Button handler={ moveToComprasionHandler } >Comprasion</Button>
                </Link>
            </div>
        </header>
    )
}