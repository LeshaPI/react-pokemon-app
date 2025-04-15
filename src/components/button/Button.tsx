import "./Button.scss"

export default function Button({ children }: {children: string}) {
    return <button className="button">{ children }</button>
}