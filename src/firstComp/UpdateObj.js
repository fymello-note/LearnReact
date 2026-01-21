// Aggiornamenti di oggetti all'interno degli stati
// Updating Objects in State

import { useState } from "react";
import { useImmer } from "use-immer";

// tracciamo delle coordinate
/* export default function MovingDot(){

    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });

    return (
        <div onPointerMove={e => {
            // position.x = e.clientX; // mutiamo un oggetto bisogna evitare queste mutazioni!!! SBAGLIATO
            // position.y = e.clientY
            // setPosition(position) // questo non funziona perché react vede che sono lo stesso oggetto, non gli interessa della mutazione dei valori interni
            console.log("x: " + e.clientX + " y: " + e.clientY);

            // Passiamo un nuovo oggetto
            setPosition({
                x: e.clientX,
                y: e.clientY
            })
        }}

            style={{
                position: 'relative',
                width: '100vw',
                height: '100vh'
            }}>

            <div style={{
                position: 'absolute',
                backgroundColor: 'red',
                borderRadius: '50%',
                width: 20,
                height: 20,
                transform: `translate(${position.x}px, ${position.y}px)`
            }}/>

        </div>
    )
} */

/* export function Form(){
    const [person, setPerson] = useState({
        firstName: 'Fulvios',
        lastName: 'FulviosLast',
        email: 'fu@gmail.com',
    })

    function handleFirstNameChange(e) {
        // person.firstName = e.target.value;

        setPerson({
            ...person, 
            firstName: e.target.value
        })
    }
    function handleLastNameChange(e) {
        // person.lastName = e.target.value;

        setPerson({
            ...person, 
            lastName: e.target.value
        })
    }
    function handleEmailNameChange(e) {
        // person.email = e.target.value;

        setPerson({
            ...person, 
            email: e.target.value
        })
    }

    function handleChange(e){
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        })
    }

    // react 2-way binding
    return (
        <>
            fn: <input name="firstName" value={person.firstName} onChange={handleChange} />
            <br/>
            ln: <input name="lastName" value={person.lastName} onChange={handleChange} />
            <br/>
            em: <input name="email" value={person.email} onChange={handleChange} />

            <p>
                {person.firstName}
                <br/>
                {person.lastName}
                <br/>
                {person.email}
            </p>
        </>
    )
} */

// use deep manual object copy
function Form(){
    const [person, setPerson] = useState({
        name: 'fulvios',
        artwork: {
            title: 'title1',
            city: 'Brescia'
        }
    });

    function handleNameChange(e){
        setPerson({
            ...person,
            name: e.target.value
        })
    }

    //funzionante
    function handleTitleChange(e){
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                title: e.target.value
            }
        })
    }

    // bug in
    /* function handleTitleChange(e){
        setPerson({
            ...person,
            artwork: {
                title: e.target.value
            }
        })
    } */

    function handleCityChange(e){
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                city: e.target.value
            }
        })
    }

    return (
        <>
            fn: <input name="name" value={person.name} onChange={handleNameChange} />
            <br/>
            ln: <input name="title" value={person.artwork.title} onChange={handleTitleChange} />
            <br/>
            em: <input name="city" value={person.artwork.city} onChange={handleCityChange} />


            <p>{person.name} {person.artwork.title} {person.artwork.city}</p>
        </>
    )
}

// use immer libary
export default function FormImmer(){
    const [person, updatePerson] = useImmer({
        name: 'fulvios',
        artwork: {
            title: 'title1',
            city: 'Brescia'
        }
    });

    function handleNameChange(e){
        updatePerson(draft => {
            draft.name = e.target.value // mutation over an object already copied
        })
    }

    function handleTitleChange(e){
        updatePerson(draft => {
            draft.artwork.title = e.target.value // and we have out of the box a deep copy
        })
    }

    function handleCityChange(e){
        updatePerson(draft => {
            draft.artwork.city = e.target.value // and we have out of the box a deep copy
        })
    }

    return (
        <>
            fn: <input name="name" value={person.name} onChange={handleNameChange} />
            <br/>
            ln: <input name="title" value={person.artwork.title} onChange={handleTitleChange} />
            <br/>
            em: <input name="city" value={person.artwork.city} onChange={handleCityChange} />


            <p>{person.name} {person.artwork.title} {person.artwork.city}</p>
        </>
    )
}