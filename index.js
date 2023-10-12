const express =require('express');
const cors=require('cors')
const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
const app=express();
const port =process.env.PORT || 5000

// midleware
app.use(cors());
app.use(express.json())


// maimunislam407
// Hns0zJuRpgfYRUmR


const uri = "mongodb+srv://maimunislam407:Hns0zJuRpgfYRUmR@cluster0.pl4mu3l.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)



    await client.connect();
   
    
    // const database = client.db("usersDB");
    // const userCollection = database.collection("users");

     const userCollection = client.db('usersDB').collection('users');
// for all users
     app.get('/users',async(req,res)=>{
      const cursor =userCollection.find()
      const result =await cursor.toArray()
      res.send(result)
     })
  // for update user
     app.get('/users/:id', async(req,res)=>{ 
      const id =req.params.id;
      const query ={_id: new ObjectId(id)}
      const user = await userCollection.findOne(query);
      res.send(user)
     })
//for single user
    app.post('/users',async(req,res)=>{
        const user =req.body;
        console.log('new user',user);

        const result = await userCollection.insertOne(user);
        res.send(result)
    })
//update user
app.put('/users/:id',async(req,res)=>{
  const id =req.params.id;
  const user =req.body
  console.log(id,user)
  const filter = {_id : new ObjectId(id)}
  const option = {upsert:true}
  const updatedUser = {
    $set:{
      name:user.name,
      email:user.email

    }
  }
  const result =await userCollection.updateOne(filter,updatedUser,option) 
  res.send(result)
})
    app.delete('/users/:id',async(req,res)=>{
      const id =req.params.id;
      console.log('please delete form database',id)
      const query ={_id:new ObjectId(id)}
      const result =await userCollection.deleteOne(query)
      res.send(result);
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close(); we do not want to close connection with database
  }
}
run().catch(console.dir);




app.get('/',(req,res)=>{
    res.send('Simple Curd is Running')
})

app.listen(port,()=>{
    console.log(`Simple curd is running on port: ${port}`)
})