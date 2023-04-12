import { useState } from 'react'

const BlogForm = ({ addBlog }) => {
    const [newBlog, setNewBlog] = useState({
        title: "",
        author: "",
        url: "",
        likes: 0
    })

    const appendBlog = (event) => {
        event.preventDefault()
        addBlog({
            title: newBlog.title,
            author: newBlog.author,
            url: newBlog.url,
            likes: newBlog.likes
        })
        setNewBlog({ title: "", author: "", url: "", likes: 0 })
    }

    function handleBlogChange(event) {
        const {name, value} = event.target
        setNewBlog(prevNewBlog => {
            return {
                ...prevNewBlog,
                [name]: value
            }
        })
    }

    return (
      <div>
      <h2>create new</h2>
        <form onSubmit={appendBlog}>
        title:
        <input
          type="text"
          value={newBlog.title}
          name="title"
          onChange={handleBlogChange}
        />
        <br></br>
        author:
        <input
          type="text"
          value={newBlog.author}
          name="author"
          onChange={handleBlogChange}
        />
        <br></br>
        url:
        <input
          type="text"
          value={newBlog.url}
          name="url"
          onChange={handleBlogChange}
        />
        <br></br>
        <button type="submit">create</button>
      </form>
      </div>
    )
}

export default BlogForm
