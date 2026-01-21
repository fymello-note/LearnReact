// shared state between components (idiom: lifting the state up!)
/*
    Toolbar
        Login       Cart        Credit
            user        item[]      100E 

    spostiamo lo stato di login cart e credit nella toolbar
    spostiamo tutti gli stati che devono comunicare tra più pagine nel genitore che tiene gli stati
*/

import { useState } from "react";

// no state is shared
/* function Panel({title, children}){
    const [isActive, setIsActive] = useState(false);

    return (
        <section>
            <h3>{title}</h3>
            {isActive ? <p>{children}</p> : <button onClick={() => setIsActive(true)}>Change State</button>}
        </section>
    )
}

export default function Accordion(){
    return (
        <>
            <Panel title="About">Hello to everybory</Panel>
            <Panel title="Info">Information now is available</Panel>
        </>
    )
} */

// lifting the state up 
function Panel({title, children, isActive, onClick}){

    return (
        <section>
            <h3>{title}</h3>
            {isActive ? <p>{children}</p> : <button onClick={onClick}>Change State</button>}
        </section>
    )
}

export default function Accordion(){
    const [activeIndex, setActiveIndex] = useState(0); // single source of truth

    return (
        <>
            <Panel title="About" isActive={activeIndex === 0} onClick={() => setActiveIndex(0)}>Hello to everybory</Panel>
            <Panel title="Info" isActive={activeIndex === 1} onClick={() => setActiveIndex(1)}>Information now is available</Panel>
        </>
    )
}