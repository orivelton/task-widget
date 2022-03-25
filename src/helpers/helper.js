const totalAllTaskValue = allTasks => {
    const allValues = []
    allTasks.forEach(({tasks}) => {
        tasks.forEach(({ value }) => {
            allValues.push(value)
        })
    })

    return allValues.reduce((a, b) => a + b)
}

const updateTasks = ({ tasks, description, name }) => tasks.group.map(item => {
    if(item.name === name) {
        item.tasks.forEach(task => {
            if(task?.description === description || task?.name === description) {
                task.checked = !task.checked
            }
            return task
        })
    }
    return item
});

const totalByTaskChecked = task => task.map(({ value, checked }) => (checked ? value : 0)).reduce((a , b) => a + b)

export { totalAllTaskValue, totalByTaskChecked, updateTasks }
