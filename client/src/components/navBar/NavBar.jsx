import { useState } from 'react';
import './NavBar.css'
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { logoutUser } from '../../redux/userReducer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';


const NavBar = ({ searchQuery, setSearchQuery }) => {
  const { currentUser, cart } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const submitSearch = () => {
    navigate('/products')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      submitSearch();
    }
  };

  const logout = () => {
    dispatch(logoutUser())
  }

  return (
    <>
    <div className="navbar">
      {currentUser ? <button onClick={logout}>logout</button> : <Link to='signin'>login</Link>}
      <Link style={{marginLeft: '10px'}} to={currentUser ? "/cart" : '/signin'}>
        <Badge badgeContent={cart ? cart.length : 0} color="warning" >
          <ShoppingCartIcon />
        </Badge>
      </Link>
      <h4>
      navigation is under construction...
      </h4>
      <input onKeyPress={handleKeyPress} onChange={(e)=> setSearchQuery(e.target.value)} value={searchQuery} type="text" placeholder='search' />
      <button onClick={submitSearch}>search</button>
    </div>
    </>
  );
}

export default NavBar;
