import "./offer.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import OfferContent from "../components/OfferContent";

const Offer = () => {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://vinted-andromeda22-jp.herokuapp.com/offer/${id}`
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
    <div>
      <Header />
      <OfferContent data={data} />
    </div>
  );
};

export default Offer;
