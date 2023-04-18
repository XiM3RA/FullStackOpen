import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
// This is for testing the importance button functions
import userEvent from '@testing-library/user-event'
import Note from './Note'

test('renders content', () => {
    const note = {
        content: 'Component testing is done with react-testing-library',
        important: true
    }

    render(<Note note={note} />)

    // Use the debug method of the screen object to print HTML produced by
    // the component to the console
    screen.debug()

    // Use the screen object to access the element (instead of the DOM in this
    // case), make sure this element exists (ie was rendered)
    const element = screen.getByText('Component testing is done with react-testing-library')

    // Only prints the desired part of the component
    screen.debug(element)
    expect(element).toBeDefined()

    const { container } = render(<Note note={note} />)
    const div = container.querySelector('.note')
    expect(div).toHaveTextContent(
        'Component testing is done with react-testing-library'
    )
})

test('clicking the button calls event handler once', async () => {
    const note = {
        content: 'Component testing is done with react-testing-library',
        important: true
    }

    // Used as the event handler
    const mockHandler = jest.fn()

    render(<Note note={note} toggleImportance={mockHandler} />)

    // In order to interact with the rendered component using events, a new
    // session must be started with the userEvent object
    const user = userEvent.setup()
    const button = screen.getByText('make not important')
    await user.click(button)

    // Ensure mock function has been called exactly once
    expect(mockHandler.mock.calls).toHaveLength(1)
})

/* Mock objects and functions are fake components commonly used in testing
 * which replace the dependencies of the components being tested. Mocks allow
 * for returning hardcoded inputs and monitoring the number of method calls
 * and parameters during testing. */
