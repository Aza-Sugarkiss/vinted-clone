import "./header.css";
import Logo from "../assets/img/vinted-logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="logo" />
      <form className="search" action="/Search">
        <input
          type="search"
          role="searchbox"
          defaultValue="Recherche des articles"
        />
      </form>
      <div className="white-button">
        <button>S'inscrire</button>
        <button>Se connecter</button>
      </div>
      <button className="cyan-button">Vends tes articles</button>
    </div>
  );
};

export default Header;
