import "./hero.css";
import HeroImg from "../assets/img/hero.png";

const Hero = () => {
  return (
    <div className="container">
      <img className="hero-img" src={HeroImg} alt="hero-img" />
      <div className="box">
        <p>Prêts à faire du tri dans vos placards ?</p>
        <button>Commencer à vendre</button>
      </div>
    </div>
  );
};

export default Hero;
