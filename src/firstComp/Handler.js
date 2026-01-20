// event handling

/* export default function Button(){

    // nested function - manage events
    function handleClick(){
        alert("in handleClick");
    }

    return (
        <button onClick={handleClick}>
            no interaction
        </button>
    )
} */

// Inline function
/*  export default function Button(){
    return (
        <button onClick={function handleClick() {
            alert("ok");
        }}>
            no interaction
        </button>
    )
} */

// lambda function
/* export default function Button(){
    return (
        <button onClick={() => {
            alert("ok");
        }}>
            no interaction
        </button>
    )
} */

// reading props in event handler
/* function AlertButton({message, children}){
    return (
        <button onClick={() => alert(message)}>{children}</button>
    )
}

export default function ToolBar(){
    return (
        <div>
            <AlertButton message={"plaing!"}>
                play movie
            </AlertButton>
            <AlertButton message={"Uploading!"}>
                upload
            </AlertButton>
        </div>
    )
} */

// passing event handlers as props
/* function Button({onClick, children}){
    return (<button onClick={onClick}>{children}</button>)
}

function PlayButton({movieName}){
    function handlePlayClick(){
        alert("playing");
    }

    return (<Button onClick={PlayButton}>Play {movieName}</Button>)
}

export default function ToolBar(){
    return (
        <PlayButton movieName={"ciao"}></PlayButton>
    ) 
} */

// Stop propagation of the event
/* export default function ToolBar(){
    return (
        <div onClick={() => alert("clicked toolbar")}>

            <button onClick={(e) => { e.stopPropagation(); alert("playing")}}>playing</button>
            <button onClick={(e) => alert("uploading")}>uploading</button>
        </div>
    )
} */

// the parent take the event first
/* export default function ToolBar(){
    return (
        <div onClick={() => alert("clicked toolbar - BUBBLE")} onClickCapture={() => alert("clicked toolbar - CAPTURE")}>
            <button onClick={(e) => { e.stopPropagation(); alert("playing")}}>playing</button>
            <button onClick={(e) => alert("uploading")}>uploading</button>
        </div>
    )
} */

// Prevent default
/* export default function SingUp(){
    return (
        <form onSubmit={(e) => { e.preventDefault(); alert("submitting")}}>
            <label>Simone è gay? </label>
            <input/>
            <button>send</button>
        </form>
    )
} */