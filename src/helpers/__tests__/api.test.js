import { getTasks } from '../api'

test('Call the getTasks function', async () => {
    const apiData = await getTasks()
    expect(apiData.length).toEqual(4)
})
