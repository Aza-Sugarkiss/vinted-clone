import "./home.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import OfferCard from "../components/OfferCard";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 20;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?limit=${limit}&page=${page}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [page]);

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
      <button onClick={() => setPage(page - 1)}>Page précédente</button>
      <button onClick={() => setPage(page + 1)}>Page suivante</button>
    </div>
  );
};

export default Home;
