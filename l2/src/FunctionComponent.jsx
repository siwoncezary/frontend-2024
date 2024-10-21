import {useState} from 'react'

function FunctionalComponent({title, content, onClickButton}) {
    const [counter, setCounter] = useState(0);
    return ( 
        <div>
                <h1>{title}</h1>
                { counter >= 10 ? <p>Counter: {counter}</p> : <h1>Counter: {counter}</h1> }
                { counter < 20 && <h3>Counter: {counter}</h3> }
                <button onClick={() => setCounter(counter + 1)}>Button</button>
            </div>
     );
}

export default FunctionalComponent;