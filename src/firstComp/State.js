import { useState } from 'react';
import {sculptureList} from './data'

// This have two majore problems
/* export default function Gallery(){
    let index = 0;    

    function handleClick(){
        index += 1;
    }

    let sculture = sculptureList[index];

    return (
        <>
            <button onClick={handleClick}>
                Next
            </button>
            <h2>{sculture.name} by {sculture.artist}</h2>
            <h3>{index+1} of {sculptureList.length}</h3>
            <img src={sculture.url} alt={sculture.alt}/>

            <p>
                {sculture.description}
            </p>
        </>
    )
} */

function Gallery(){

    // hook method
    const [index, setIndex] = useState(0); 
    const [showMode, setShowMode] = useState(false);

    function handleClick(){
        setIndex(index + 1);
    }

    function handleMoreClick(){
        setShowMode(!showMode);
    }

    let sculture = sculptureList[index];

    return (
        <>
            <div>
                <button onClick={handleClick}>
                    Next
                </button>
                <h2>{sculture.name} by {sculture.artist}</h2>
                <h3>{index + 1} of {sculptureList.length}</h3>
                <img src={sculture.url} alt={sculture.alt} />
            </div>

            <div>
                <button onClick={handleMoreClick}>
                    click
                </button>
                {showMode && <p>{sculture.description}</p>}
            </div>
        </>
    )
}

// react state is private
export default function Page(){
    return (
        <div>
            <Gallery />
            <Gallery />
        </div>
    )
}