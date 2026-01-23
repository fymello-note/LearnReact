// Preserving and resetting State

import { useState } from "react";

// quando un componente cambia posizione nel dom il suo stato viene resettato;
// state is tied to a position in the render tree

/* export default function App(){
    const counter = <Counter />

    return (
        <div>
            {counter}
            {counter}
        </div>
    )
} */

// 2. Same component at the same position preserves state
// 3. State preserved as long as the component is rendered on screen
/* export default function App(){
    const [showB, setShowB] = useState(true);

    return (
        <div>
            <Counter />

            {showB && <Counter />}
            <br />
            <div></div>
            <label>
                <input type="checkbox" checked={showB} onChange={(e) => setShowB(e.target.checked)} />
            </label>
        </div>
    )
} */

// 4. Different components at the same position reset position
/* export default function App(){
    const [isPaused, setIsPaused] = useState(true);

    return (
        <div>
            {isPaused ? (<p>see u later</p>) : <Counter/>}
            <label>
                <input type="checkbox" checked={isPaused} onChange={(e) => setIsPaused(e.target.checked)} />
            </label>
        </div>
    )
} */

// Problem: shared state between different Counter instance due to same position
/* export default function ScoreBoard(){
    const [isPlayerA, setIsPlaryerA] = useState(true);

    return (
        <div>
            {isPlayerA ? (
                <Counter person="Fulvios" />
            ) : (
                <Counter person="Fulvios" />
            )}

            <button onClick={() => setIsPlaryerA(!isPlayerA)}>next Player</button>
        </div>
    )
} */


// Solution 1: rendering a component in different position
/* export default function ScoreBoard(){
    const [isPlayerA, setIsPlaryerA] = useState(true);

    return (
        <div>
            {isPlayerA && <Counter person="Fulvios" />}
            {!isPlayerA && <Counter person="Sandras" />}

            <button onClick={() => setIsPlaryerA(!isPlayerA)}>next Player</button>
        </div>
    )
} */

// Solution 2: rendering same component, same position but different key
export default function ScoreBoard(){
    const [isPlayerA, setIsPlaryerA] = useState(true);

    return (
        <div>
            {isPlayerA ? (
                <Counter key="Fulvios" person="Fulvios" />
            ) : (
                <Counter key="person2" person="person2" />
            )}

            <button onClick={() => setIsPlaryerA(!isPlayerA)}>next Player</button>
        </div>
    )
}

function Counter(){
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = 'counter';
    if(hover)
        className += ' hover';

    return (
        <div className={className} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
            <h1>{score}</h1>
            <button onClick={() => setScore(score+1)}>Increment</button>
        </div>
    )
}