const AllClick = ({ value, onUpdate, onUpdateMinus, reset }) => {
  return (
    <div>
      <h2> current {value}</h2>
      <button onClick={onUpdate}>+</button>
      <button onClick={onUpdateMinus}>-</button>
      <button onClick={reset}>res</button>
    </div>
  );
};
export default AllClick;
