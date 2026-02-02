import React, { use, useState } from 'react';

const ClickObj = () => {
  const [changeX, setChangeX] = useState({
    userName: 'Taras',
    rating: 5,
    scils: ['css', 'HTML', 'JS'],
  });
  const LogOdj = () => console.log(changeX);
  const ChangeName = () => setChangeX({ ...changeX, userName: 'Bob' });
  const ChangeRating = () => setChangeX({ ...changeX, rating: 10 });

  return (
    <div>
      <h2>ClickObj</h2>
      <p>{changeX.userName}</p>
      <p>{changeX.rating}</p>
      <p>{changeX.scils}</p>
      <button onClick={LogOdj}>Click</button>
      <button onClick={ChangeRating}>ChangeRating</button>
      <button onClick={ChangeName}>ChangeName</button>
    </div>
  );
};

export default ClickObj;
