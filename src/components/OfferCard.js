import "./offerCard.css";
import { Link } from "react-router-dom";

const OfferCard = ({ offer }) => {
  const owner = offer.owner.account;
  const price = offer.product_price.toFixed(2).replace(".", ",") + " €";
  const sizeExist = Object.keys(offer.product_details[1])[0];
  const size = offer.product_details[1].TAILLE;
  const brand = offer.product_details[0].MARQUE;
  const id = offer._id;
  return (
    <div className="offer">
      <div className="user-info">
        <img className="avatar" src={owner.avatar.secure_url} alt="avatar" />
        <span>{owner.username}</span>
      </div>
      <div className="product">
        <div className="product-img">
          <Link to={`./offer/${id}`}>
            <img src={offer.product_pictures[0].secure_url} alt="product" />
          </Link>
        </div>
        <div className="product-detail">
          <span className="price">{price}</span>
          {sizeExist === "TAILLE" && <span className="size">{size}</span>}
          <span className="brand">{brand}</span>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
