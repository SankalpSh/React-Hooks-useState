import './style.css';
import React, { useState } from 'react';
import { render } from 'react-dom';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [items, cart] = useState(0);

  return (
    <div>
      <p>Items in your cart :{items}</p>
      <button onClick={() => cart(items + 1)}>
        Add item
      </button>
    </div>
  );
}
render(<Example />, document.getElementById('root'));