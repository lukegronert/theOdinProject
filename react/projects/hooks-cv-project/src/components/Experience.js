import React from 'react';

export default function Experience(props) {

    return (
        <div>
            {props.info.map((experience) => (
                <div key={experience.id}>
                    <p>{experience.company}</p>
                    <p>{experience.position}</p>
                    <p>{experience.description}</p>
                    <p>{experience.dates}</p>
                    <button onClick={() => props.onEdit(experience.id)}>Edit</button>
                </div>
                ))}
        </div>
    )
}
