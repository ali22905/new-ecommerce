import { useState } from 'react';
import './NavBar.css'
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { logoutUser } from '../../redux/userReducer';

const NavBar = ({ searchQuery, setSearchQuery }) => {
  const { currentUser } = useSelector((state) => state.user);
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
    <div className="navbar">
      {currentUser ? <button onClick={logout}>logout</button> : <Link to='signin'>login</Link>}
      <h4>
      navigation is under construction...
      </h4>
      <input onKeyPress={handleKeyPress} onChange={(e)=> setSearchQuery(e.target.value)} value={searchQuery} type="text" placeholder='search' />
      <button onClick={submitSearch}>search</button>
    </div>
  );
}

export default NavBar;
