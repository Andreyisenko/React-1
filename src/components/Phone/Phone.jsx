import { useState } from "react";
import Modal from "../Modal/Modal";

const Phone = ({ price, imgSrc, name }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <h3>{name}</h3>
      <img
        src={imgSrc}
        alt={name}
        style={{
          backgroundColor: "red",
        }}
        width={100}
        height={100}
      />
      <p>{price} hrn</p>
      <button onClick={() => setShowModal(true)}>
        {!showModal ? "Купити" : "в Корзині"}
      </button>
      {showModal && (
        <Modal price={price} onClose={() => setShowModal(false)}></Modal>
      )}
      {/* <button onClick={() => alert(`Ціна телефону: ${price} грн`)}>
        Купити
      </button> */}
    </div>
  );
};
export default Phone;
