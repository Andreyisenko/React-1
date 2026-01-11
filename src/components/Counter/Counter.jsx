import { useState } from "react";

const Counter = ({ changeAllClick, allClick, minusAllClick, resAllClick }) => {
  const [click, setClick] = useState(0);
  const HandleClick = () => setClick((prev) => prev + 1);
  if (click < 0) {
    return null;
  }
  console.log(click);

  return (
    <div>
      <h2> Count {click} </h2>
      <h3> AllCount {allClick} </h3>
      <button onClick={HandleClick}>Start</button>
      <button
        disabled={click === 0}
        onClick={() => setClick((prev) => prev - 1)}
      >
        Minus
      </button>
      <button onClick={() => setClick(0)}>Reset</button>
      <div>
        <button onClick={changeAllClick}>Start</button>
        <button disabled={allClick === 0} onClick={minusAllClick}>
          Minus
        </button>
        <button onClick={resAllClick}>Reset</button>
      </div>
    </div>
  );
};
export default Counter;
