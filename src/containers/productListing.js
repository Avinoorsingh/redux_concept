import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './productComponent';
import axios from "axios";
import { setProducts } from '../redux/actions/productActions';
import Footer from './footer';

const ProductListing = () => {
    const products=useSelector((state)=>state);
    const dispatch=useDispatch();
    const fetchProducts=async()=>{
        const response= await axios.get("https://fakestoreapi.com/products").catch((error)=>{
        console.log("Error",error);
        });
        dispatch(setProducts(response.data))
    }
    
  const[visible,setVisible]=useState(6);
  const loadMore=()=>{
        setVisible(visible+6)
    }
    useEffect(()=>{
        fetchProducts();
    },[]);
  return (
    <>
    <div className="ui grid container">
    <ProductComponent visible={visible}/>
    </div>
    <div style={{textAlign:"center"}}>
    <button onClick={loadMore} style={{border:"none"}}>
    <div className="ui vertical button" tabIndex="0" style={{backgroundColor:"#232F3E",color:"white"}}>
    <div className="visible content">Load More <i className="plus icon"></i></div>
  </div>
  </button>
  </div>
    <Footer/>
    </>
  )
};

export default ProductListing;
