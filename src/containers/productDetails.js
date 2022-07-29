import React from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions'

const ProductDetails = () => {
    const product=useSelector((state)=>state.product)
    const {image,title,price,category,description}=product;
    const {productId}=useParams();
    const dispatch=useDispatch();
    const fetchProductDetails= async()=>{
        const response=await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((error)=>{
            console.log("error",error)
        });
        dispatch(selectedProduct(response.data));
    }
    useEffect(()=>{
        if(productId && productId!="") fetchProductDetails();
        return ()=>{
            dispatch(removeSelectedProduct());
        };
    },[productId])

  return (
    <>
    <div className='ui grid' style={{marginTop:"5%"}}>
    <div className="ui grid container-fluid">
        {/* whenever the product is empty object, we are checking it and showing ...Loading in place of it. */}
    {Object.keys(product).length === 0 ? (
      <div>...Loading</div>
    ) : (
      <div className="ui placeholder segment">
        <div className="ui four column stackable center aligned grid">
          <div className="ui vertical"></div>
          <div className="ui grid container middle aligned row">
            <div className="column lp">
              <img className="image" style={{width:"20rem",height:"22rem"}} src={image} />
            </div>
            <div className="column rp container">
              <h1>{title}</h1>
              <h2>
                <a className="ui teal tag label">${price}</a>
              </h2>
              <h3 className="ui brown block header">{category}</h3>
              <p style={{overflowBlock:"auto"}}>{description}</p>
              <div className="ui vertical button" tabIndex="0">
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content">Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  </div>
  </>
  )
}

export default ProductDetails;
