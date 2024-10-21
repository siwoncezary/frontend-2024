import { Button } from 'react-bootstrap';
import {useState} from 'react';
function ReducerDemo() {
    const [items, setItems] = useState(["Ela","Ola","Karol"]);
    const [name, setName] = useState(""); 
    return ( <>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name}></input>
        <Button onClick={() => {
            
            setItems([...items, name]);
        }}>Dodaj imię</Button>
        <Button onClick ={() => {
            setItems(items.slice(0,-1));      
        }
        }>Usuń ostatnie</Button>
        <Button onClick = {() => {
            setItems([]);
        }
        }>Wyczyść listę</Button>
        <ul>
            {items.map((e, i) => <li key={i}>{e}</li>)}
        </ul>
    </> );
}

export default ReducerDemo;