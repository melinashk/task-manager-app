const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
})


// const me = new User({
//   name: 'Mike',
//   email: 'MYEMAIL@MEAD.IO',
//   password: 'pass     '
// })

// me.save().then(() =>{
//   console.log(me)
// }).catch((error) =>{
//   console.log('Error', error)
// })




// const work = new Task({
//   description: '    Clean the room',
//   // completed: true

// })

// work.save().then(() => {
//   console.log(work)
// }).catch((error) => {
//   console.log('Error ', error)
// })