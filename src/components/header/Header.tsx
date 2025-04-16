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
            <h1 className="header-logo">React pokemon app</h1>
            <div className="header-buttons">
                <Button handler={ moveToFavoritesHandler } >Favorites</Button>
                <Button handler={ moveToComprasionHandler } >Comprasion</Button>
            </div>
        </header>
    )
}