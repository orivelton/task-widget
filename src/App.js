import { useEffect, useState } from 'react'
import ProgressBar from './components/ProgressBar'
import TaskList from './components/TaskList'
import { getTasks } from './helpers/api'
import TaskContext from './hooks/task-context'

const App = () => {
  const [tasks, setTasks] = useState()

  useEffect(() => {
    const callApi = async () => {
      const allTasks = await getTasks()
      setTasks(allTasks)
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
