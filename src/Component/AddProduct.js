import React,{useState} from "react";
import {useNavigate} from 'react-router-dom'


const AddProduct =()=>{
    const [name,setName]=useState('')
    const [price,setPrice]=useState('')
    const [category,setCategory]=useState('')
    const [company,setCompany]=useState('')
    const [error,setError]=useState(false)
    const Navigate=useNavigate()
   
    const addProduct=async()=>{
             
        
        if(!name || !price || !category ||!company){
            setError(true)
            return false
        }
      
        console.log(name,price,category,company)
        let userId=localStorage.getItem('user')
        userId=JSON.parse(userId)._id
        const data={name,price,category,company,userId}
        let result= await fetch('http://localhost:5000/addProduct',{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-type": "application/json",  
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}` 
            }
            
        })   
        result=await result.json()     
        console.log(result)
        Navigate('/')
    }
return(
    <div className="addProduct">
        <h1>ADD PRODUCT</h1>
        <input className="inputBox" type="text" placeholder="Enter Name"
        onChange={(e)=>setName(e.target.value)} value={name} />
    {error && !name && <span className="invalid-input">Pleace Enter name</span>}
       
        <input className="inputBox" type="text" placeholder="Enter Price" 
        onChange={(e)=>setPrice(e.target.value)} value={price}/>
        {error && !price ?<span className="invalid-input">Pleace Enter price</span>:''}
       
        <input className="inputBox" type="text" placeholder="Enter Category"
        onChange={(e)=>setCategory(e.target.value)} value={category}/>
        {error && !category &&<span className="invalid-input">Pleace Enter category</span>}
       
        <input className="inputBox" type="text" placeholder="Enter Company"
        onChange={(e)=>setCompany(e.target.value)} value={company}/>
        {error && !company ?<span className="invalid-input">Pleace Enter company</span>:''}

        <button className="appButton" onClick={addProduct}>ADD PRODUCT</button>
    </div>
)
}
export default AddProduct