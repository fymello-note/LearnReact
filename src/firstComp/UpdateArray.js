// Updating Arrays in State

import { useState } from "react";
import { useImmer } from "use-immer";

// Adding to an array
/* let nextId = 0;
export default function List(){
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);

    return (
        <>
            <input value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={() => {
                setArtists([...artists, {id: nextId++, name: name}]); // Questo è il metodo giusto

                //  artists.push({          // Questo è sbagliato, facciamo una mutazione 
                //    id: nextId++,          // noi in questo caso non andiamo a modificare il contenuto dello stato non bisogna fare così
                //    name: name
                //}); 
            }}>Add</button>

            <ul>
                {artists.map(a => (<li key={a.id}>{a.name}</li>) )}
            </ul>
        </>
    )
} */


// Removing from array
/* let list = [
    {id: 0, name: 'fulvios'},
    {id: 1, name: 'sandras'}
]

export default function List(){
    const [artists, setArtists] = useState(list);

    return (
        <>
            <ul>
                {artists.map(a => (
                    <li key={a.id}>
                        <p>{a.name}</p>     
                        <button onClick={() => {
                            setArtists(artists.filter(artist => artist.id !== a.id ));
                        }}>Delete</button>
                    </li>))}
            </ul>

        </>
    )
} */

// Trasforming (update) an array
/* let initialShape = [
    {id: 0, type:'circle', x: 50, y: 100},
    {id: 1, type:'square', x: 150, y: 100},
    {id: 2, type:'circle', x: 250, y: 100}
]
export default function List(){
    const [shapes, setShapes] = useState(initialShape);

    function handleClick(){
        // assignment map
        const nextShapes = shapes.map(shape => {
            if(shape.type === 'square'){
                return shape;
            }else{
                return {
                    ...shape,
                    y: shape.y + 50
                }
            }
        });

        setShapes(nextShapes);
    }

    return (
        <>
            <button onClick={handleClick}>move</button>
            {shapes.map(shape => (<div 
                key={shape.id}
                style={{
                    backgroundColor: 'purple',
                    position: 'absolute',
                    borderRadius: shape.type === 'circle' ? '50%' : '0%',
                    width: 50,
                    height: 50,
                    left: shape.x,
                    top: shape.y
                }}></div >)
                )
            }

        </>
    )
} */

// Sorting
// changing order of the elements of an array
/* let initialList = [
    {id: 0, title: 'abc def'},
    {id: 1, title: '2abc def'},
    {id: 2, title: '3abc def'}
]
export default function List(){
    const [list, setList] = useState(initialList);

    function handleClick(){
        const nextLists = [...list];

        setList(nextLists.reverse());
    }

    return (
        <>
            <button onClick={handleClick}>Reverse</button>

            <ul>
                {list.map(l => (
                    <li key={l.id}>{l.title}</li>
                ))}
            </ul>
        </>
    )
} */


// Useremo la Libreria Immer
let initialList = [
    {id: 0, title: 'abc def', seen: false},
    {id: 1, title: '2abc def', seen: false},
    {id: 2, title: '3abc def', seen: true}
]
let nextId = 2;
export default function BucketList(){
    const [myList, updateMyList] = useImmer(initialList);
    const [yourList, updateYourList] = useImmer(initialList);

    function handleToggleMyList(id, nextSeen){
        updateMyList(draft => {
            const artWork = draft.find(a => a.id === id)
            artWork.seen = nextSeen;
        })
    }

    function handleToggleYourList(id, nextSeen){
        updateYourList(draft => {
            const artWork = draft.find(a => a.id === id)
            artWork.seen = nextSeen;
        })
    }

    return (
        <>
            <h1>My</h1>
            <ItemList artWork={myList} onToggle={handleToggleMyList} />
            <ItemList artWork={yourList} onToggle={handleToggleYourList} />
        </>
    )
}

function ItemList({artWork, onToggle}){
    return (
        <>
            <ul>
                {artWork.map(a => (
                    <li key={a.id}>
                        {a.title}
                        <input type="checkbox"  checked={a.seen} onChange={e => { onToggle(a.id, e.target.checked)}}/>
                    </li>)
                )}
            </ul>
        </>
    )
}