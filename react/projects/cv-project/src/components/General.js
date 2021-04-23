import React from 'react'

export default function General(props) {
    const { info } = props;
    return (
        <div>
            <p>{info.fullName}</p>
            <p>{info.phone}</p>
            <p>{info.email}</p>
        </div>
    )
}
