import { useState } from 'react';

const NewCounter = () => {
  const [click, setClick] = useState(0);
  return (
    <div>
      <h1>NewCounter {click}</h1>
      <p>{click}</p>
      <button onClick={() => setClick(prev => prev + 1)}>click +</button>
      <button onClick={() => setClick(prev => prev - 1)}>click -</button>

      <button
        // disabled={!click}
        style={{
          opacity: !click ? 0.5 : 1,
          color: !click ? 'gray' : 'yellow',
          backgroundColor: !click ? 'yellow' : 'blue',
        }}
        onClick={() => setClick(0)}
      >
        reset
      </button>
    </div>
  );
};
export default NewCounter;
