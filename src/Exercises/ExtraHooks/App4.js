import { useState, useRef } from 'react';

export default function Chat() {
    const [text, setText] = useState('');
    let textLive = useRef('');

    function handleSend() {
        setTimeout(() => {
            alert('Sending: ' + textLive.current);
        }, 3000);
    }

    return (
        <>
            <input
                value={text}
                onChange={e => {
                    setText(e.target.value);
                    textLive.current = e.target.value;
                }}
            />
            <button
                onClick={handleSend}>
                Send
            </button>
        </>
    );
}