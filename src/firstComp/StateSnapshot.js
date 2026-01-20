/*
    Render and Commit

    1. Triggering
    2. Rendering
    3. Committing
*/

import { useState } from "react";

/* export default function Counter(){
    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => {
            // il number viene aumentato solo di uno, perché il set è asincrono e viene eseguito alla fine della funzione
                setNumber(number + 1);
                setNumber(number + 1);
                setNumber(number + 1); 

            // l'alert avrà come valore di number 0, perché number non è ancora aumentato quando passa dopo alert
                setNumber(number + 5)
                setTimeout(() => { alert(number); }, 3000); 

            }}>
                +3
            </button>
        </>
    )
} */

export default function Form(){
    const [to, setTo] = useState('Alice');
    const [message, setMessage] = useState('Hello');

    function handleSubmit(e){
        e.preventDefault();
        setTimeout(()=> alert("sending message to " + to), 5000);
    }

    return (
        <form onSubmit={handleSubmit}>
            To:<br/>
            <select value={to} onChange={e => setTo(e.target.value)}>
                <option value='Alice'>Alice</option>
                <option value='Bob'>Bob</option>
            </select>
            <br/>
                <textarea placeholder="Hello" value={message} onChange={e=>setMessage(e.target.value)}></textarea>
            <br/>
            <button type="submit">submittami</button>
        </form>
    );
}