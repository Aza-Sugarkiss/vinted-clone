import "./productDetails.css";

const productDetails = ({ data }) => {
  return (
    <div className="product-details">
      <p className="product-price">{data.product_price.tofixed(2)}€</p>
      <div className="product-infos">
        <div className="left">
          <p>MARQUE</p>
          <p>TAILLE</p>
          <p>ÉTAT</p>
          <p>COULEUR</p>
          <p>EMPLACEMENT</p>
        </div>
        <div className="right">
          <p>{data.product_details[0].MARQUE}</p>
          <p>{data.product_details[1].TAILLE}</p>
          <p>{data.product_details[2].ÉTAT}</p>
          <p>{data.product_details[3].COULEUR}</p>
          <p>{data.product_details[4].EMPLACEMENT}</p>
        </div>
      </div>
    </div>
  );
};

export default productDetails;
