import React from 'react'

export default function Overview(props) {
    const {tasks, onDelete} = props;
    return (
        <ul>
            {tasks.map((task) => {
                return <li key={task.id}>{task.text}<button onClick={() => onDelete(task.id)}>Delete</button></li>
            })}
        </ul>
    )
}

