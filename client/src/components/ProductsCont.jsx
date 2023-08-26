import axios from 'axios'
import { useEffect, useState, useContext } from 'react';
import ProductCard from './ProductCard';
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./ProductCont.css";


const ProductsCont = ({ query }) => {
  const [products, setProducts] = useState([]);
  const API_LINK = import.meta.env.VITE_API_KEY
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState([]);
  const visibility = useContext(VisibilityContext);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick = (id) => ({ getItemById, scrollToItem }) => {
    const itemSelected = isItemSelected(id);

    setSelected((currentSelected) =>
      itemSelected
        ? currentSelected.filter((el) => el !== id)
        : currentSelected.concat(id)
  );};

  useEffect(() => {
    if (query) {
      axios.get(`${API_LINK}/products`, {
        params: {
          [query]: true,
          'sizeType': filter
        }
      })
      .then(res => {
        setProducts(res.data.slice(0,7))
      })
      .catch(err => {
        console.log(`error fetching products with params "${query}:true"`, err)
      })
    }else {
      axios.get(`${API_LINK}/products`)
      .then(res => {
        setProducts(res.data)
      })
      .catch(err => {
        console.log('error fetching recent added products', err)
      })
    }
  }, [filter, query]); //eslint-disable-line

  return (
    <div>
      {products.length > 0 ? 
        (
          <div className="recently-added">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
              className="products-slider-filters container"
            >
              <button 
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setFilter("women");
                }}
                className={`${filter === "women" && "active1"} animated-button` }>
                <span>women</span>
                <span></span>
              </button>
              <button 
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setFilter("men");
                }}
                className={`${filter === "men" && "active1"} animated-button` }>
                <span>men</span>
                <span></span>
              </button>
              <button 
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setFilter("kids");
                }}
                className={`${filter === "kids" && "active1"} animated-button` }>
                <span>kids</span>
                <span></span>
              </button>
              <button 
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setFilter("all");
                }}
                className={`${filter === "all" && "active1"} animated-button` }>
              <span>All</span>
              <span></span>
              </button>
            </div>
            <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
              {products.length < 1 
                ? (<h2>no products</h2>)
                : products.map(product => (
                    <ProductCard
                      itemId={product._id} // NOTE: itemId is required for track items
                      title={product.title}
                      key={product._id}
                      id={product._id}
                      price={product.price}
                      createdAt={product.createdAt}
                      onClick={handleClick(product._id)}
                      selected={isItemSelected(product._id)}
                      visibility={visibility}
                      style={{marginInline: '70px'}}
                    />
                  ))
                }
            </ScrollMenu>
          </div>
        )
        : (<h3>no products now</h3>)}
    </div>
  )
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

  return (
    <KeyboardArrowLeftIcon
      disabled={isFirstItemVisible}
      onClick={() => scrollPrev()}
      style={{
        cursor: "pointer",
      }}
    >
      
    </KeyboardArrowLeftIcon>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

  return (
    <KeyboardArrowRightIcon
      disabled={isLastItemVisible}
      onClick={() => scrollNext()}
      style={{
        cursor: "pointer",
      }}
    >
      Right
    </KeyboardArrowRightIcon>
  );
}

export default ProductsCont