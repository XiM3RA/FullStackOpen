const totalLikes = (blogs) => {
    return blogs.reduce((a, x) => {
        return a + x["likes"];
    }, 0);
}

module.exports = { totalLikes }
