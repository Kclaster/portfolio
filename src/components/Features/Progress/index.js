import React from 'react';

import './style.css';

const ProgressBar = (props) => {
    return (
        <div className="progress-bar-container">
            <div className="progress-bar" style={{'width' : `${props.percent}%`}}>
                {props.percent}%
            </div>
        </div>
    )
}


export default ProgressBar;