import React from 'react'

export default function Education(props) {
    const { info } = props;
    return (
        <div>
            {info.map((education) => {
                return (<div key={education.id}>
                            <h4>{education.school}</h4>
                            <h5>{education.degree}</h5>
                            <h6>{education.date}</h6>
                        </div>);
            })}
        </div>
    )
}
