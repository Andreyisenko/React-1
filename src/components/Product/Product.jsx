const Product = ({ imgSrc }) => {
  return (
    <div>
      <h2>FullStack</h2>
      <ul>
        <li>
          <p>HTML</p>
          <img
            src="https://placehold.co/400x400/8fbc8f/ffffff?text=HTML"
            alt="HTML"
            width={200}
            height={200}
          />
        </li>

        <li>
          <p>Css</p>
          <img
            src="https://placehold.co/400x400/f08080/ffffff?text=CSS"
            alt="css"
            width={200}
            height={200}
          />
        </li>
        <li>
          <p>React</p>
          <img src={imgSrc} alt="React" width={200} height={200} />
        </li>
      </ul>
    </div>
  );
};

export default Product;
