const express= require('express')
const mongoose=require('mongoose')
const cors= require('cors')
const {creactUser,login}= require('./src/controller/controller')
const {addProduct,findProduct,deletProduct,findProductWithId, updateProduct,searchProduct}=require('./src/controller/ProducatController')
const verifytoken=require('./src/middleware/auth')

const app=express()
app.use(express.json())
app.use(cors());

mongoose.connect('mongodb://abhishek251119:abhishek2511@ac-z8sfqfr-shard-00-00.2zhuz3d.mongodb.net:27017,ac-z8sfqfr-shard-00-01.2zhuz3d.mongodb.net:27017,ac-z8sfqfr-shard-00-02.2zhuz3d.mongodb.net:27017/?replicaSet=atlas-4htqnt-shard-0&ssl=true&authSource=admin')
.then(()=>console.log('your db is connected'))
.catch((err)=>confirm.log(err))

app.listen(process.env.port || 5000 ,function(){
    console.log('aap is runing in '+ (process.env.port || 5000))
})

app.post('/register',creactUser)
app.post('/login',login)
app.post('/addProduct',verifytoken,addProduct)
app.get('/product',verifytoken,findProduct)
app.delete('/deleteProduct/:id',verifytoken,deletProduct)
app.get('/product/:id',verifytoken,findProductWithId)
app.put('/updateProduct/:id',verifytoken,updateProduct)
app.get('/search/:key',verifytoken,searchProduct)