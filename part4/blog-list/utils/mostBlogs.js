const mostBlogs = (blogs) => {
  if (blogs.filter((e) => e.likes).length == 0) {
    return 0;
  }

  const n = blogs.length;

  let hash = new Map();
  for (let i = 0; i < n; i++) {
    if (hash.has(blogs[i].author)) {
      hash.set(blogs[i].author, hash.get(blogs[i].author) + 1);
    } else {
      hash.set(blogs[i].author, 1);
    }
  }

  let max = 0;
  let res = -1;
  hash.forEach((value, key) => {
    if (max < value) {
      res = key;
      max = value;
    }
  });

  return { author: res, blogs: max };
};

module.exports = { mostBlogs };
