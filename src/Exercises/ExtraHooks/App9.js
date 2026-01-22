import { useState, useEffect, useRef } from 'react';
import { fetchBio } from './api.js';

export default function Page() {
    const [person, setPerson] = useState('Alice');
    const [bio, setBio] = useState(null);

    useEffect(() => {
        let isToDo = true;

        setBio(null);
        fetchBio(person).then(result => {
            if(isToDo)
                setBio(result);
        });

        return () => { isToDo = false } 
    }, [person]);

    return (
        <>
            <select value={person} onChange={e => {
                setPerson(e.target.value);
            }}>
                <option value="Alice">Alice</option>
                <option value="Bob">Bob</option>
                <option value="Taylor">Taylor</option>
            </select>
            <hr />
            <p><i>{bio ?? 'Loading...'}</i></p>
        </>
    );
}