import React from 'react';

export default function Education(props) {
    return (
        <div>
            {props.info.map((education) => (
                <div>
                    <p>{education.university}</p>
                    <p>{education.degree}</p>
                    <p>{education.dates}</p>
                </div>
                ))}
        </div>
    )
}
