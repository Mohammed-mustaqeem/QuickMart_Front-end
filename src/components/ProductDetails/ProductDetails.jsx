import { NavLink, useParams } from "react-router-dom";
import { getProductById } from "../Axios/Axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import {  useDispatch } from "react-redux";
import { addCart } from "../../redux/action/action";

const ProductDetails = () => {
  const { id } = useParams();
  const [ProductById, setProductById] = useState({});

  const dispatch = useDispatch()
  const addProduct = (product)=>{
    dispatch(addCart(product))
  }

  useEffect(() => {
    let handleData = async () => {
      try {
        let response = await getProductById(id);
        setProductById(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleData();
  }, []);

  return (
    <>
      <div className="container py-3 ">
        <div key={ProductById.id} className="row py-5 ">
            <div className="col-md-6 ">
                <img src={ProductById.image} alt="" style={{height:"400px" , width:"400px"}}/>
            </div>
            <div className="col-md-6">
                <h4 className="uppercase text-zinc-400">{ProductById.category}</h4>
                <h1 className="display-5">{ProductById.title}</h1>
                <p className="lead fw-bolder">Rating {ProductById.rating && ProductById.rating.rate} <i className="fa fa-star"></i> </p>
                <h3 className="display-6 fw-bold my4">$ {ProductById.price}</h3>
                <p className="lead">{ProductById.description}</p>
                <Button variant="dark me-2" onClick={()=>addProduct(ProductById)} >Add To Cart</Button>
                <NavLink className="no-underline text-gray-500 btn outline-dark" to="/cart" >Go To Cart</NavLink>
            </div>
        </div> 
      </div>
    </>
  );
};

export default ProductDetails;
