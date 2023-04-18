import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog'

describe('<Blog />', () => {
    let blog

    beforeEach(() => {
        blog = {
            title: 'A test entry',
            author: 'A test author',
            url: 'www.test.com',
            likes: 7,
            user: 'myself'
        }
    })

        test('renders only the title and author', () => {
            const { container } = render(<Blog blog={blog} />)
            const div = container.querySelector('.blog')
            expect(div).toHaveTextContent('A test entry')
            expect(div).toHaveTextContent('A test author')
            expect(div).not.toHaveTextContent('www.test.com')
            expect(div).not.toHaveTextContent('likes')
            expect(div).not.toHaveTextContent('myself')
        })

        test('renders the URL and number of likes when the view button is clicked', async () => {
            const { container } = render(<Blog blog={blog} />)
            const user = userEvent.setup()
            const viewButton = screen.getByText('view')
            await user.click(viewButton)
            const div = container.querySelector('.expandedBlog')
            expect(div).toHaveTextContent('www.test.com')
            expect(div).toHaveTextContent('likes: 7')
        })

        test('ensure that when like button is clicked twice, event handler component received as props is called twice', async () => {
            const mockHandler = jest.fn()
            render(<Blog blog={blog} addLike={mockHandler} />)
            const viewButton = screen.getByText('view')
            const user = userEvent.setup()
            await user.click(viewButton)

            const button = screen.getByText('like')
            await user.click(button)
            await user.click(button)

            expect(mockHandler.mock.calls).toHaveLength(2)
        })
})

