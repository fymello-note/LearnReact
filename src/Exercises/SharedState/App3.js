import { useState } from 'react';

export default function SyncedInputs() {
  const [number, setNumber] = useState(0);
  const fahrenheit = Math.round((number * (9/5)) + 32);

  function handleChange(e, isFromFahreneit) {
    if(isFromFahreneit){
        setNumber(Math.round((e.target.value - 32) * (5/9)))
    }else{
        setNumber(e.target.value);
    }
  }

  return (
    <>
      <Input label="celsius" text={number} onChange={(e) => handleChange(e, false)} />
      <Input label="fahrenheit" text={fahrenheit} onChange={(e) => handleChange(e, true)}/>
    </>
  );
}

function Input({ label, text, onChange }) {

  return (
    <label>
      {label}
      {' '}
      <input
        value={text}
        onChange={onChange}
      />
    </label>
  );
}