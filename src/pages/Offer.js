import "./offer.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Offer = () => {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      console.log("response.data Offers==>", response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div className="offer-page">
      <div className="product-container">
        <div className="product-img">
          <img src={data.product_pictures[0].secure_url} alt="product" />
        </div>
        <div className="product-detail">
          <span className="price">
            {data.product_price.toFixed(2).replace(".", ",") + " €"}
          </span>
          <div className="offer-detail">
            {data.product_details.map((elem, index) => {
              return (
                <div className="offer-detail-line">
                  <span key={index}>
                    {Object.keys(data.product_details[index])[0]}
                  </span>
                  <span>{Object.values(data.product_details[index])[0]}</span>
                </div>
              );
            })}
          </div>
          <div className="line"></div>
          <div className="underline-info">
            <span className="product-title">{data.product_name}</span>
            <span className="product-description">
              {data.product_description}
            </span>
            <div className="owner-info">
              <img src={data.owner.account.avatar.secure_url} alt="owner" />
              <span>{data.owner.account.username}</span>
            </div>
          </div>
          <button className="buy">Acheter</button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
