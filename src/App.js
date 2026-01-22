// Hook custom

import { useEffect, useState } from "react";
import { useOnlineStatus } from "./useOnlineStatus";

// Reusing logic via custom hooks

/* export default function StatusBar(){
    const [isOnline, setIsOnline] = useState(navigator.onLine); 

    useEffect(() => {
        function handleOnline() {
            setIsOnline(true);
        }

        function handleOffline() {
            setIsOnline(false);
        }

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        }
    }, [])


    return <h1>{isOnline ? "online" : "disconnected"}</h1>
} */

/* export default function SaveButton(){
    const [isOnline, setIsOnline] = useState(navigator.onLine); 

    useEffect(() => {
        function handleOnline() {
            setIsOnline(true);
        }

        function handleOffline() {
            setIsOnline(false);
        }

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        }
    }, []);

    function handleSaveClick(){
        console.log("prova")
    }

    return (
        <button disabled={!isOnline} onClick={handleSaveClick}>{isOnline ? "online": "disconnected"}</button>
    );
} */

function StatusBar(){
    const isOnline = useOnlineStatus();

    console.log("in the statusBar")

    return <h1>{isOnline ? "online" : "disconnected"}</h1>
}

function SaveButton(){
    const isOnline = useOnlineStatus();

    function handleSaveClick(){
        console.log("prova")
    }

    console.log("in the savebutton")

    return (
        <button disabled={!isOnline} onClick={handleSaveClick}>{isOnline ? "online": "disconnected"}</button>
    );
}

function App(){
    console.log("in App")
    return (
        <>
            <StatusBar/>
            <SaveButton/>
        </>
    )
}

// Custom hooks perimit shared logic, not state itself
/* export default function Form(){ // a lot of repeted code in this function
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function handleFirstName(e){
        setFirstName(e.target.value)
    }

    function handleLastName(e){
        setLastName(e.target.value)
    }

    return (
        <>
            fn: <input value={firstName} onChange={handleFirstName}/>
            ln: <input value={lastName} onChange={handleLastName}/>
        </>
    )
} */

function useFormInput(intialValue){
    const [value, setValue] = useState(intialValue);

    function handleChange(e){
        setValue(e.target.value);
    }

    const inputPros = {
        value: value,
        onChange: handleChange
    }

    return inputPros
}

export default function Form(){
    const firstName = useFormInput('');
    const lastName = useFormInput('');

    return (
        <>
            fn: <input {...firstName}/>
            ln: <input {...lastName}/>
        </>
    )
}