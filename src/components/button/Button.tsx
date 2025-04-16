import "./Button.scss"

export default function Button({ children, handler }: {children: string, handler: () => void}) {
    return <button className="button" onClick={ handler }>{ children }</button>
}