

const ProductCard = ({ title, desc, price, createdAt, visibility, }) => {
  return (
    <div style={{ marginInline: "70px" }}>
      <div
        // onClick={() => onClick(visibility)}
        tabIndex={0}
      >
        <div className="card">
          <img src="/assets/MS4.jpg" alt="this is an img" />
          <div  className="product-card">
            <h4
            style={{
              lineHeight: "1.2307692308",
              fontSize: "14px",
              color: "#232323",
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: "400",
              textTransform: "capitalize"
            }}> {title}</h4>
            {/* <p>{desc}</p> */}
            {/* this description is too long mr ali  */}
            <span style={{
              lineHeight: "1.2307692308",
              fontSize: "16px",
              color: "#c62828",
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: "bold",
              textTransform: "uppercase",
              margin: " 5px 0px",
            }} > <s style={{
              color: "#292929",
              fontSize: '13px',
              fontWeight: 'normal'
            }}>730 EGP</s> {price} EGP</span>
            <br />
            <span style={{
              lineHeight: "1.2307692308",
              fontSize: "12px",
              color: "#232323",
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: "400",
              textTransform: "none" }}
            >{createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard