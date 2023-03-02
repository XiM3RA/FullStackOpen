const favoriteBlog = (blog) => {
    // If list of blogs is empty return zero, hopefully this
    // is not a problem down the line
    if (blog.filter(e => e.likes).length == 0) {
        return 0 }

    const maxLikes = Math.max(...blog.map(x => x["likes"]))
    const mostLiked = blog.find((x) => x.likes == maxLikes)
    const formatted = { title: mostLiked.title,
                        author: mostLiked.author,
                        likes: mostLiked.likes
    }
    return formatted;
}


module.exports = { favoriteBlog }
