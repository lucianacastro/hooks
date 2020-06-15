import React, { useState } from 'react';

export default function Example() {
  // Declara una nueva variable de estado, que llamaremos "count".
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Sumar
      </button>
      <button onClick={() => setCount(count - 1)}>
        Restar
      </button>
    </div>
  );
}