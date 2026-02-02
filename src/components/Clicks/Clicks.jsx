import React, { useEffect, useState } from 'react';

const Clicks = () => {
  const [click, setClick] = useState(() => {
    const savedClick = localStorage.getItem('clic-items');

    if (!savedClick) {
      return 0;
    } else {
      return +savedClick;
    }
  });
  useEffect(() => {
    localStorage.setItem('clic-items', click);
    console.log(`clicked ${click}`);
  }, [click]);

  return (
    <div>
      <h2> Counter {click}</h2>
      <button onClick={() => setClick(prev => prev + 1)}>
        {' '}
        You clicked {click} times{' '}
      </button>
      <button onClick={() => setClick(0)}>res</button>
    </div>
  );
};

export default Clicks;
