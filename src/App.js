import { useEffect, useState } from 'react'
import ProgressBar from './components/ProgressBar'
import TaskList from './components/TaskList'
import { getTasks } from './helpers/api'
import { isCompleted, totalAllTaskValue, totalByTaskCheked } from './helpers/helper'
import TaskContext from './hooks/task-context'

const App = () => {
  const [tasks, setTasks] = useState()

  useEffect(() => {
    const callApi = async () => {
      const allTasks = await getTasks()
      allTasks.totlaTaskValue = totalAllTaskValue(allTasks)
      const abc = []
      const allTasksAdapter = allTasks.map(item => {
        abc.push((totalByTaskCheked(item.tasks) * 100) / allTasks.totlaTaskValue)
        item.completed = isCompleted(item.tasks)
        return item
      })
      
      allTasksAdapter.progressBar = abc.reduce((a, b) => a + b)
      console.log(allTasksAdapter)

      setTasks(allTasksAdapter)
    }

    callApi()
  }, [])

  return (
    <TaskContext.Provider value={[tasks, setTasks]}>
      <ProgressBar />
      <TaskList />
    </TaskContext.Provider>
  )
}

export default App
