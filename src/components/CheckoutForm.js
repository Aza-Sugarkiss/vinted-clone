import "./checkoutForm.css";
import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Link } from "react-router-dom";
import axios from "axios";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [completed, setCompleted] = useState(false);
  const data = useState();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const userId = data.user_id;
      const cardElement = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElement, {
        name: userId,
      });
      console.log(stripeResponse);

      const stripeToken = stripeResponse.token.id;
      const title = data.product_name;
      const price = data.product_price;
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeToken,
          title: title,
          amount: price,
        }
      );
      console.log(response.data);

      if (response.data.status === "succeeded") {
        setCompleted(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {!completed ? (
        <form onSubmit={handleSubmit}>
          <CardElement />
          <button type="submit">Payer</button>
        </form>
      ) : (
        <div>
          <span>Paiement effectué !</span>
          <Link to="/">Retour à la page d'accueil ?</Link>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
