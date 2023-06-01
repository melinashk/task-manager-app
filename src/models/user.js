const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Task = require('./task')
const DeleteOneOperation = require('mongodb/lib/operations/delete_one')


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error('Email is invalid')
      }
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value){
      if(value.length <= 6){
        throw new Error('Password should have more tha 6 characters')
      } else if (value === 'password'){
        throw new Error('Your password cannot be password.')
      }
      // if (value.toLowerCase().includes('password')){
      //   throw new Error('Your password cannot be password.')
      // }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value){
      if(value < 0){
        throw new Error('Age must be a positive number')
      }
    }
  },

  tokens:[{
    token:{ 
      type: String,
      required: true
    }
  }],
  avatar: {
    type: Buffer
  }
},{
  timestamps: true
})


//virtual property
userSchema.virtual('tasks', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'owner'
})


userSchema.methods.toJSON = function() {
  const user = this 
  const userObject = user.toObject()

  delete userObject.password
  delete userObject.tokens
  delete userObject.avatar
  return userObject
}


userSchema.methods.generateAuthToken = async function () {
  const user = this
  const token = jwt.sign({ _id: user._id.toString() }, 'thisismynewcourse')

  user.tokens = user.tokens.concat({ token })
  await user.save()

  return token
}

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email })

  if (!user) {
      throw new Error('Unable to login')
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
      throw new Error('Unable to login')
  }

  return user
}

// Hash the plain text password before saving
userSchema.pre('save', async function (next) {
  const user = this

  if (user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, 8)
  }

  next()
})

//Delete user tasks when usr is removed(use of middleware)

userSchema.pre('remove',async function(next){
  const user = this;
 await Task.deleteMany({owner:user._id})
  next();
})





// userSchema.pre('deleteOne', async function (next) {
//   const user = this;
//   await user.model('Task').deleteMany({ owner: user._id });
//   next();
// });

const User = mongoose.model('User', userSchema)

module.exports = User






















