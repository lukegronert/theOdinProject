import React from 'react'

export default function General(props) {
    const { info, onEdit } = props;
    return (
        <div>
            {info.map((general) => {
                return (
                    <div key={general.id}>
                        <p>{general.fullName}</p>
                        <p>{general.phone}</p>
                        <p>{general.email}</p>
                        <button onClick={() => onEdit()}>Edit</button>
                    </div>
                )
            })}
        </div>
    )
}
