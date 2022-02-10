import "./homeContent.css";
import OfferCard from "./OfferCard";

const HomeContent = ({ data }) => {
  return (
    <div className="content">
      <div className="offers">
        {data.offers.map((offer, index) => {
          return <OfferCard key={index} offer={offer} />;
        })}
      </div>
    </div>
  );
};

export default HomeContent;
