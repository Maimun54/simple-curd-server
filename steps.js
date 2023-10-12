/*
MongoDb connection 

1.create account
2.create user with password
3.whitelist ip address
4.database>connect>driver>Node>View all code
5.change the password url 
https://www.mongodb.com/docs/drivers/node/current/usage-examples/insertOne/
*..............
1. Create Post 
2.app.post('/users',async (req,res)=>{

})
3.Make the function async to use await inside it 
4. Make sure you use the express.json() midleware to access body data 
5. access data from the body : const user =req.body
6.const result =await useCollection.insertOne(user)
7.res.send (result)


Client:

1.create fetch
2.add second parameter as a object
3.provide method: POST
4.add header :{Content-type :'application/json}
5.add body: JSON.Stringify(user)


Read: Many:
....................

1.create a cursor =useCollection.find()
2.const result = await cursor.toArray()


DELETE 

1.create app.delete('/user',async(req,res)=>{})
2.specify unique ObjectId to delete the right user
3.const query ={_id: new ObjectId(id)}
4.result =await userCollection.deleteOne(query)


Client:
1.create dynamic url with id 
2.mention the DELETE method
*/
