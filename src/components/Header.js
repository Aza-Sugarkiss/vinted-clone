import "./header.css";
import Logo from "../assets/img/vinted-logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="logo" />
      <form className="search" action="/Search">
        <input
          className="search-box"
          type="search"
          autocomplete="off"
          autocorrect="off"
          autocapitalize="off"
          spellcheck="false"
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
      <div className="white-button">
        <button>S'inscrire</button>
        <button>Se connecter</button>
      </div>
      <button className="cyan-button">Vends tes articles</button>
    </div>
  );
};

export default Header;
