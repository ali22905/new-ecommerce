import ProductsCont from "../../components/ProductsCont";
import Container from "@mui/material/Container";
import "./Home.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Home = () => {
  return (
    <>
      <container className="landingContainer">
        <img
          src="/assets/model-transparent-backGround-transformed.png"
          alt="this is an img"
          className="movingImage"
        />
        <div className="text1">
          <h1>
            <span>
              SIMPLIFY <br /> EVERYTHING.
            </span>
          </h1>
        </div>
        <button class="btn">
          <svg
            height="24"
            width="24"
            fill="#FFFFFF"
            viewBox="0 0 24 24"
            data-name="Layer 1"
            id="Layer_1"
            class="sparkle"
          >
            <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
          </svg>
          <span class="text">Shop Now</span>
        </button>
      </container>

      <hr />
      <hr />
      <br />
      <br />
      <div className="recent-products">
        <h2>recently added</h2>
        <ProductsCont query="new" />
      </div>
      <br />
      <hr />
      <br />
      <div className="popular-products">
        <h2>popular products</h2>
        <ProductsCont query="popular" />
      </div>
      <br />
      <hr />
      <br />
      <div className="most-sold-products">
        <h2>most sold products</h2>
        <ProductsCont query="sold" />
      </div>
      <br />
      <hr />
      <br />
      <div className="all-products">
        <h2>all</h2>
        <ProductsCont />
      </div>
    </>
  );
};

export default Home;
