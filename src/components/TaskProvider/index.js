import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getTasks } from '../../helpers/api'
import { totalAllTaskValue } from '../../helpers/helper'
import TaskContext from '../../hooks/task-context'
import { ReactComponent as Loading } from '../../assets/images/loading.svg'


const TaskProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
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
          setLoading(false)
        }
    
        callApi()
    }, [])

    return (
        <TaskContext.Provider value={[tasks, setTasks]}>
            { loading ? <Loading /> : children }
        </TaskContext.Provider>
    )
}

export default TaskProvider

TaskProvider.propTypes = {
    children: PropTypes.object.isRequired
}
