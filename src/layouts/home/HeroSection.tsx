import { Link } from "react-router-dom";
import shoppingGirlImgURL from "../../assets/images/shopping-girl.png";

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-motto">
          {/*  <h1>
                Explore. <br /> Indulge. <br /> Thrive.
            </h1>
    */} <h2 style={{ color:"white"}}>Your Journey to Joyful Shopping Begins Here!</h2>
             <p>
              Embark on a seamless shopping experience with us. Explore amazing deals across a diverse array of products.
              Begin your journey to savings and happiness today!
             </p>
                <Link to={"/products"}>
                    <button type="button">Shop Now</button>
                </Link>
            </div>
            <div className="hero-img-container">
                <img src={shoppingGirlImgURL} alt="hero-img" />
            </div>
        </div>
    );
};

export default HeroSection;
