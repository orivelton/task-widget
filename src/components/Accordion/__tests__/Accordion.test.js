import React from 'react'
import { act, fireEvent, render } from '@testing-library/react'
import Accordion from '../index'
import TaskProvider from '../../TaskProvider'
import { mockFetch } from '../../../mock/mockFetch'

beforeEach(() => {
    mockFetch()
})

afterEach(() => { jest.restoreAllMocks()})

const props = {
    "name": "General Infos",
    "taskList": [
        {
            "description": "Add name and surname",
            "value": 10,
            "checked": true
        },
        {
            "description": "Add email",
            "value": 15,
            "checked": false
        }
    ]
}

test('Render Accordion component', async () => {
    let component
    await act(async () => {
        component = render(
            <TaskProvider>
                <Accordion {...props} />
            </TaskProvider>
        )
    });

    const tab = component.container.querySelector('.accordion__tab')
    const accordion = component.container.querySelector('.accordion')
    const checkbox2 = component.container.querySelector('#Addnameandsurnameundefined10')
    const checkbox1 = component.container.querySelector('#Addemailundefined15')

    fireEvent.click(tab)
    expect(accordion.className.includes('open')).toBeTruthy();

    fireEvent.click(checkbox1)
    expect(checkbox1.checked).toBeFalsy()

    fireEvent.click(checkbox2)
    expect(checkbox2.checked).toBeTruthy()
})

const props1 = {
    "name": "General Infos",
    "taskList": [
        {
            "name": "Add name and surname",
            "value": 10,
            "checked": true
        }
    ]
}

test('Render Accordion component as all selected', async () => {
    let component
    await act(async () => {
        component = render(
            <TaskProvider>
                <Accordion {...props1} />
            </TaskProvider>
        )
    });

})
