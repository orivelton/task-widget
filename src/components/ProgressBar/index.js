import React from 'react'
import './ProgressBarStyle.scss'

const ProgressBar = ({ percentage = 60}) => {
    return (
        <>
            Lodgify Grouped Tasks
            <div className="bar"> 
                <span className="bar__percentage" style={{ width: `${percentage}%`}}>
                    {percentage}%
                </span>
            </div>
        </>
    )
}

export default ProgressBar
