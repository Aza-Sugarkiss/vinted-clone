import "./home.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import OfferCard from "../components/OfferCard";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      <Hero />
      <div className="offers">
        {data.offers.map((offer, index) => {
          return <OfferCard key={data.offers[index]._id} offer={offer} />;
        })}
      </div>
    </div>
  );
};

export default Home;
