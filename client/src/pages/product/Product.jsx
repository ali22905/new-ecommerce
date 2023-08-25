import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector, useDispatch } from "react-redux";
import { likeProduct, updateCart } from '../../redux/userReducer';
import _ from 'lodash'
import './Product.css'
import ProductsCont from "../../components/ProductsCont";
import Footer from '../../components/footer/Footer'

const Product = () => {
  const [product, setProduct] = useState({});
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [cartExist, setCartExist] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const params = useParams();
  const [cartData, setCartData] = useState({
    productId: params.id,
    color: "",
    quantity: 1,
    size: "",
  });
  const API_KEY = import.meta.env.VITE_API_KEY;
  const { currentUser, cart } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleMinusQuntity = (e) => {
    if (cartData.quantity <= 1) {
      setCartData(prev => {return { ...prev, quantity: 1 }})
    }else {
      setCartData(prev => {return { ...prev, quantity: prev.quantity - 1 }})
    }
  }


  const handleLike = async() => {
    !currentUser && navigate('/signin')
    try {
      const {data:user} = await axios.put(`${API_KEY}/users/like/${params.id}`, {}, {
        headers: {
          'token': `Barear ${currentUser.accessToken}`
        }
      })
      dispatch(likeProduct(params.id))
    } catch (error) {
      console.log('error while liking a product', error)
    }
  }


  const handleCart = async() => {
    !currentUser && navigate('/signin')
    try {
      const { data:cart } = await axios.put(`${API_KEY}/users/cart`, {...cartData, quantity: cartData.quantity.toString()}, {
        headers: {
          token: `Barear ${currentUser.accessToken}`
        }
      })
      dispatch(updateCart(cart))
    } catch (error) {
      console.log('custom error while adding product to cart', error)
    }
  }


  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(`${API_KEY}/products/${params.id}`)
        setProduct(response.data)
        setColors(response.data.colors)
        setCartData(prev => {return { ...prev, color: response.data.colors[0] }})
        setSizes(response.data.sizes)
        setCartData(prev => {return { ...prev, size: response.data.sizes[0] }})
      } catch (error) {
        console.log('error while fetching a product by its id' ,error)
      }
    }
    getProduct()
  }, []); // eslint-disable-line

  useEffect(() => {
    const checkCart = async() => {
      if (currentUser) {
        if(cart.length > 0) {
          for (let i = 0; i < cart.length; i++) {
            const { _id, ...product } = cart[i]
            console.log('product from redux', product)
            console.log('current product data', {...cartData, quantity: cartData.quantity.toString()})
            console.log('--------------------------------------------')
            if(_.isEqual(product, {...cartData, quantity: cartData.quantity.toString()})) {
              setCartExist(true)
            }else {
              setCartExist(false)
            }
          }
        }else {
          setCartExist(false)
          console.log("worked and legnth smaller than 1")
        }
      }
    }
    checkCart()
  }, [cart, cartData, currentUser]);

  useEffect(() => {
    if(currentUser) {
      currentUser.favs.includes(params.id) ? setIsLiked(true) : setIsLiked(false)
    }
  }, [currentUser, params.id]);




  return (
    <>
    <div className='productContainer'>
      <div className='imgContainer' >
        <img src="/assets/MS7.jpg" alt="img"  />
        <br/>
      </div>

      <div className='productText' style={{width: '50%', display: 'flex', flexDirection:'column', alignItems:'flex-start', margin: '0 auto'}}>
          
        <div className="prodcut-details">
          <h1 className='productH1'>{product.title}</h1>

          <span className='priceSection'>
              <s className='fakePrice'>
                730 EGP
              </s>
              <span className='realPrice'>{product.price} EGP</span>
              <span className='priceDiscount'>(SAVE 20%)</span>

            </span>
          {/* <p>{product.desc}</p> */}
          <br />
          <hr style={{borderColor: "#fefefe"}} />
          <br />
        </div>


        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: "center"}} className="colors">
          {colors.map(color => (
            <span 
            key={color}
            style={{
              width: '20px', 
              height: '20px', 
              backgroundColor: color,
              borderRadius: "50%",
              marginInline: '13px',
              display: "block",
              cursor: 'pointer',
              border: cartData.color === color && '2px dotted #fff  ',
              // border: cartData.color === color && '2px solid #0cc13c  ',
            }}
            onClick={() => setCartData(prev => {return { ...prev, color, }})}
            ></span>
            ))}
            <br />
            <hr style={{borderColor: "#fefefe", height: "20px"}} />
            <br />

            <p style={{margin: "0 15px 0 15px"}}><span style={{color:'#e51b23'}}>{product.views}</span> views</p>

            <br />
            <hr style={{borderColor: "#fefefe", height: "20px"}} />
            <br />
            {isLiked 
            ? <FavoriteIcon onClick={handleLike} style={{cursor: 'pointer', marginLeft: '15px'}} />
            : <FavoriteBorderIcon onClick={handleLike} style={{cursor: 'pointer', marginLeft: '15px'}} />
          }
        </div>


        <br />
        <br />

      <div className="productFilter">

        <p>Size</p>


        <p>Quantity</p>
      </div>

      <div className="productFilter2">

        <div className="sizes">
          {sizes.map(size => (
            <button
            className='productSieButton circle-button'
            key={size}
            style={{
                backgroundColor: cartData.size === size && '#232323',
                color: cartData.size === size && '#fff',
                margin: "3px"
              }}
              onClick={() => setCartData(prev => {return { ...prev, size, }})}
              >
              {size}
            </button>
          ))}
        </div>

        <div className="quntity" style={{display: 'flex', alignItems: 'center'}}>
          <RemoveIcon  sx={{marginInline: '15px', fontSize: 20, cursor: 'pointer',borderRadius: '30%',   transition: "0.3s ease", '&:hover': { background: 'rgba(0, 0, 0, 0.2)'}}} onClick={handleMinusQuntity} />
          <span>{cartData.quantity}</span>
          <AddIcon  sx={{marginInline: '15px',fontSize: 20, cursor: 'pointer',borderRadius: '30%',   transition: "0.3s ease", '&:hover': { background: 'rgba(0, 0, 0, 0.2)'} }} onClick={() => setCartData(prev => {return { ...prev, quantity: prev.quantity + 1 }})} />
        </div>
      </div>


      {cartExist 
          ?<><button className='cartButton' onClick={handleCart} style={{cursor: 'pointer', marginTop: '10px'}} >Remove from cart</button>  <br /><hr style={{    width: "56%",borderColor: "#fefefe"}} /></>
          : <><button className='cartButton' onClick={handleCart} style={{cursor: 'pointer', marginTop: '10px'}} >Add to cart</button> 
          <br />
          <hr style={{    width: "56%",borderColor: "#fefefe"}} /> </>
        }
      <br />
      <p className='productDesc'>product description</p>
      <br />
      <p className='theDesc'>{product.desc}</p>

      </div>
    </div>
    <div className="popular-products" style={{ margin: "25px 0"}}>
        <h2 className="recently-added-h1">You May Also Like</h2>
        <ProductsCont query="popular" />
      </div>
        <Footer />
    </>
  )
}

export default Product