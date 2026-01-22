import { useState } from 'react';

export default function Toggle() {
  const [isOnRef, setOnRef] = useState(false);

  return (
    <button onClick={() => setOnRef(!isOnRef)}>
      {isOnRef ? 'On' : 'Off'}
    </button>
  );
}