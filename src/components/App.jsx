import Footer from "./Footer/Footer";
import Heder from "./Heder/Heder";
import Product from "./Product/Product";
import Phone from "./Phone/Phone";
import List from "./List/List";
import User from "./User/User";
import Counter from "./Counter/Counter";
import { useState } from "react";

const App = () => {
  const [allClick, setAllClick] = useState(0);

  const changeAllClick = () => setAllClick((prev) => prev + 1);
  const minusAllClick = () => setAllClick((prev) => prev - 1);
  const resAllClick = () => setAllClick(0);

  // const arr = ["футбол", "баскетбол", "волейбол", "хокей", "теніс", "теніс"];
  // const showHeader = !false;
  return (
    <div>
      {/* {showHeader ? <Heder /> : <p>Not Heder</p>}
      <Phone
        name="Redmi"
        price={12000}
        imgSrc="https://placehold.co/200x400/6495ed/ffffff?text=Redmi"
      />
      <Product imgSrc="https://placehold.co/400x400/6495ed/ffffff?text=React" />
      <List arrList={arr} /> */}
      {/* <User /> */}
      <Counter
        allClick={allClick}
        resAllClick={resAllClick}
        minusAllClick={minusAllClick}
        changeAllClick={changeAllClick}
      />
      <Counter
        allClick={allClick}
        resAllClick={resAllClick}
        minusAllClick={minusAllClick}
        changeAllClick={changeAllClick}
      />
      <Footer />
    </div>
  );
};
export default App;
