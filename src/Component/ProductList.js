import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

const ProductList = ()=>{
    const [product,setProduct]=useState([])
  
    useEffect(()=>{
        
        getProduct()
    },[])

    const getProduct=async()=>{
        let result= await fetch('http://localhost:5000/product',{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
        result= await result.json()
        // console.log(result)
        setProduct(result)
    }
    const deleteProduct=async(id)=>{
        let result= await fetch(`http://localhost:5000/deleteProduct/${id}`,{
            method:"DELETE",
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
        result=await result.json()
        console.log(result)
        getProduct()

    }
    const searchProduct= async (e)=>{
    //    console.log(e.target.value)
       const key=e.target.value
       if(key){

           let result= await fetch(`http://localhost:5000/search/${key}`,{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
           })
           result=await result.json()
        //    console.log(result)
           if(result){
            setProduct(result)
           }
       }else{
        getProduct()
       }
    }
   
    return (
        <div className='product-list'>
            <h1>PRODUCT LIST</h1>
            <input type='text' placeholder='Search Product' className='serch-product-box'
            onChange={searchProduct}/>
            <ul>
                <li>s.no</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>company</li>
                <li>Opreation</li>
            </ul>
            {
               product.length>0? product.map((item,index)=>
                    <ul key={index}>
                        <li>{index+1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                        <li>{item.company}</li>
                        <li><button onClick={()=>{deleteProduct(item._id)}}>DELETE</button>
                        <Link to={"/Update/"+item._id}>UPDATE</Link></li>
                    </ul>
                ):<h1>No Product Found</h1>
            }
        </div>
    )
}
export default ProductList