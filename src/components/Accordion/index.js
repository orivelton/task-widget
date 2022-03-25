import React, { useContext, useState } from 'react'
import { ReactComponent as TaskIcon} from '../../assets/images/task-icon.svg'
import { ReactComponent as TaskIconDone} from '../../assets/images/task-icon-done.svg'
import { ReactComponent as ArrowDown} from '../../assets/images/arrow-down.svg'
import { ReactComponent as ArrowUp} from '../../assets/images/arrow-up.svg'
import TaskContext from '../../hooks/task-context'
import './AccordionStyle.scss'


const Accordion = ({ name, taskList }) => {
    const [tasks, setTasks] = useContext(TaskContext)
    const [open, setOpen] = useState()

    const handleOpen = () => {
        setOpen(prev => !prev)
    }

    const isCompleted = () => !taskList.filter(({ checked}) => !checked).length

    const handleCheckTask = ({ description }) => {
        const groupedTask = tasks.group.map(item => {
            if(item.name === name) {
                item.tasks.forEach(task => {
                    if(task?.description === description || task?.name === description) {
                        task.checked = !task.checked
                    }
                    return task
                })
            }
            return item
        });

        setTasks(prev => ({
            ...prev,
            group: groupedTask
        }))
    }

    return (
        <div key={name} className={`accordion ${ open ? "open" : ""}`} >
            <div onClick={handleOpen} className={`accordion__tab ${isCompleted() ? 'completed' : ''}`}>
                <div className="accordion__group">
                    {isCompleted() ? <TaskIconDone /> : <TaskIcon />}
                    <span className="accordion__title">{name}</span>
                </div>
                <div>
                    <span className="accordion__toggle-text">{open ? 'Hide' : 'Show'}</span>
                    <span>{open ? <ArrowUp /> : <ArrowDown />}</span>
                </div>
            </div>
            <div className="accordion__item">
                {
                    taskList.map(({ checked, description, name, value}) => {
                        const taskID = `${description}${name}${value}`.replace(/\s/g,'')
                        return (
                            <div className="accordion__checkbox" key={taskID}>
                                <input 
                                    id={taskID} 
                                    type="checkbox" 
                                    checked={checked} 
                                    onChange={() => handleCheckTask({ description: description || name })}
                                />
                                <label htmlFor={taskID}>{description || name }</label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
)
}

export default Accordion
