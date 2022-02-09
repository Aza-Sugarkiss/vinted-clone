import "./offerContent.css";
import ProductImages from "./ProductImages";
import ProductDetails from "./ProductDetails";

const OfferContent = ({ data }) => {
  return (
    <div className="offer-content container">
      <ProductImages data={data} />
      <ProductDetails data={data} />
    </div>
  );
};

export default OfferContent;
