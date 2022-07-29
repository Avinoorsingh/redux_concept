import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = ({visible}) => {
  const products=useSelector((state)=> state.allProducts.products);//takes argument of the state and returns state
  const renderProductList=products.slice(0,visible).map((product)=>{//allproducts is the key that has been defined in combineReducers 
    const {id, title, image, price, category}=product;
    return( 
    <div className='container' style={{marginBottom:"30px"}}>
    <div className='four column wide' key={id}>
        <Link to={`product/${id}`}>
    <div className='ui link cards'>
       <div className='card'>
           <div className='image'>
            <img src={image} alt={title}/>
           </div>
           <div className='content'>
               <div className='header'>{title}</div>
               <div className='meta price'>$ {price}</div>
               <div className='category'>{category}</div>
           </div>
       </div>
    </div>
    </Link>
   </div>
   </div>)
  })
  return (
   <>{renderProductList}</>
  )
}

export default ProductComponent
