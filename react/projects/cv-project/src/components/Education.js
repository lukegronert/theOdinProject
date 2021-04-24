import React from 'react'

export default function Education(props) {
    const { info, onEdit, onDelete } = props;
    return (
        <div>
            {info.map((education) => {
                return (<div key={education.id}>
                            <h4>{education.school}</h4>
                            <h5>{education.degree}</h5>
                            <h6>{education.date}</h6>
                            <button onClick={() => {
                                onEdit(education.id)}}
                                >Edit</button>
                            <button onClick={() => {
                                onDelete(education.id)}}
                                >Delete</button>
                        </div>);
            })}
        </div>
    )
}
