const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0.zcssndw.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  passwordHash: String,
})

const User = mongoose.model('User', userSchema)

const user = new User({
    notes: [ ],
    username: "root",
    name: "Superuser",
})


user.save().then(result => {
  console.log('user saved!')
  mongoose.connection.close()
})


//Note.find({}).then(result => {
//  result.forEach(note => {
//    console.log(note)
//  })
//  mongoose.connection.close()
//})
