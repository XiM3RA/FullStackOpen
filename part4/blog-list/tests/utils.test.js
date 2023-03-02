const { totalLikes } = require('../utils/total_likes')
const { favoriteBlog } = require('../utils/favoriteBlog')
const { mostBlogs } = require('../utils/mostBlogs')
const { mostLikes } = require('../utils/mostLikes')
const { blogs } = require('./blogs.txt')

    const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]

    const listWithManyBlogs = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 10,
      __v: 0
    }
  ]

describe('total likes', () => {

    test('of empty list is zero', () => {
        expect(totalLikes([])).toBe(0)
    })

    test('when list has only one blog equals the likes of that', () => {
        expect(totalLikes(listWithOneBlog)).toBe(5)
    })

    test('of a bigger list is calculated right', () => {
        expect(totalLikes(listWithManyBlogs)).toBe(15)
    })
})

describe('favorite blog', () => {

    test('of empty list is zero', () => {
        expect(favoriteBlog([])).toBe(0)
    })

    test('when list has only one blog', () => {
        expect(favoriteBlog(listWithOneBlog)).toEqual({
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            likes: 5
        })
    })
})

describe('most blogs', () => {

    test('of empty list is zero', () => {
        expect(mostBlogs([])).toBe(0)
    })

    test('when list has only one blog', () => {
        expect(mostBlogs(listWithOneBlog)).toEqual({
            author: 'Edsger W. Dijkstra',
            blogs: 1
        })
    })

    test('when list has many blogs', () => {
        expect(mostBlogs(blogs)).toEqual({
            author: "Robert C. Martin",
            blogs: 3
        })
    })
})

describe('most likes', () => {

    test('of empty list is zero', () => {
        expect(mostLikes([])).toBe(0)
    })

    test('when list has only one blog', () => {
        expect(mostLikes(listWithOneBlog)).toEqual({
            author: 'Edsger W. Dijkstra',
            likes: 5
        })
    })

    test('When list has many blogs', () => {
        expect(mostLikes(blogs)).toEqual({
            author: "Edsger W. Dijkstra",
            likes: 17
        })
    })
})
