import axios from "axios";
import { useEffect, useState } from "react"


const Products = () => {
  const [products, setProducts] = useState('');
  const [query, setQuery] = useState('popular');
  const [filter, setFilter] = useState('all');
  const API_LINK = import.meta.env.VITE_API_KEY

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
    <div>Products</div>
  )
}

export default Products