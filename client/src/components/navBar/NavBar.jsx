import { useState } from 'react';
import './NavBar.css'
import { useNavigate } from 'react-router';

const NavBar = ({ searchQuery, setSearchQuery }) => {
  const navigate = useNavigate();

  const submitSearch = () => {
    navigate('/products')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      submitSearch();
    }
  };

  return (
    <div className="navbar">
      <h4>
      navigation is under construction...
      </h4>
      <input onKeyPress={handleKeyPress} onChange={(e)=> setSearchQuery(e.target.value)} value={searchQuery} type="text" placeholder='search' />
      <button onClick={submitSearch}>search</button>
    </div>
  );
}

export default NavBar;
