import "./Error.scss";

interface IError {
    error: string;
}

export default function Error({ error }: IError) {
    return(
        <div className="error-container">
            <p className="error-message">{ error }</p>
        </div>
    )
}
