const jwt= require('jsonwebtoken')
const jsonWebTokenKey='jsonWebTokenKey'

const verifytoken =(req,res,next)=>{
    let token=req.headers['authorization']
    if(token){
        token =token.split(' ')
    token=token[1]
jwt.verify(token, jsonWebTokenKey,(err,valid)=>{
    if(err){
    res.send({msg:'some problem in your token pleace check again the token'})
    }
    if(valid){
        next()
    }
})
}else{
    res.status(403).send({msg:'token is requier'})
}
}
module.exports=verifytoken