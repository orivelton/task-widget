const totalAllTaskValue = allTasks => {
    const allValues = []
    allTasks.forEach(({tasks}) => {
        tasks.forEach(({ value }) => {
            allValues.push(value)
        })
    })

    return allValues.reduce((a, b) => a + b)
}

const totalByTaskChecked = task => task.map(({ value, checked }) => (checked ? value : 0)).reduce((a , b) => a + b)

export { totalAllTaskValue, totalByTaskChecked }
