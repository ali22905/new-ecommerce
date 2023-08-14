import axios from 'axios'
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';


const ProductsCont = ({ query }) => {
  const [products, setProducts] = useState([]);
  const API_LINK = import.meta.env.VITE_API_KEY
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    if (query) {
      axios.get(`${API_LINK}/products`, {
        params: {
          [query]: true,
          'sizeType': filter
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
  }, [filter, query]); //eslint-disable-line
  return (
    <div>
      {products.length > 0 ? 
        (
          <>
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}} className='products-slider-filters'>
              <h4 style={{cursor: 'pointer'}} onClick={() => {setFilter('women')}}>women {filter === 'women' && 'active'}</h4>
              <h4 style={{cursor: 'pointer'}} onClick={() => {setFilter('men')}}>men {filter === 'men' && 'active'}</h4>
              <h4 style={{cursor: 'pointer'}} onClick={() => {setFilter('kids')}}>kids {filter === 'kids' && 'active'}</h4>
              <h4 style={{cursor: 'pointer'}} onClick={() => {setFilter('all')}}>All {filter === 'all' && 'active'}</h4>
              <br />
              <br />
            </div>
            {products.map(product => (
              <div style={{marginInline: '70px'}}>
                <ProductCard key={product._id} title={product.title} price={product.price} desc={product.desc} createdAt={product.createdAt} />
                <br></br>
              </div>
              ))}
          </>
        )
        : (<h3>no products now</h3>)}
    </div>
  )
}

export default ProductsCont