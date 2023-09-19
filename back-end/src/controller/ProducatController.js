const Product=require('../model/producat')

const addProduct=async(req,res)=>{
    const data=req.body;
    const result= await Product.create(data)
    res.send(result)

}
const findProduct= async(req,res)=>{
    const result= await Product.find()
    if(result.length<0){
        res.send({result:'no product in your db'})
    }else{
        res.send(result)
    }
}
const deletProduct=async(req,res)=>{
    const data=req.params.id
    const result= await Product.deleteOne({_id:data})
    res.send(result)
}

const findProductWithId = async (req, res) => {
  try {
      const id = req.params.id;
      if(!id){
        res.send({msg:"pleace provide Id"})
      }
      const result = await Product.findById(id);
      if (result) {
        res.send(result);
      } else {
        res.send({ result: 'no data found' });
      }
    } catch (error) {
      res.status(500).send({ error: 'An error occurred while finding the product.' });
    }
  };
  const updateProduct= async (req,res)=>{
    const id=req.params.id
    const data=req.body
    if(!id){
      res.send({msg:'pleace provaid id'})
    }
    const result= await Product.updateOne(
      {_id:id},
      {
        $set:data
      })
       res.send(result)
      //  result?res.send(result):res.send({msg:'we are not able to update you data '})
  }
  const searchProduct=async(req,res)=>{
    const key=req.params.key
   const result= await Product.find({
    "$or":[
      {name:{$regex:key}},
      {price:{$regex:key}},
      {category:{$regex:key}},
      {company:{$regex:key}}
    ]

   })
  //  console.log(result)
   res.send(result)
  }

module.exports={addProduct,findProduct,deletProduct,findProductWithId,updateProduct,searchProduct}