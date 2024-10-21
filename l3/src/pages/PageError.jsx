import {useRouteError} from 'react-router-dom'

function PageErro() {
    const error = useRouteError();
    return ( <>
    <h1 className="text-danger">Error</h1>
    <p>{error.message}</p>
    <p>{error.textStatus}</p>
    </> );
}

export default PageErro;