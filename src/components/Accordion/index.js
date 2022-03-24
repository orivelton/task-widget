import React, { useContext, useEffect, useState } from 'react'
import {ReactComponent as TaskIcon} from '../../assets/images/task-icon.svg'
import { isCompleted, totalByTaskCheked } from '../../helpers/helper'
import TaskContext from '../../hooks/task-context'
import './AccordionStyle.scss'


const Accordion = ({ name, completed = false, tasks: taskList }) => {
    const [tasks, setTasks] = useContext(TaskContext)
    const [open, setOpen] = useState()

    const handleOpen = () => {
        setOpen(prev => !prev)
    }

    const handleCheckTask = ({ description }) => {
        const groupedTask = tasks.map(item => {
            if(item.name === name) {
                item.tasks.forEach(task => {
                    if(task?.description === description || task?.name === description) {
                        task.checked = !task.checked
                    }
                    return task
                })

                item.completed = isCompleted(item.tasks)
            }
            return item
        });

        setTasks(groupedTask)
    }

    return (
        <div key={name} className={`accordion ${ open ? "open" : ""}`} >
            <div onClick={handleOpen} className={`${completed ? 'completed' : ''}`}>
                <TaskIcon />
                <span>{name}</span>
                <span> - {open ? 'Hide' : 'Show'}</span>
            </div>
            <div className="accordion-item">
                {
                    taskList.map(({ checked, description, name, value}) => {
                        const taskID = description+String(value)
                        return (
                            <p key={taskID}>
                            <input 
                                id={taskID} 
                                type="checkbox" 
                                checked={checked} 
                                onChange={() => handleCheckTask({ description: description || name })}
                            />
                            <label htmlFor={taskID}>{description || name }</label>
                        </p>
                        )
                    })
                }
            </div>
        </div>
)
}

export default Accordion
