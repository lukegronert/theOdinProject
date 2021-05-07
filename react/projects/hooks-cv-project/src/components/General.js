import React from 'react';

export default function General(props) {
    return (
        <div>
            <div>
                <p>{props.info.userName}</p>
                <p>{props.info.email}</p>
                <p>{props.info.phone}</p>
            </div>
        </div>
    )
}
