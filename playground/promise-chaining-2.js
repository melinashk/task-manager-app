require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndRemove('646c9f0d7b55d28927abc0a1').then((task) => {
//   console.log(task)
//   return Task.countDocuments({completed: true})
// }).then ((result) => {
//   console.log(result)
// }).catch((e) => {
//   console.log(e)
// })

const deleteTaskAndCount = async (id) => {
  const task = await Task. findByIdAndRemove(id)
  const count = await Task.countDocuments({completed: false})
  return count
}

deleteTaskAndCount('646da71bcabb8399e4f76f77').then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})