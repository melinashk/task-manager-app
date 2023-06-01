// // const mongodb = require('mongodb');
// // const MongoClient = mongodb.MongoClient

// // // const connectionURL = 'mongodb://localhost:27017/Local MongoDb';
// // // const databaseName = 'task-manager'

// // // MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
// // //   if (error){
// // //     return console.log('Unable to connect to database')

// // //   } else {
// // //     console.log('Connected correctly')
// // //   }
// // // })

// // const mongodb = require('mongodb');
// // const MongoClient = mongodb.MongoClient;

// // const connectionURL = 'mongodb://127.0.0.1:27017/test';
// // const databaseName = 'task-manager';

// // const client = new MongoClient(connectionURL,{
// //   useNewUrlParser: true,
// // })
// // async function run(){
// //   try{
// //     await client.connect()
// //     console.log('Connection successful')
// //   }catch(error){
// //     console.log("Connection failed")
// //   }
// //   const db = client.db(databaseName);
// //   db.collection('users').insertOne({
// //     name: 'Melina',
// //     age: 27
// //   }, (error, result) => {
// //     if (error) {
// //       return console.log('Error inserting document:');
// //     // } else {
// //     //   console.log('Document inserted successfully:', result);
// //      }
// //     console.log(result.ops)
// //     //client.close(); // Close the connection
// //   });

// //   // db.collection('users').insertMany([
// //   //   {
// //   //     name: 'Jen',
// //   //     age: 28
// //   //   },{
// //   //     name: 'Gunther',
// //   //     age: 27
// //   //   }
// //   // ], (error, result) => {
// //   //   if (error){
// //   //     return console.log('Unable to connect')
// //   //   }
// //   // })
// // }
// const {MongoClient, ObjectID}= require('mongodb');


// const connectionURL = 'mongodb://127.0.0.1:27017/test';
// const database = 'task-manager';

// // const id = new ObjectID()
// // console.log("ID: ",id.id.length)
// // console.log("ID: ",id.toHexString().length)
// // const timeStamp = id.getTimestamp()
// // console.log('Time Stamp: ', timeStamp)

// const client = new MongoClient(connectionURL,{
//     useNewUrlParser: true,
// })

// async function run(){
//     try{
//         await client.connect()
//         console.log('Connection successful')
//     }catch(error){
//         console.log(error)
//     }
//     const db = client.db(database);

//     // db.collection('Users').insertOne({
//     //   //_id: id,
//     //   name: 'Melina',
//     //   age: 27
//     // }, (err, result) => {
//     //   if (err) {
//     //     console.log('Error inserting document:');
//     //   } else {
//     //     console.log('Document inserted successfully:', result);
//     //   }
//     //    console.log(result.ops)
//     //   client.close(); // Close the connection
//     // });

//     // db.collection('Users').insertMany([
//     //   {
//     //     name: 'Jen',
//     //     age: 27
//     //   }, {
//     //     name: 'Gunther',
//     //     age: 28
//     //   }
//     // ], (error,result) => {
//     //   if (error){
//     //     return console.log('Unable to insert')
//     //   }
//     // })


//     // db.collection('tasks').insertMany([
//     //   {
//     //     description: 'Clean the house',
//     //     completed: true
//     //   },{
//     //     description: 'Clean the bathroom',
//     //     completed: false
//     //   },{
//     //     description: 'Clean the kitchen',
//     //     completed: true
//     //   }
//     // ], (error, result) => {
//     //   if (error){
//     //     return console.log("Unable to insert task")
//     //   }else{
//     //     return console.log("Successful insertion")
//     //   }
//     //   console.log(result.ops)
//     // })



//     // db.collection('Users').findOne({_id: new ObjectID('646c530d7d5edd4668176be9')}, (error, user) => {
//     //   if(error){
//     //     return console.log('Unable to fetch')
//     //   }
//     //   console.log(user)
//     // })

//     // db.collection('Users').find({age: 27}).toArray((error, Users) => {
//     //   console.log(Users)
//     // })

//     // db.collection('Users').find({age: 27}).count((error, count) => {
//     //   console.log(count)
//     // })


//     // db.collection('tasks').findOne({_id: new ObjectID('646c3f9775a1cc42f4711fc5')}, (error, task) => {
//     //   if (error){
//     //     return console.log("Couldn't find the task")
//     //   }
//     //   console.log(task)
//     // })

//     // db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
//     //   console.log(tasks)
//     // })
    
//     // const updatePromise = db.collection('Users').updateOne({
//     //   _id: new ObjectID('646c4e6dd44ebc2a383bd9b2')
//     // }, {
//     //   // $set: {
//     //   //   name: 'Mike'
//     //   // }
//     //   $inc: {
//     //     age: 1
//     //   }

//     // })

//     // updatePromise.then((result) => {
//     //   console.log(result)
//     // }).catch((error) => {
//     //   console.log(error)
//     // })

//     // const updatePromise = db.collection('tasks').updateMany({
//     //   completed: false
//     // },{
//     //   $set:{
//     //     completed: true
//     //   }
//     // }).then((result) =>{
//     //   console.log(result.modifiedCount)
//     // }).catch((error) => {
//     //   console.log(error)
//     // })


//     // db.collection('Users').deleteMany({
//     //   age:27
//     // }).then((result) => {
//     //   console.log(result)
//     // }).catch((error) =>{
//     //   console.log(error)
//     // })


//     db.collection('tasks').deleteOne({
//       description: "Clean the room"
//     }).then ((result) => {
//       console.log(result)
//     }).catch((erro) => {
//       console.log(error)
//     })

//      }
// run()