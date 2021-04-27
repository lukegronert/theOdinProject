import React from 'react'

export default function General(props) {
    const { info, onEdit } = props;
    return (
        <div className='flex float-left w-full'>
            {info.map((general) => {
                return (
                    <div key={general.id}>
                        <p>{general.fullName}</p>
                        <p>{general.phone}</p>
                        <p>{general.email}</p>
                        <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full inline-block'
                         onClick={() => onEdit()}>Edit</button>
                    </div>
                )
            })}
        </div>
    )
}
