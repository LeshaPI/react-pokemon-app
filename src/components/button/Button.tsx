import "./Button.scss";
import { IButton } from "./IButton";

export default function Button({ children, handler }: IButton) {
    return <button className="button" onClick={ handler }>{ children }</button>
}