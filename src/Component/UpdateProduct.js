import React, { useState,useEffect } from "react";
import {useParams,useNavigate} from "react-router-dom"

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params=useParams()
  const Navigate=useNavigate()

  useEffect(()=>{
    getProductDetails()
  },[])
  

  const getProductDetails = async () => {
    try {
      console.log(params)
      let result = await fetch(`http://localhost:5000/product/${params.id}`,{
        headers:{
          authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
      });
      result = await result.json();
      console.log(result)
      setName(result.name);
      setPrice(result.price)
      setCategory(result.category)
      setCompany(result.company)
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };
  const updateProduct = async() => {
    console.warn(name, price, category, company);
    const data={name,price,category,company}
    let result=await fetch(`http://localhost:5000/updateProduct/${params.id}`,{
      method:'PUT',
      body:JSON.stringify(data),
      headers:{
        "Content-type": "application/json",
        authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    })
    result = await result.json()
    console.log(result)
    Navigate('/')
  };
  return (
    <div className="updateProduct">
      <h1>UPDATE PRODUCT</h1>
      <input
        type="text"
        placeholder="enter name"
        className="inputBox"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <input
        type="text"
        placeholder="enter price"
        className="inputBox"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="text"
        placeholder="enter category"
        className="inputBox"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        type="text"
        placeholder="enter company"
        className="inputBox"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <button className="appButton" onClick={updateProduct}>
        UPDATE PRODUCT
      </button>
    </div>
  );
};
export default UpdateProduct;
