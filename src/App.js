import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./components/CheckoutForm";

import Cookies from "js-cookie";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Header from "./components/Header";
import Payment from "./pages/Payment";

const stripePromise = loadStripe("pk_test_votreCléPublique");

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const setUser = (token) => {
    if (token) {
      Cookies.set("token", token, { expires: 1 });
    } else {
      Cookies.remove("token");
    }
    setToken(token);
  };
  return (
    <Router>
      <Header setUser={setUser} token={token} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/payment" element={<Payment token={token} />} />
      </Routes>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </Router>
  );
}

export default App;
