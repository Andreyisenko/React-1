import Footer from './Footer/Footer';
import Heder from './Heder/Heder';
import Product from './Product/Product';
import Phone from './Phone/Phone';
import List from './List/List';
import User from './User/User';
import Counter from './Counter/Counter';
import { use, useEffect, useState } from 'react';
import NewCounter from './NewCounter/NewCounter';
import TextHiden from './TextHiden/TextHiden';
import AllClick from './AllClick/AllClick';
import ClickObj from './ClickObj/ClickObj';
import Clicks from './Clicks/Clicks';
import Modal from './Modal/Modal';
import Modals from './Modal/Modals/Modals';
import Click2 from './Clicks/Click2/Click2';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [click, setClick] = useState(0);
  // useEffect(() => {
  //   setInterval(() => {
  //     console.log(`interval ${Date.now()}`);
  //   }, 2000);
  // }, []);
  // const [allClick, setAllClick] = useState(0);

  // const changeAllClick = () => setAllClick(prev => prev + 1);
  // const minusAllClick = () => setAllClick(prev => prev - 1);
  // const resAllClick = () => setAllClick(0);
  // const [allClPlus, setAllClPlus] = useState(0);
  // const changePlus = () => setAllClPlus(prev => prev + 1);
  // const changeMinus = () => setAllClPlus(prev => prev - 1);
  // const arr = ["футбол", "баскетбол", "волейбол", "хокей", "теніс", "теніс"];
  // const showHeader = !false;
  return (
    <div>
      {/* {showHeader ? <Heder /> : <p>Not Heder</p>} */}
      {/* <Phone
        name="Redmi"
        price={12000}
        imgSrc="https://placehold.co/200x400/6495ed/ffffff?text=Redmi"
      /> */}
      {/* <Product imgSrc="https://placehold.co/400x400/6495ed/ffffff?text=React" /> */}
      {/* <List arrList={arr} /> */}
      {/* <User /> */}
      {/* <Counter
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
      /> */}
      {/* <NewCounter /> */}
      {/* <TextHiden user="Taras" /> */}
      {/* <TextHiden user="Bob" /> */}
      {/* <AllClick
        value={allClPlus}
        onUpdate={changePlus}
        onUpdateMinus={changeMinus}
        reset={() => setAllClPlus(0)}
      />
      <AllClick
        onUpdateMinus={changeMinus}
        value={allClPlus}
        reset={() => setAllClPlus(0)}
        onUpdate={changePlus}
      /> */}
      {/* <ClickObj /> */}
      {/* <Clicks /> */}
      {/* <div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Close' : 'Open'}
        </button>
        {isOpen && <Modals click={click} />}
      </div> */}
      <Click2 />
      <Footer />
    </div>
  );
};
export default App;
