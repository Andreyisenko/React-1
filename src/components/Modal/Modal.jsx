import { useEffect } from 'react';

const Modal = ({ price, onClose }) => {
  useEffect(() => {
    setInterval(() => {
      console.log(`interval ${Date.now()}`);
    }, 2000);
  }, []);
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        // backgroundColor: "green",
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 10,
      }}
    >
      <div
        style={{
          width: '50%',
          height: '50%',
          backgroundColor: 'rgba(26, 182, 78, 0.8)',
          // backgroundColor: "green",
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 20,
          textAlign: 'center',
          padding: '20px',
          border: '1px solid',
          boxShadow: '0 0 60px rgba(188, 255, 2)',
          borderRadius: '20px',
        }}
      >
        <p style={{ color: 'yellow' }}>Ціна телефону: {price} грн</p>
        <button onClick={() => onClose()}>Close</button>
      </div>
    </div>
  );
};
export default Modal;
