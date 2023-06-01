const app = require('./app')
const port = process.env.PORT

// app.use((req, res, next) => {
//   if(req.method === 'GET') {
//     res.send('GET requests disabled')
//   } else {
//     next()
//   }
// })

// app.use((req, res, next) => {
//   res.status(504).send('Site is currently down. Check back soon')
// })

// const multer = require('multer')
// const upload = multer({
//   dest: 'images',
//   limits: {
//     fileSize: 1000000
//   },
//   fileFilter(req, file, cb){
//     if(!file.originalname.match(/\.(doc|docx)$/)){
//       return cb(new Error('Please upload a word document'))
//     }
//     cb(undefined, true)
//   //   cb(new Error('File must be a PDF'))
//   //   cb(undefined, true)
//   //   cb(undefined, false)
//    }
// })

// const errorMiddleware = (req, res, next) => {
//   throw new Error('From my middleware')
// }

// app.post('/upload', upload.single('upload'), (req, res) =>{
//   res.send() 
// }, (error, req, res, next) => {
//   res.status(400).send({ error: error.message})
// })




//without middleware



//with middleware

app.listen(port, () => {
  console.log('Server is on the port' + port)
})

// const myFunction = async () => {
//   const token = jwt.sign({_id: 'abc123'}, 'thisismynewcourse', {expiresIn: '7 days'})
//   console.log(token)

//   const data = jwt.verify(token, 'thisismynewcourse')
//   console.log(data)


// }

// myFunction()


// const pet ={
//   name: 'Max'
// }

// pet.toJSON =function(){
//   console.log(this)
//   return this
// }

// console.log(JSON.stringify(pet))


// const main = async() => {
//   // const task = await Task.findById('646f9689094c3ef5e8c57887')
//   // await task.populate('owner')
//   // console.log(task.owner)

//   const user = await User.findById('64707daced4f026659b9b966')
//   await user.populate('tasks')
//   console.log(user.tasks)

// }

// main()