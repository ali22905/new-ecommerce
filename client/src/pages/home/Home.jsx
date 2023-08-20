/* LIBS */ 
import { Link } from "react-router-dom";
/* COMPONENTS */ 
// import area
import ProductsCont from "../../components/ProductsCont";
import Footer from "../../components/footer/Footer";
import "./Home.css";



const Home = () => {


  return (
    <>
      {/* start landing section  */}
      <div className="landingContainer animate-entrance2">
        <img
          src="/assets/model-transparent-backGround-transformed.png"
          alt="this is an img"
          className="movingImage"
        />
        <div className="text1 animate-entrance" >
          <h1>
            <span>
              SIMPLIFY <br /> EVERYTHING.
            </span>
          </h1>
        </div>
        <Link to="/products" className="btn animate-entrance">
          <svg
            height="24"
            width="24"
            fill="#FFFFFF"
            viewBox="0 0 24 24"
            data-name="Layer 1"
            id="Layer_1"
            className="sparkle"
          >
            <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
          </svg>
          <p  class="text">Shop Now</p>
        </Link>
      </div>
      {/* end landing section */}










      <div>
        <Link to="signin">signin</Link>
      </div>

      <div className="recent-products" style={{ margin: "75px 0"}}>
        <h2 className="recently-added-h1">Recently Added Products </h2>
        <ProductsCont query="new" />
      </div>

      <hr />
      <br />
      <div className="popular-products" style={{ margin: "75px 0"}}>
        <h2 className="recently-added-h1">popular products</h2>
        <ProductsCont query="popular" />
      </div>
      <br />
      <hr />
      <br />
      <div className="most-sold-products" style={{ margin: "75px 0"}}>
        <h2 className="recently-added-h1">most sold products</h2>
        <ProductsCont query="sold" />
      </div>
      <br />
      <hr />
      <br />
      <Footer />
    </>
  );
};

export default Home;
