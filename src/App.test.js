import React from 'react'
import { act, render } from '@testing-library/react'
import App from './App'
import TaskProvider from './components/TaskProvider'
import { mockFetch } from './mock/mockFetch'

beforeEach(() => {
    mockFetch()
})

test('Render App component', async () => {
    let component
    await act(async () => {
        component = render(
            <TaskProvider>
                <App />
            </TaskProvider>
        )
    })

    const { getByRole, getByText} = component

    expect(getByRole('heading', { name: /lodgify grouped tasks/i})).toBeInTheDocument()
    expect(getByText(/30%/i)).toBeInTheDocument()
})
