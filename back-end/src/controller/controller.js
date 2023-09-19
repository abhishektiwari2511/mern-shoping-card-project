const User = require('../model/model')
const jwt= require("jsonwebtoken")

const jsonWebTokenKey='jsonWebTokenKey'

const creactUser= async(req,res)=>{
    let data= req.body
    let result = await User.create(data)
    result=result.toObject()
    delete result.password
    // if(result){
    jwt.sign({result},jsonWebTokenKey,{expiresIn:'2h'},(err,token)=>{
        if(err) { res.send({msg:'your token is not available'})}
        if(token){
            res.setHeader('authorization',token)
            res.send({result,token:token})
        }
    })
// }
   
}
const login=async function(req,res){
    
    const data= req.body
    if(data.password && data.email){
     // let result =await User.findOne(data).select({password:0})
        let result= await User.findOne(data).select("-password")
        if(result){
            jwt.sign({result},jsonWebTokenKey,{expiresIn:"2h"},function(err,token){
                if(err) res.send({msg:'your token is not available'})
                if(token){

                    res.send({result,token:token})
                }
            })
            
        }
        else {
            res.send({result:'no use found'})
        }
    }else{
        res.send({result:'pleace provide email and password'})
    }

}
module.exports ={ creactUser,login}