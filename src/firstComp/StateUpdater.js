// Updater 

import { useState } from "react";


export default function Counter(){
    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => {
                // setNumber(number + 1);
                // setNumber(number + 1);
                // setNumber(number + 1); 

                // using update function
                setNumber(n => n + 1);
                setNumber(n => n + 1);
                setNumber(n => n + 1);
                alert(number);
            }}>
                +3
            </button>
        </>
    )
}