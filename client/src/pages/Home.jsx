import ProductsCont from '../components/ProductsCont'

const Home = () => {

  return (
    <div>
      <h1>Home</h1>
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
    </div>
  );
}

export default Home;
