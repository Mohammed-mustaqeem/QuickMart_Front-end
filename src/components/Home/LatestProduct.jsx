import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useNavigate } from "react-router-dom";
import { getProductsData } from "../Axios/Axios";



const LatestProduct = () => {
  const [data, setdata] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const Navigate = useNavigate()
    const handleClick = (id)=>{
      Navigate(`/ProductDetail/${id}`)
    }

  useEffect(() => {
   
    
    const getProduct = async () => {
      try {
        // const resonse = await axios.get("https://fakestoreapi.com/products");
        const resonse = await getProductsData()
       
        let allProduct = resonse.data;
        // if (isMounted.current) {
          setdata(allProduct);
          setFilterData(allProduct);
        // }
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
    // return () => {
    //   isMounted.current = false; // Update isMounted on unmount
    // };
   
  }, []);
  const FilterProduct = (cat) => {
    setSelectedCategory(cat);
    if (cat === "All") {
      setFilterData(data);
    } else {
      let updatelist = data.filter((x) => x.category === cat);
      setFilterData(updatelist);
    }
    
   
  };
 

  return (
    <div className="container my-5 py-5">
      <div className="row flex  justify-center">
        <div className="grid-cols-12 mb-5 pb-5">
          <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          <hr />
        </div>
        <div className="d-flex justify-center mb-5 ">
          <Button
          variant={
            selectedCategory === "All" ? "dark" : "outline-dark"
          }
            className="outline-dark me-2"
            onClick={() => setFilterData(data,"All")}
          >
            All
          </Button>
          <Button
           variant={
            selectedCategory === "men's clothing" ? "dark" : "outline-dark"
          }
            className="outline-dark me-2"
            onClick={() => FilterProduct("men's clothing")}
          >
            Men's Clothing
          </Button>
          <Button
           variant={
            selectedCategory === "women's clothing" ? "dark" : "outline-dark"
          }
            className="outline-dark me-2"
            onClick={() => FilterProduct("women's clothing")}
          >
            Women's Clothing
          </Button>
          <Button
           variant={
            selectedCategory === "jewelery" ? "dark" : "outline-dark"
          }
            className="outline-dark me-2"
            onClick={() => FilterProduct("jewelery")}
          >
            Jewelery
          </Button>
          <Button
           variant={
            selectedCategory === "electronics" ? "dark" : "outline-dark"
          }
            className="outline-dark me-2"
            onClick={() => FilterProduct("electronics")}
          >
            Electronics
          </Button>
        </div>

        <div className="w-full grid grid-cols-4 gap-4">
          {filterData.map((products) => {
            return (
              <Card className=" card h-100 text-center p-4 card" key={products.id}>
                <Card.Img
                  variant="top"
                  src={products.image}
                  className="card-img h-60"
                />
                <Card.Body>
                  <Card.Title className="mb-0 ">
                    {products.title.slice(0, 12)}
                  </Card.Title>
                  <Card.Text className="font-bold">
                    $ {products.price}{" "}
                  </Card.Text>
                  <Button variant="outline-dark me-2" onClick={()=>handleClick(products.id)} >Buy Now</Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LatestProduct;
