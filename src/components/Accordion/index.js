import React, { useContext, useState } from 'react'
import taskIcon from '../../assets/images/task-icon.svg'
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

                item.completed = !item.tasks.filter(task => !task.checked).length
            }
            return item
        });

        setTasks(groupedTask)
    }

    return (
        <div key={name} className={`accordion ${ open ? "open" : ""}`} >
            <div onClick={handleOpen}>
                <img src={taskIcon} alt="Task icon" />
                <span className={`${completed ? 'completed' : ''}`}>{name}</span>
                <span> - {open ? 'Hide' : 'Show'}</span>
            </div>
            <div className="accordion-item">
                {
                    taskList.map(({ checked, description, name, value}) => (
                        <p key={description}>
                            <input 
                                id={description+String(value)} 
                                type="checkbox" 
                                checked={checked} 
                                onChange={() => handleCheckTask({ description: description || name })}
                            />
                            <label htmlFor={description+String(value)}>{description || name }</label>
                        </p>
                    ))
                }
            </div>
        </div>
)
}

export default Accordion
