import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector, useDispatch } from "react-redux";
import { likeProduct, resetLikes } from '../../redux/userReducer';


const Product = () => {
  const [product, setProduct] = useState({});
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const [sizes, setSizes] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const params = useParams();
  const API_KEY = import.meta.env.VITE_API_KEY;
  const { currentUser, cart } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleMinusQuntity = (e) => {
    if (quantity <= 1) {
      setQuantity(1)
    }else {
      setQuantity(prev => prev - 1)
    }
  }

  const handleLike = async() => {
    !currentUser && navigate('/signin')
    try {
      const {data} = await axios.put(`${API_KEY}/users/like/${params.id}`, {}, {
        headers: {
          'token': `Barear ${currentUser.accessToken}`
        }
      })
      console.log(data)
      dispatch(likeProduct(params.id))
    } catch (error) {
      console.log('error while liking a product', error)
    }
  }
  const handleCart = () => {
    !currentUser && navigate('/signin')
  }

  useEffect(() => {

    const getProduct = async () => {
      try {
        const response = await axios.get(`${API_KEY}/products/${params.id}`)
        setProduct(response.data)
        setColors(response.data.colors)
        setSelectedColor(response.data.colors[0])
        setSizes(response.data.sizes)
        setSelectedSize(response.data.sizes[0])
      } catch (error) {
        console.log('error while fetching a product by its id' ,error)
      }
    }
    getProduct()

  }, []);
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', marginInline: '100px'}}>
      <div style={{width: '50%'}}>
        <div className="prodcut-details">
          <h1>{product.title}</h1>
          <h3>{product.price}</h3>
          <p>{product.desc}</p>
          <br />
          <p>{product.views} popularity</p>
        </div>
        <div style={{marginTop: '30px'}} className="functions">
          <FavoriteBorderIcon onClick={handleLike} style={{cursor: 'pointer', marginTop: '10px'}} />
          <br />
          <AddShoppingCartIcon onClick={handleCart} style={{cursor: 'pointer', marginTop: '10px'}} />
        </div>
      </div>
      <div style={{width: '50%', display: 'flex', flexDirection:'column', alignItems:'flex-end'}}>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}} className="colors">
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
                border: selectedColor === color && '2px solid #0cc13c',
              }}
              onClick={() => setSelectedColor(color)}
            ></span>
          ))}
        </div>
        <br />
        <br />
        <div className="sizes">
          {sizes.map(size => (
            <button
              key={size}
              style={{
                marginInline: '5px', 
                backgroundColor: selectedSize === size && '#aaeeee'
              }}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
        <div className="quntity">
          <RemoveIcon sx={{marginInline: '15px'}} onClick={handleMinusQuntity} />
          <span>{quantity}</span>
          <AddIcon sx={{marginInline: '15px'}} onClick={() => setQuantity(prev => prev + 1)} />
        </div>
      </div>
    </div>
  )
}

export default Product