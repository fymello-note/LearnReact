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


// Second usage of useRef - grabbing DOM element references

import { useRef, useState } from "react";
import { flushSync } from "react-dom";

/* export default function Form(){

    const inputRef = useRef(null);

    function handleClick(){
        // inputRef.current.focus();
        inputRef.current.select();
    }

    return (
        <>
            <input ref={inputRef} />
            <button onClick={handleClick}>Focus the input</button>
        </>
    )
} */

/* function CheckScrolling(){
    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const thirdRef = useRef(null);

    function handleScrollToFirst(){
        firstRef.current.scrollIntoView({
            behaviour: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }

    function handleScrollToSecond(){
        secondRef.current.scrollIntoView({
            behaviour: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }
    
    function handleScrollToThird(){
        thirdRef.current.scrollIntoView({
            behaviour: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }

    return (
        <>
            <nav>
                <button onClick={handleScrollToFirst}>first</button>
                <button onClick={handleScrollToSecond}>second</button>
                <button onClick={handleScrollToThird}>third</button>
            </nav>
            <div>
                <ul>
                    <li>
                        <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="img" ref={firstRef}/>
                    </li>
                    <li>
                        <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="img" ref={secondRef}/>
                    </li>
                    <li>
                        <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="img" ref={thirdRef}/>
                    </li>
                    <li>
                        <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="img" ref={thirdRef}/>
                    </li>
                </ul>
            </div>
        </>
    );
} */

let nextId = 1;
    
export default function TodoList(){
    const listRef = useRef(null);
    const [text, setText] = useState('');
    const [todos, setTodos] = useState([]);

    function handleAdd(){
        const newTodo = {id: nextId++, text: text}
        // ask react to commit the dom synchronously
        flushSync(() => {
            setText('');
            setTodos([...todos, newTodo]);
        })

        if (listRef.current.lastChild !== null) {
            listRef.current.lastChild.scrollIntoView({
                behaviour: 'smooth',
                block: 'nearest',
            });
        }
    }

    return (
        <>
            <button onClick={handleAdd}>add</button>
            <input value={text} onChange={e => setText(e.target.value)} />

            <ul ref={listRef}>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </>
    )
}

// synchronizing with Effect
// after render of a component, you can inject code

import { useEffect, useRef, useState } from "react";

/* function VideoPlayer({src, isPlaying}){
    const ref = useRef(null);

    // execute the code after every render 
    useEffect(() => {
        console.log("in useEffect");

        if(isPlaying){
            ref.current.play();
        }else{
            ref.current.pause();
        }
    })
            
    return (
        <video width="900" src={src} ref={ref} loop/>
    )
}

export default function App(){
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <>
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <VideoPlayer src={"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"} isPlaying={isPlaying} />
        </>
    )
} */

// 
/* export default function App(){

    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(count+1);
    }, [])

    return (
        <>
            <button>Done</button>
        </>
    )

} */

/* function VideoPlayer({src, isPlaying}){
    const ref = useRef(null);

    // execute the code after every render 
    useEffect(() => {
        console.log("in useEffect");

        if(isPlaying){
            ref.current.play();
        }else{
            ref.current.pause();
        }
    }, [isPlaying])
            
    return (
        <video width="900" src={src} ref={ref} loop/>
    )
}

export default function App(){
    const [isPlaying, setIsPlaying] = useState(false);
    const [text, setText] = useState('');

    return (
        <>
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <VideoPlayer src={"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"} isPlaying={isPlaying} />
        </>
    )
} */

/*
    useEffect(() => { }) This runs after every render
    useEffect(() => { }, []) This runs only on mount (first render)
    useEffect(() => { }, [a]) This runs if either a or b or both have changed since the last render
*/

function createConnection(){
    return {
        connect(){
            console.log("connecting...");
        },
        disconnect(){
            console.log("disconnected...");
        }

    }
}

function CharRoom(){

    useEffect(() => {
        const connection = createConnection();
        connection.connect();

        return () => connection.disconnect();
        

    }, [])

    return (
        <>
            <h1>Welcome to chat!</h1>
        </>
    )
}

export default function GoChat(){
    const [show, setShow] = useState(true);

    if (show){
        return (
        <>
            <CharRoom/>
            <button onClick={() => setShow(false)}>Close connection</button>
        </>
        )
    }else{
        return (
        <>
            <button onClick={() => setShow(true)}>Open connection</button>
        </>
        )
    }
}