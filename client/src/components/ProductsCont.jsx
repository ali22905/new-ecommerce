import axios from 'axios'
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';




// {popularProducts.length > 0 ? 
//   (popularProducts.map(product => (
//     <div className="product-card">
//       <h4>title: {product.title}</h4>
//       <p>{product.desc}</p>
//       <span>{product.price}</span>
//     </div>
//     )))
//   : (<h3>no popular products now</h3>)}

const ProductsCont = ({ query }) => {
  const [products, setProducts] = useState([]);
  const API_LINK = import.meta.env.VITE_API_KEY

  useEffect(() => {
    if (query) {
      axios.get(`${API_LINK}/products`, {
        params: {
          [query]: true,
        }
      })
      .then(res => {
        setProducts(res.data.slice(0, 4))
      })
      .catch(err => {
        console.log(`error fetching products with params "${query}:true"`, err)
      })
    }else {
      axios.get(`${API_LINK}/products`)
      .then(res => {
        setProducts(res.data.slice(0, 4))
      })
      .catch(err => {
        console.log('error fetching recent added products', err)
      })
    }
  }, []); //eslint-disable-line
  return (
    <div>
      {products.length > 0 ? 
        (products.map(product => (
          <>
            <ProductCard title={product.title} price={product.price} desc={product.desc} createdAt={product.createdAt} />
            <br></br>
          </>
          )))
        : (<h3>no products now</h3>)}
    </div>
  )
}

export default ProductsCont