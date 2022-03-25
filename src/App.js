import ProgressBar from './components/ProgressBar'
import TaskList from './components/TaskList'
import TaskProvider from './components/TaskProvider'


const App = () => {
  return (
    <TaskProvider>
      <div className="task-widget">
        <ProgressBar />
        <TaskList />
      </div>
    </TaskProvider>
  )
}

export default App
