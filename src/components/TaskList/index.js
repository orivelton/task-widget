import React, { useEffect, useState } from 'react'
import taskIcon from '../../assets/images/task-icon.svg'
import { getTasks } from '../../helpers/api'

const TaskList = () => {
    const [tasks, setTasks] = useState()
    useEffect(() => {
        const callApi = async () => {
            const allTasks = await getTasks()
            setTasks(allTasks)
        }

        callApi()
    }, [])
    return (
        <>
            {
                tasks && (
                    tasks.map(({ name, tasks }) => (
                        <div key={name} className="accordion">
                            <div>
                                <img src={taskIcon} className="App-logo" alt="logo" />
                                <span>{name} - </span>
                                <span>show</span>
                            </div>
                            <div>
                                {
                                    tasks.map(({ checked, description, name, value}) => (
                                        <p key={description} className="">
                                            <input type="checkbox" checked={checked}/>
                                            <label>{description || name }</label>
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                )
            }

            
        </>
    )
}

export default TaskList
