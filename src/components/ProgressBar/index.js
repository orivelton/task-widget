import React, { useContext } from 'react'
import TaskContext from '../../hooks/task-context'
import './ProgressBarStyle.scss'

const ProgressBar = () => {
    const [tasks] = useContext(TaskContext)
    return (
        <>
            <h1>Lodgify Grouped Tasks</h1>
            <div className="bar"> 
                <span className="bar__percentage" style={{ width: `${tasks?.progressBar}%`}}>
                    {tasks?.progressBar.toFixed(0)}%
                </span>
            </div>
        </>
    )
}

export default ProgressBar
