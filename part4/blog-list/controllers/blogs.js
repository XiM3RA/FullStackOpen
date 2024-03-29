const blogsRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const Blog = require("../models/blog");
const User = require("../models/user");

const getTokenFrom = (request) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.startsWith("Bearer ")) {
    return authorization.replace("Bearer ", "");
  }
  return null;
};

blogsRouter.get("/", async (request, response) => {
  //    Blog.find({}).then(blogs => {
  //        response.json(blogs)
  const blogs = await Blog.find({}).populate("user", { username: 1, name: 1 });
  response.json(blogs.map((blog) => blog.toJSON()));
});

blogsRouter.get("/:id", async (request, response) => {
  //    Blog.findById(request.params.id)
  //    .then(blog => {
  //        if (blog) {
  //            response.json(blog)
  //        } else {
  //            response.status(404).end()
  //        }
  //    })
  //    .catch(error => next(error))
  const blog = await Blog.findById(request.params.id);
  if (blog) {
    response.json(blog);
  } else {
    response.status(404).end();
  }
});

blogsRouter.post("/", async (request, response) => {
  const body = request.body;
  const decodedToken = jwt.verify(getTokenFrom(request), process.env.SECRET);
  if (!decodedToken.id) {
    return response.status(401).json({ error: "token invalid" });
  }

  const user = await User.findById(decodedToken.id);

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes || 0,
    user: user._id,
  });

  const savedBlog = await blog.save();
  user.blogs = user.blogs.concat(savedBlog._id);
  await user.save();
  response.status(201).json(savedBlog.toJSON());
  //    blog.save()
  //    .then(savedBlog => {
  //        response.json(savedBlog)
  //    })
  //    .catch(error => next(error))
});

blogsRouter.delete("/:id", async (request, response) => {
  //  Blog.findByIdAndRemove(request.params.id)
  //    .then(() => {
  //      response.status(204).end();
  //    })
  //    .catch((error) => next(error));
  await Blog.findByIdAndRemove(request.params.id);
  response.status(204).end();
});

blogsRouter.put("/:id", async (request, response) => {
  const body = request.body;

  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes || 0,
  };
  const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, {
    new: true,
  }).populate("user", { username: 1, name: 1 });

  updatedBlog
    ? response.status(200).json(updatedBlog.toJSON())
    : response.status(404).end();

  //  Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
  //    .then((updatedBlog) => {
  //      response.json(updatedBlog);
  //    })
  //    .catch((error) => next(error));
});

module.exports = blogsRouter;
