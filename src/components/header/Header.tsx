import Button from "../button/Button";
import "./Header.scss";

export default function Header() {
    return (
        <header className="header">
            <h1>React pokemon app</h1>
            <div className="header-buttons">
                <Button>Favorites</Button>
                <Button>Comprasion</Button>
            </div>
        </header>
    )
}