import "./header.css";
import Logo from "../assets/img/vinted-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Header = () => {
  const navigate = useNavigate();
  const disconnect = () => {
    Cookies.remove("token");
    navigate("/");
  };

  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <form className="search" action="/Search">
        <input
          className="search-box"
          type="search"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          required=""
          name="q"
          title="Rechercher"
          role="searchbox"
          aria-label="Rechercher dans le contenu du site"
          aria-controls="typeahead_results"
          aria-autocomplete="list"
          placeholder="Recherche des articles"
        />
      </form>
      <div className="navigateButtons">
        {Cookies.get("token") ? (
          <button className="diconnect" onClick={disconnect}>
            Se déconnecter
          </button>
        ) : (
          <div className="white-button">
            <button className="signUp" onClick={() => navigate("/signup")}>
              S'inscrire
            </button>
            <button className="login" onClick={() => navigate("/login")}>
              Se connecter
            </button>
          </div>
        )}
      </div>
      <button className="cyan-button">Vends tes articles</button>
    </div>
  );
};

export default Header;
