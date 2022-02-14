import "./filter.css";

const Filter = () => {
  return (
    <div className="sort container">
      <span>Trier par prix :</span>
      <div className="sort-checkbox">
        <input type="checkbox" name="price" />
        <div className="wrapper">
          <div className="knob">
            <span>⇡</span>
          </div>
        </div>
      </div>
      <span>Prix entre :</span>
      <div className="filter container">
        <div className="filter-rod">
          <div className="first-slider">
            <div className="first-price"></div>
          </div>
          <div className="second-slider">
            <div className="second-price"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
