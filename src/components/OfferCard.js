import "./offerCard.css";
import Heart from "../assets/img/coeur.svg";
import { Link } from "react-router-dom";

const OfferCard = ({ offer }) => {
  console.log(offer);
  return (
    <Link to={`/offer/${offer._id}`}>
      <div className="offer-card">
        <div className="product-image">
          <img src={offer.product_image.secure_url} alt={offer.product_name} />
        </div>
        <div className="product-description">
          <div className="product-details">
            <p className="product-price">{offer.product_price.toFixed(2)}€</p>
            <p className="product-brand">{offer.product_details[0].MARQUE}</p>
            <p className="product-size">{offer.product_details[1].TAILLE}</p>
          </div>
          <div className="likes">
            <img src={Heart} alt="heart" />
            <span>9</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OfferCard;
