// Other hooks

import { useRef, useState } from "react";

// useRef -- viene utilizzato per tenere un componente puro
// Like global variables, but no re-render if you change it


/* export default function Counter(){
    let ref = useRef(0);

    console.log("rendering");

    function handleClick() {
        ref.current = ref.current + 1;


        alert('you have clicked ' + ref.current);
    }

    return (
        <button onClick={handleClick}>Click me</button>
    );
} */


// scheduling and task in javascript
export default function StopWatch(){
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);

    const intervalRef = useRef(null);
    const extraRef = useRef({ciao: [1, 3, 4]});

    function handleStart(){
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10000);
    }

    function handleStop(){
        clearInterval(intervalRef.current);
    }

    let secondsPassed = 0;
    if(startTime != null && now != null){
        secondsPassed = (now-startTime) / 1000;
    }

    return (
        <>
            <h1>Time passed {secondsPassed}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )
}