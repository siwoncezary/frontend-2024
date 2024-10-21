import { useSearchParams } from "react-router-dom";

function PageOne() {
    const [query, setQuery] = useSearchParams();
    console.dir(query);
    return ( <>
    <h1>Page one</h1>
    {[...query.keys()].map(e => <p key={e}>{e}: {query.get(e)}</p>)}
    </> );
}

export default PageOne;