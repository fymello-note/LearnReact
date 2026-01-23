import { useState } from 'react';

export default function App() {
    const [reverse, setReverse] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    let checkbox = (
        <label>
            <input
                type="checkbox"
                checked={reverse}
                onChange={e => setReverse(e.target.checked)}
            />
            Reverse order
        </label>
    );
    if (reverse) {
        return (
            <>
                <Field label="Last name" text={lastName} onChange={e => setLastName(e.target.value)} />
                <Field label="First name" text={firstName} onChange={e => setFirstName(e.target.value)} />
                {checkbox}
            </>
        );
    } else {
        return (
            <>
                <Field label="First name" text={firstName} onChange={e => setFirstName(e.target.value)} />
                <Field label="Last name" text={lastName} onChange={e => setLastName(e.target.value)} />
                {checkbox}
            </>
        );
    }
}

function Field({ label, text, onChange }) {
    return (
        <label>
            {label}:{' '}
            <input
                type="text"
                value={text}
                placeholder={label}
                onChange={onChange}
            />
        </label>
    );
}