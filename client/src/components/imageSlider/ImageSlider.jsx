import "./imageSlider.css";
import HorizontalSlider from "react-horizontal-slider";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { useContext, useState, useEffect } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ProductCard from "../ProductCard";

import axios from "axios";

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

const items1 = [
  {
    img: "img1",
    title: "title1",
  },
  {
    img: "img2",
    title: "title2",
  },
];

const ImageSlider = () => {
  const [filter, setFilter] = useState("all");
  const [items, setItems] = useState(getItems);
  const [selected, setSelected] = useState([]);
  const [position, setPosition] = useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick = (id) => ({ getItemById, scrollToItem }) => {
    const itemSelected = isItemSelected(id);

    setSelected((currentSelected) =>
      itemSelected
        ? currentSelected.filter((el) => el !== id)
        : currentSelected.concat(id)
  )};

  return (
    <div className="recently-added">
      <h3 className="recently-added-h1">Recently Added Products</h3>
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
        {items.map(({ id }) => (
          <ProductsCont
            itemId={id} // NOTE: itemId is required for track items
            title={id}
            key={id}
            onClick={handleClick(id)}
            selected={isItemSelected(id)}
          />
        ))}
      </ScrollMenu>
    </div>
  );
};

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

  return (
    <KeyboardArrowLeftIcon
      disabled={isFirstItemVisible}
      onClick={() => scrollPrev()}
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
    >
      Right
    </KeyboardArrowRightIcon>
  );
}

const ProductsCont = ({
  query,
  onClick,
  selected,
  title1,
  itemId,
  desc,
  price,
  createdAt,
  key,
}) => {
  const [products, setProducts] = useState([]);
  const API_LINK = import.meta.env.VITE_API_KEY;
  const [filter, setFilter] = useState("all");
  const visibility = useContext(VisibilityContext);

  useEffect(() => {
    if (query) {
      axios
        .get(`${API_LINK}/products`, {
          params: {
            [query]: true,
            sizeType: filter,
          },
        })
        .then((res) => {
          setProducts(res.data.slice(0, 4));
        })
        .catch((err) => {
          console.log(
            `error fetching products with params "${query}:true"`,
            err
          );
        });
    } else {
      axios
        .get(`${API_LINK}/products`)
        .then((res) => {
          setProducts(res.data.slice(0, 4));
        })
        .catch((err) => {
          console.log("error fetching recent added products", err);
        });
    }
  }, [filter, query]); //eslint-disable-line
  return (
    <>




      <div style={{ display: "flex" }}>
        {products.length > 0 ? (
          <>
            {products.map((product) => (
              <div style={{ marginInline: "70px" }}>
                <div
                  onClick={() => onClick(visibility)}
                  tabIndex={0}
                >
                  <div className="card">
                  <img src="/assets/MS4.jpg" alt="this is an img" />
                    <ProductCard
                      key={product._id}
                      title={product.title}
                      price={product.price}
                      // desc={product.desc}
                      createdAt={product.createdAt}
                    />
                  </div>

                </div>

              </div>
            ))}
          </>
        ) : (
          <h3>no products now</h3>
        )}
      </div>
    </>
  );
};
