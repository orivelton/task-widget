import React from 'react'
import { act, render } from '@testing-library/react'
import ProgressBar from '../index'
import TaskProvider from '../../TaskProvider'
import { mockFetch } from '../../../mock/mockFetch'

beforeEach(() => {
    mockFetch()
})


test('Render ProgressBar component', async () => {
    let component
    await act(async () => {
        component = render(
            <TaskProvider>
                <ProgressBar />
            </TaskProvider>
        )
    })

    const { getByRole, getByText } = component
    expect(getByRole('heading', { name: /lodgify grouped tasks/i })).toBeInTheDocument()
    expect(getByText(/30%/i)).toBeInTheDocument()
})