require('../src/db/mongoose')
const User = require('../src/models/user')

//646d849b1482f1f9831ab056

// User.findByIdAndUpdate('646d849b1482f1f9831ab056', {age : 1}).then((user) => {
//   console.log(user)
//   return User.countDocuments({age: 1})
// }).then((result) => {
//   console.log(result)
// }).catch((e) => {
//   console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, {age})
  const count = await User.countDocuments({age})
  return count
}

updateAgeAndCount("646d849b1482f1f9831ab056", 2).then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})