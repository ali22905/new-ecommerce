import axios from 'axios'
import { useEffect, useState } from 'react';




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

  useEffect(() => {
    if (query) {
      axios.get('http://localhost:8800/products', {
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
      axios.get('http://localhost:8800/products')
      .then(res => {
        setProducts(res.data.slice(0, 4))
      })
      .catch(err => {
        console.log('error fetching recent added products', err)
      })
    }
  }, []);
  return (
    <div>
      {products.length > 0 ? 
        (products.map(product => (
          <div className="product-card">
            <h4>title: {product.title}</h4>
            <p>{product.desc}</p>
            <span>{product.price}</span>
            <span>{product.createdAt}</span>
          </div>
          )))
        : (<h3>no products now</h3>)}
    </div>
  )
}

export default ProductsCont