import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BlogForm from './BlogForm'

test('<BlogForm /> updates parent state and calls onSubmit', () => {
  const createBlog = jest.fn()

  const component = render(
    <BlogForm addBlog={createBlog} />
  )

  const input = component.container.querySelector('#title')
  const author = component.container.querySelector('#author')
  const url = component.container.querySelector('#url')
  const form = component.container.querySelector('form')

  fireEvent.change(input, {
    target: { value: 'A test title' }
  })
  fireEvent.change(author, {
    target: { value: 'A test author' }
  })
  fireEvent.change(url, {
    target: { value: 'A test url' }
  })
  fireEvent.submit(form)

  expect(createBlog.mock.calls).toHaveLength(1)
  expect(createBlog.mock.calls[0][0].title).toBe('A test title' )
  expect(createBlog.mock.calls[0][0].author).toBe('A test author' )
  expect(createBlog.mock.calls[0][0].url).toBe('A test url' )
})
