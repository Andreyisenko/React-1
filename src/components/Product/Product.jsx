const Product = ({ imgSrc }) => {
  return (
    <div>
      <h2>FullStack</h2>
      <ul>
        <li>
          HTML
          <img
            src="https://placehold.co/400x400/8fbc8f/ffffff?text=HTML"
            alt="HTML"
            width={200}
            height={200}
          />
        </li>

        <li>
          Css
          <img
            src="https://placehold.co/400x400/f08080/ffffff?text=CSS"
            alt="css"
            width={200}
            height={200}
          />
        </li>
        <li>
          React
          <img src={imgSrc} alt="React" width={200} height={200} />
        </li>
      </ul>
    </div>
  );
};

export default Product;
