const mongoose=require('mongoose')
const ObjectId= mongoose.Schema.Types.ObjectId
const productSchema=new mongoose.Schema({
name:String,
price:String,
category:String,
userId:ObjectId,
company:String
})
module.exports=mongoose.model('Produca',productSchema)