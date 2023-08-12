import React from 'react'

const ProductCard = ({ title, desc, price, createdAt }) => {
  return (
    <div style={{backgroundColor: '#dedede'}} className="product-card">
      <h4>title: {title}</h4>
      <p>{desc}</p>
      <span>{price}</span>
      <span>{createdAt}</span>
    </div>  
  )
}

export default ProductCard