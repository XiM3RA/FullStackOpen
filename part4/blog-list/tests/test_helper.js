const Blog = require('../models/blog')

const initialBlogs = [
    {
        title: 'HTML is easy',
        author: 'Author1',
        url: 'www.google.com',
        likes: 1
    },
    {
        title: 'Browser can execute only JavaScript',
        author: 'Author2',
        url: 'www.fakesite.com',
        likes:2
    }
]

const nonExistingId = async () => {
    const blog = new Blog({ content: 'willremovethissoon' })
    await blog.save()
    await blog.remove()

    return blog._id.toString()
}

const blogsInDb = async () => {
    const blogs = await Blog.find({})
    return blogs.map(blog => blog.toJSON())
}

module.exports = {
    initialBlogs, nonExistingId, blogsInDb
}
