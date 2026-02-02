import React, { useEffect, useState } from 'react';

const Click2 = () => {
  const [click2, setClick2] = useState(() => {
    const savedClisc2 = localStorage.getItem('click2-save');
    // if (savedClisc2) {
    //   return +savedClisc2;
    // } else {
    //   return 0;
    // }
    return savedClisc2 ? +savedClisc2 : 0;
  });

  useEffect(() => {
    localStorage.setItem('click2-save', click2);
  }, [click2]);
  return (
    <div>
      <h2>ClickTwo {click2}</h2>
      <button onClick={() => setClick2(prev => prev + 1)}>ClickTwo</button>
      <button onClick={() => setClick2(0)}>resTwo</button>
    </div>
  );
};

export default Click2;
