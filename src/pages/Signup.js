import "./signup.css";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          username: username,
          email: email,
          password: password,
          newsletter: newsletter,
        }
      );
      Cookies.set("token", response.data.token, {
        expires: 1,
      });
      navigate("/");
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 409) {
        setErrorMessage("Un compte existe déjà avec cet email");
      }
    }
  };
  return (
    <div className="signup-form section">
      <h1>S'inscrire</h1>
      <form className="form-signup" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          required="required"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          required="required"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          required="required"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <div className="newsletter">
          <div className="checkbox">
            <input
              type="checkbox"
              onChange={(event) => {
                setNewsletter(event.target.checked);
              }}
            />
            <span>S'inscrire à notre newsletter</span>
          </div>
          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
        </div>
        <button className="submitnoms -button" type="submit">
          S'inscrire
        </button>
        <span>{errorMessage}</span>
      </form>
      <Link to="/login" className="login-link">
        Tu as déjà un compte ? Connecte-toi !
      </Link>
    </div>
  );
};

export default Signup;
