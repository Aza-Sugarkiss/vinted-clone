import "./homeContent.css";
import OfferCard from "./OfferCard";

const HomeContent = ({ data }) => {
  return (
    <div className="content">
      <div className="container">
        <h2>Offres</h2>
        <div className="offers">
          {data.offers.map((offer, index) => {
            return <OfferCard key={index} offer={offer} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
