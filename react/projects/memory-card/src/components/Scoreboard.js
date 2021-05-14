import React from 'react'

export default function Scoreboard(props) {
    return (
        <>
            <div>
                Score: {props.score}
            </div>
            <div>
                Best Score: {props.bestScore}
            </div>
        </>
    )
}
