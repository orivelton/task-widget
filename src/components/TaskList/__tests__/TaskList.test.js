import React from 'react'
import { act, render } from '@testing-library/react'
import TaskList from '../index'
import TaskProvider from '../../TaskProvider'
import { mockFetch } from '../../../mock/mockFetch'

beforeEach(() => {
    mockFetch()
})

test('Render TaskList component', async () => {
    let component
    await act(async () => {
        component = render(
            <TaskProvider>
                <TaskList />
            </TaskProvider>
        )
    })

    const { getByText } = component

    expect(getByText(/general infos/i)).toBeInTheDocument()
})
