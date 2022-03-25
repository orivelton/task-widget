import React, { useContext, useEffect } from 'react'
import { totalAllTaskValue, totalByTaskChecked } from '../../helpers/helper'
import TaskContext from '../../hooks/task-context'
import './ProgressBarStyle.scss'

const ProgressBar = () => {
    const [tasks, setTasks] = useContext(TaskContext)

    useEffect(() => {
        if (!tasks.group?.length) return
        const abc = []
        tasks.group.forEach(item => {
            abc.push((totalByTaskChecked(item.tasks) * 100) / totalAllTaskValue(tasks.group))
        })

        setTasks(prev => ({
            ...prev,
            progressBar: abc.reduce((a, b) => a + b),
        }))

    }, [tasks.group])


    return (
        <div className="progress-wrapper">
            <h1 className="progress-wrapper__title">Lodgify Grouped Tasks</h1>
            {
                !!tasks?.progressBar && (
                    <div className="bar-wrapper">
                        <span className="bar-wrapper__percentage" style={{ width: `${tasks?.progressBar}%` }}>
                            {tasks?.progressBar?.toFixed(0)}%
                        </span>
                    </div>
                )
            }
        </div>
    )
}

export default ProgressBar
