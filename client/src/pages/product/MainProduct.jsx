// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
// import RemoveIcon from '@mui/icons-material/Remove';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import { useSelector, useDispatch } from "react-redux";
// import { likeProduct, updateCart } from '../../redux/userReducer';
// import _ from 'lodash'


// const Product = () => {
//   const [product, setProduct] = useState({});
//   const [colors, setColors] = useState([]);
//   const [sizes, setSizes] = useState([]);
//   const [cartExist, setCartExist] = useState(false);
//   const [isLiked, setIsLiked] = useState(false);
//   const params = useParams();
//   const [cartData, setCartData] = useState({
//     productId: params.id,
//     color: "",
//     quantity: 1,
//     size: "",
//   });
//   const API_KEY = import.meta.env.VITE_API_KEY;
//   const { currentUser, cart } = useSelector((state) => state.user);
//   const dispatch = useDispatch()
//   const navigate = useNavigate()


//   const handleMinusQuntity = (e) => {
//     if (cartData.quantity <= 1) {
//       setCartData(prev => {return { ...prev, quantity: 1 }})
//     }else {
//       setCartData(prev => {return { ...prev, quantity: prev.quantity - 1 }})
//     }
//   }


//   const handleLike = async() => {
//     !currentUser && navigate('/signin')
//     try {
//       const {data:user} = await axios.put(`${API_KEY}/users/like/${params.id}`, {}, {
//         headers: {
//           'token': `Barear ${currentUser.accessToken}`
//         }
//       })
//       dispatch(likeProduct(params.id))
//     } catch (error) {
//       console.log('error while liking a product', error)
//     }
//   }


//   const handleCart = async() => {
//     !currentUser && navigate('/signin')
//     try {
//       const { data:cart } = await axios.put(`${API_KEY}/users/cart`, {...cartData, quantity: cartData.quantity.toString()}, {
//         headers: {
//           token: `Barear ${currentUser.accessToken}`
//         }
//       })
//       dispatch(updateCart(cart))
//     } catch (error) {
//       console.log('custom error while adding product to cart', error)
//     }
//   }


//   useEffect(() => {
//     const getProduct = async () => {
//       try {
//         const response = await axios.get(`${API_KEY}/products/${params.id}`)
//         setProduct(response.data)
//         setColors(response.data.colors)
//         setCartData(prev => {return { ...prev, color: response.data.colors[0] }})
//         setSizes(response.data.sizes)
//         setCartData(prev => {return { ...prev, size: response.data.sizes[0] }})
//       } catch (error) {
//         console.log('error while fetching a product by its id' ,error)
//       }
//     }
//     getProduct()
//   }, []); // eslint-disable-line

//   useEffect(() => {
//     const checkCart = async() => {
//       if (currentUser) {
//         if(cart.length > 0) {
//           for (let i = 0; i < cart.length; i++) {
//             const { _id, ...product } = cart[i]
//             console.log('product from redux', product)
//             console.log('current product data', {...cartData, quantity: cartData.quantity.toString()})
//             console.log('--------------------------------------------')
//             if(_.isEqual(product, {...cartData, quantity: cartData.quantity.toString()})) {
//               setCartExist(true)
//             }else {
//               setCartExist(false)
//             }
//           }
//         }else {
//           setCartExist(false)
//           console.log("worked and legnth smaller than 1")
//         }
//       }
//     }
//     checkCart()
//   }, [cart, cartData, currentUser]);

//   useEffect(() => {
//     if(currentUser) {
//       currentUser.favs.includes(params.id) ? setIsLiked(true) : setIsLiked(false)
//     }
//   }, [currentUser, params.id]);
//   return (
//     <div style={{display: 'flex', justifyContent: 'space-between', marginInline: '100px'}}>
//       <div style={{width: '50%'}}>
//         <div className="prodcut-details">
//           <h1>{product.title}</h1>
//           <h3>{product.price}</h3>
//           <p>{product.desc}</p>
//           <br />
//           <p>{product.views} popularity</p>
//         </div>
//         <div style={{marginTop: '30px'}} className="functions">
          
//           {isLiked 
//             ? <FavoriteIcon onClick={handleLike} style={{cursor: 'pointer', marginTop: '10px'}} />
//             : <FavoriteBorderIcon onClick={handleLike} style={{cursor: 'pointer', marginTop: '10px'}} />
//           }
//           <br />
//           {cartExist 
//             ?<RemoveShoppingCartIcon onClick={handleCart} style={{cursor: 'pointer', marginTop: '10px'}} />
//             :<AddShoppingCartIcon onClick={handleCart} style={{cursor: 'pointer', marginTop: '10px'}} />
//           }
//         </div>
//       </div>
//       <div style={{width: '50%', display: 'flex', flexDirection:'column', alignItems:'flex-end'}}>
//         <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}} className="colors">
//           {colors.map(color => (
//             <span 
//               key={color}
//               style={{
//                 width: '20px', 
//                 height: '20px', 
//                 backgroundColor: color,
//                 borderRadius: "50%",
//                 marginInline: '13px',
//                 display: "block",
//                 cursor: 'pointer',
//                 border: cartData.color === color && '2px solid #0cc13c',
//               }}
//               onClick={() => setCartData(prev => {return { ...prev, color, }})}
//             ></span>
//           ))}
//         </div>
//         <br />
//         <br />
//         <div className="sizes">
//           {sizes.map(size => (
//             <button
//               key={size}
//               style={{
//                 marginInline: '5px', 
//                 backgroundColor: cartData.size === size && '#aaeeee'
//               }}
//               onClick={() => setCartData(prev => {return { ...prev, size, }})}
//             >
//               {size}
//             </button>
//           ))}
//         </div>
//         <div className="quntity">
//           <RemoveIcon sx={{marginInline: '15px'}} onClick={handleMinusQuntity} />
//           <span>{cartData.quantity}</span>
//           <AddIcon sx={{marginInline: '15px'}} onClick={() => setCartData(prev => {return { ...prev, quantity: prev.quantity + 1 }})} />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Product