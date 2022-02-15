import React from "react";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const { title } = location.state;

  return (
    <span>
      <p>page payment</p>
      {title}
    </span>
  );
};

export default Payment;
