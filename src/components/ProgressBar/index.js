import React from 'react'
import './ProgressBarStyle.scss'

const ProgressBar = ({ percentage = 60}) => {
    return (
        <>
            <h1>Lodgify Grouped Tasks</h1>
            <div className="bar"> 
                <span className="bar__percentage" style={{ width: `${percentage}%`}}>
                    {percentage}%
                </span>
            </div>
        </>
    )
}

export default ProgressBar
