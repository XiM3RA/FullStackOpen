import { useState } from "react";

const Blog = ({ blog, addLike }) => {
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

  return (
    <>
      {toggle ? (
        <div style={blogStyle}>
          {blog.title} {blog.author}
          <button onClick={() => flipToggle(!toggle)} type="text">
            view
          </button>
        </div>
      ) : (
        <div style={blogStyle}>
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
        </div>
      )}
    </>
  );
};

export default Blog;
