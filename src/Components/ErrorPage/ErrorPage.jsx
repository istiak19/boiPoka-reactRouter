import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    const handleButton = () => {
        navigate('/')
    }
    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            {
                error.status === 404 && <div>
                    <button className="btn" onClick={handleButton}>Go Back</button>
                </div>
            }
        </div>
    );
};

export default ErrorPage;