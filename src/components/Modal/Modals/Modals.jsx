import React, { useEffect } from 'react';

const Modals = ({ click }) => {
  useEffect(() => {
    console.log(click);
    console.log('Effect');

    const intervalId = setInterval(() => {
      console.log(`Interval - ${Date.now()}`);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [click]);
  return (
    <div>
      Modals {click}
      <p>{`Interval - ${Date.now()}`}</p>
    </div>
  );
};

export default Modals;
