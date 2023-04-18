import { useState } from "react";

const Blog = ({ blog, addLike, removeBlog, loggedUser }) => {
  const [toggle, flipToggle] = useState(true);

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };

  const Like = () => {
    const updatedBlog = {
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: ++blog.likes,
      user: blog.user.id,
    };
    addLike(blog.id, updatedBlog);
  };

  const Delete = () => {
    if (loggedUser.username === blog.user.username) {
      if (window.confirm(`Remove blog ${blog.title}?`)) {
        removeBlog(blog.id);
      }
    }
  };

  return (
    <>
      {toggle ? (
        <div style={blogStyle} className="blog">
          {blog.title} {blog.author}
          <button onClick={() => flipToggle(!toggle)} type="text">
            view
          </button>
        </div>
      ) : (
        <div style={blogStyle} className="expandedBlog">
          {blog.title} {blog.author}{" "}
          <button onClick={() => flipToggle(!toggle)} type="text">
            hide
          </button>
          <br></br>
          {blog.url}
          <br></br>
          likes: {blog.likes}{" "}
          <button type="text" onClick={Like}>
            like
          </button>
          <br></br>
          {blog.user.name}
          <br></br>
          <button onClick={Delete} type="text">
            remove
          </button>
        </div>
      )}
    </>
  );
};

export default Blog;
