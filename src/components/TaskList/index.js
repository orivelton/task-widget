import React, { useContext } from 'react'
import TaskContext from '../../hooks/task-context'
import Accordion from '../Accordion'

const TaskList = () => {
    const [tasks] = useContext(TaskContext)
    return (
        <>
            {
                tasks && (
                    tasks.map(({ name, completed, tasks }) => (
                        <Accordion key={name} {...{ name, completed, tasks }}/>
                    ))
                )
            }
        </>
    )
}

export default TaskList
