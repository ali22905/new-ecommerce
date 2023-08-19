// import axios from "axios";
// import { useEffect, useState } from "react"
// import ProductCard from '../../components/ProductCard'


// const Products = ({ searchQuery }) => {
//   const [products, setProducts] = useState([]);
//   const [query, setQuery] = useState('popular');
//   const [filters, setFilters] = useState({
//     type: '',
//     gender: '',
//     sizes: [],
//   });
//   const API_LINK = import.meta.env.VITE_API_KEY

//   useEffect(() => {
//     if (query) {
//       axios.get(`${API_LINK}/products`, {
//         params: {
//           [query]: true,
//           ...filters,
//           'search': searchQuery,
//         }
//       })
//       .then(res => {
//         setProducts(res.data)
//       })
//       .catch(err => {
//         console.log(`error fetching products with params "${query}:true"`, err)
//       })
//     }else {
//       axios.get(`${API_LINK}/products`)
//       .then(res => {
//         setProducts(res.data)
//       })
//       .catch(err => {
//         console.log('error fetching recent added products', err)
//       })
//     }
//   }, [filters, query, searchQuery]); //eslint-disable-line

//   return (
//     <div className="products">
//       {searchQuery 
//       ? <h1 style={{marginBlock: '50px'}}>search: <span style={{color: 'blue'}}>{searchQuery}</span></h1> 
//       : <h1 style={{marginBlock: '50px'}}>Products</h1>}
//       <div style={{margin: '50px'}} className="sorts">
//         <button onClick={()=> setQuery('new')} style={{backgroundColor: query==='new' && '#aaeeee'}}>newest</button>
//         <button onClick={()=> setQuery('old')} style={{backgroundColor: query==='old' && '#aaeeee'}}>oldest</button>
//         <button onClick={()=> setQuery('popular')} style={{backgroundColor: query==='popular' && '#aaeeee'}}>most popular</button>
//         <button onClick={()=> setQuery('sold')} style={{backgroundColor: query==='sold' && '#aaeeee'}}>most selled</button>
//       </div>
//       <div className="products-part" style={{display: 'flex'}}>
//         <div className="filters" style={{width: '25%'}}>
//           <div className="type-filter-block">
//             <h3>product type</h3>
//             <ul>
//               {['tshirt', 'pants', 'shoes'].map(type => (
//                 <li 
//                 key={type}
//                 onClick={()=> setFilters(prev => {
//                   return {
//                     ...prev, 
//                     type: prev.type===type ? '' : type,
//                   }
//                 })}
//                 style={{
//                   margin: '15px',
//                   cursor: 'pointer',
//                   color: filters.type === type && 'blue',
//                 }}>{type}</li>
//               ))}
//             </ul>
//           </div>
//           <div style={{marginTop: '30px'}} className="gender-filter-block">
//             <h3>gender</h3>
//             <ul>
//               {['male', 'female'].map(gender => (
//                 <li 
//                 key={gender}
//                 onClick={()=> setFilters(prev => {
//                   return {
//                     ...prev,
//                     gender: prev.gender===gender ? '' : gender,
//                   }
//                 })}
//                 style={{
//                   margin: '15px',
//                   cursor: 'pointer',
//                   color: filters.gender === gender && 'blue',
//                 }}>{gender}</li>
//               ))}
//             </ul>
//           </div>
//           <div style={{marginTop: '30px'}} className="sizes-filter-block">
//             <h3>sizes</h3>
//             <ul style={{display: 'flex', flexWrap: 'wrap'}}>
//               {['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].map(size => (
//                 <button 
//                 key={size} 
//                 onClick={()=> setFilters(prev => {
//                   return {
//                     ...prev, 
//                     sizes: prev.sizes.includes(size) 
//                     ? prev.sizes.filter((s) => s !== size)
//                     : [...prev.sizes, size]
//                   }
//                 })}
//                 style={{
//                   marginInline: '5px', 
//                   backgroundColor: filters.sizes.includes(size) && '#aaeeee'
//                 }}>{size}</button>
//               ))}
//             </ul>
//           </div>
//         </div>
//         <div className="cards" style={{width: '70%', display: 'flex', maxWidth: '70%', flexWrap: 'wrap',}}>
//         {products.length < 1 
//           ? (<h2>no products</h2>)
//           : products.map(p => (
//             <ProductCard sizes={p.sizes} gender={p.gender} views={p.views} sold={p.sold} title={p.title} createdAt={p.createdAt} key={p._id} desc={p.desc} price={p.price} />
//           ))
//         }
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Products