import styled from "@emotion/styled";
import { Link } from 'react-router-dom'

const ProductCard = ({ title, desc, price, createdAt, key, id }) => {

  return (
    <Link
      to={`/products/${id}`}
      style={{
        marginInline: "70px",
        cursor: "pointer",
        marginBottom: "15px",
      }}
    >
      <div
        // onClick={() => onClick(visibility)}
        tabIndex={0}
      >
        <div className="card">

          <img
            src="/assets/MS4.jpg"
            alt="this is an img"
            className='card-image'
          />

          <div className="product-card">

            <h4
              style={{
                lineHeight: "1.2307692308",
                fontSize: "14px",
                color: "#232323",
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: "500",
                textTransform: "capitalize",
              }}
            >
              {title}
            </h4>

            {/* <p>{desc}</p> */}
            {/* this description is too long mr ali  */}

            <span
              style={{
                lineHeight: "1.2307692308",
                fontSize: "16px",
                color: "#e51b23",
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: "bold",
                textTransform: "uppercase",
                margin: " 5px 0px",
              }}
            >
              <s
                style={{
                  color: "#292929",
                  fontSize: "13px",
                  fontWeight: "normal",
                  margin: "0 10px 0 0"
                }}
              >
                730 EGP
              </s>
              {price} EGP
            </span>
            <br />
            <span
              style={{
                lineHeight: "1.2307692308",
                fontSize: "13px",
                color: "#e51b23",
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: "700",
                textTransform: "none",
              }}
            >
              {/* {createdAt} */}
              Save 40%
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
