import React from 'react';

export default function Education(props) {
    return (
        <div>
            {props.info.map((education) => (
                <div key={education.id}>
                    <p>{education.university}</p>
                    <p>{education.degree}</p>
                    <p>{education.dates}</p>
                    <button onClick={() => props.onEdit(education.id)}>Edit</button>                </div>
                ))}
        </div>
    )
}
