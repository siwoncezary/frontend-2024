import {useParams} from 'react-router-dom';
import {useLoaderData, useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
function PageOne({children}) {
    const [idPost, setIdPost] = useState(0);
    const data = useLoaderData();
    const { id } = useParams();
    const navigate = useNavigate();
    return ( <>
    <h1>Posts</h1>
    <Link to="/page-one/1">Post 1</Link>
    <Link to="/page-one/2">Post 2</Link>
    <Link to="/page-one/3">Post 3</Link>
    <form>
        <label>Id postu</label>
        <input type='number' onChange={(e) => setIdPost(e.target.value)} value={idPost}></input>
        <Button onClick={(e) => {
            navigate(`/page-one/${idPost}`);
        }
        }>Pobierz</Button>
    </form>
    <p>id : {id}</p>
    <p>Title: {data.title}</p>
    <p>Body: {data.body}</p>
    { children}
    </> );
}

export default PageOne;