const isCompleted = tasks => !tasks.filter(task => !task.checked).length

const totalAllTaskValue = allTaks => {
    const allValues = []
    allTaks.forEach(({tasks}) => {
        tasks.map(({ value }) => {
            allValues.push(value)
        })
    })


    return allValues.reduce((a, b) => a + b)
}

const totalByTaskCheked = task => task.map(({ value, checked }) => (checked ? value : 0)).reduce((a , b) => a + b)

export { isCompleted, totalAllTaskValue, totalByTaskCheked }