import { useRouteError } from "react-router-dom";

function NotFound() {
    const error = useRouteError();
    return ( 
    <>
    <h1>Data error</h1>
    <p className="text-danger">Sorry, dat not fetched due to error: {error.message}</p>
    </> );
}

export default NotFound;