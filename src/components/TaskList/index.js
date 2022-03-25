import React, { useContext } from 'react'
import TaskContext from '../../hooks/task-context'
import Accordion from '../Accordion'
import './TaskListStyle.scss'

const TaskList = () => {
    const [tasks] = useContext(TaskContext)

    return (
        <div className="task-list-wrapper">
            {
                !!tasks.group?.length && (
                    tasks.group.map(({ name, completed, tasks }) => (
                        <Accordion key={name} {...{ name, completed, taskList: tasks }}/>
                    ))
                )
            }
        </div>
    )
}

export default TaskList
