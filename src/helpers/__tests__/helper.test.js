import { mockData } from '../../mock/mockFetch'
import { totalAllTaskValue, totalByTaskChecked } from '../helper'

test('The totalAllTaskValue function Should return the total 33', () => {
    expect(totalAllTaskValue(mockData)).toEqual(33)
})

test('The totalByTaskChecked function should return the total 10', () => {
    expect(totalByTaskChecked(mockData[0].tasks)).toEqual(10)
})
