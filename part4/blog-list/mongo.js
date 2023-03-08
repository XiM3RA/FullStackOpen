const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0.zcssndw.mongodb.net/testBloglist?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
})

const Blog = mongoose.model('Blog', noteSchema)

const blog = new Blog({
  title: 'A title',
  author: 'somebody',
  url: 'something',
  likes: 5,
})

// Save blog entry
blog.save().then(result => {
  console.log('blog saved!')
  mongoose.connection.close()
})


// Return all blog entries
//Blog.find({}).then(result => {
//  result.forEach(blog => {
//    console.log(blogs)
//  })
//  mongoose.connection.close()
//})
