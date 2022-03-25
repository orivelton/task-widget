import { useEffect, useState } from 'react'
import ProgressBar from './components/ProgressBar'
import TaskList from './components/TaskList'
import { getTasks } from './helpers/api'
import { totalAllTaskValue } from './helpers/helper'
import TaskContext from './hooks/task-context'

const App = () => {
  const [tasks, setTasks] = useState({
    progressBar: 0,
    totalAllTaskValue: 0,
    group: []
  })

  useEffect(() => {
    const callApi = async () => {
      const allTasks = await getTasks()
      setTasks(prev => ({
        ...prev,
        totalAllTaskValue: totalAllTaskValue(allTasks),
        group: allTasks
      }))
    }

    callApi()
  }, [])

  return (
    <TaskContext.Provider value={[tasks, setTasks]}>
      <div className="task-widget">
        <ProgressBar />
        <TaskList />
      </div>
    </TaskContext.Provider>
  )
}

export default App

