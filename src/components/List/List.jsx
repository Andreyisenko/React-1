const List = ({ arrList }) => {
  return (
    <div>
      <h2>Sport</h2>
      <ul>
        {arrList.map((item, index) => (
          <li key={item + index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default List;
