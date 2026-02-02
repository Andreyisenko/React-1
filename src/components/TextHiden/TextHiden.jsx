import React, { useState } from 'react';
import css from './TextHiden.module.css';
const TextHiden = ({ user = 'Батя' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h2>TextHiden {user} </h2>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Приховай абз' : 'Покажи абз'}
      </button>
      {/* {isOpen && (
        <p className={`${css.text} ${isOpen ? css.show : ''}`}>
          {' '}
          Вітаю Друже {user}!{' '}
        </p>
      )} */}
      <p className={`${css.text} ${isOpen ? css.show : ''}`}>
        {' '}
        Вітаю Друже {user}!{' '}
      </p>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Приховати текст' : 'Показати текст'}
      </button>
      <div className={`${css.content} ${isOpen ? css.open : ''}`}>
        <p>
          Це приклад тексту, який показується/ховається. Додаємо трохи довгого
          тексту, щоб було видно ефект overflow.
        </p>
      </div>
    </div>
  );
};

export default TextHiden;
