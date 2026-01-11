import { useState } from "react";
import css from "./User.module.css";
const User = () => {
  const [bodyColor, setBodyColor] = useState(false);
  const HandStyle = () => setBodyColor(true);
  const HandleClick = () => setBodyColor(false);
  console.log("Hello Bob");
  return (
    <div
      style={{
        backgroundColor: bodyColor ? "orange" : "green",
      }}
      className={css.wrap}
    >
      <button onClick={HandleClick}>Click</button>
      <button onClick={HandStyle}>Body Orange</button>
    </div>
  );
};

export default User;
