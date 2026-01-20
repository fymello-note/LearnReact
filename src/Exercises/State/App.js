import { useState } from 'react';
import { sculptureList } from '../../data'

export default function Gallery(){

    // hook method
    const [index, setIndex] = useState(0); 
    const [showMode, setShowMode] = useState(false);

    function handleClick(){
        if (index === sculptureList.length-1)
            setIndex(0);
        else
            setIndex(index + 1);
    }

    function handlePreviusClick(){
        if (index === 0)
            setIndex(sculptureList.length-1);
        else
            setIndex(index - 1);
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
                <button onClick={handlePreviusClick}>
                    Previus
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