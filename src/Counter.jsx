// We import React and useState for state handling
import React, { useState } from "react";

// This is our Counter component
function Counter() {
  // useState creates a "state variable" called count, starting at 0
  // setCount is the function we use to change it
  const [count, setCount] = useState(0);

  // Function to increase the count
  const increase = () => {
    setCount(count + 1); // Add 1 to count
  };

  // Function to decrease the count
  const decrease = () => {
    if (count > 0) setCount(count - 1); // Subtract 1 from count
  };

  // reset button
  const reset = () => setCount(0);

  // This is what gets displayed on the screen
  return (
    <div>
      {/* Display the current count */}
      <h2>{count}</h2>

      {/* Buttons to change the count */}
      <button onClick={decrease}>- Decrease</button>
      <button onClick={increase}>+ Increase</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

// Export Counter so we can use it in App.jsx
export default Counter;