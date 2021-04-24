import React from 'react'

export default function Experience(props) {
    const { info } = props;
    return (
        <div>
            {info.map((experience) => {
                return (<div key={experience.id}>
                            <h4>{experience.company}</h4>
                            <h5>{experience.position}</h5>
                            <p>{experience.description}</p>
                            <p>{experience.startDate} - {experience.endDate}</p>
                        </div>);
            })}
        </div>
    )
}
