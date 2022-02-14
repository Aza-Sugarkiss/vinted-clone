import "./hero.css";
import HeroImg from "../assets/img/hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-container">
      <img className="hero-img" src={HeroImg} alt="hero-img" />
      <div className="box">
        <p>Prêts à faire du tri dans vos placards ?</p>
        <Link to="/publish">
          <button>Commencer à vendre</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
