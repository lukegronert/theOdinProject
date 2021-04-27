import React from 'react'

export default function Experience(props) {
    const { info, onEdit, onDelete } = props;
    return (
        <div>
        <h2 className='font-semibold text-2xl border-b-2'>
            Experience
        </h2>
            {info.map((experience) => {
                return (<div key={experience.id}>
                            <h4><span className='text-xl text-medium'>{experience.company}</span>
                                <span className='flex float-right'>{experience.startDate} - {experience.endDate}</span></h4>
                            <h5>{experience.position}</h5>
                            <p>{experience.description}</p>
                            <button className='w-2/4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
                            onClick={() => {
                                onEdit(experience.id)}
                            }>Edit</button>
                            <button className='w-2/4 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded'
                            onClick={() => {
                                onDelete(experience.id)
                            }}>Delete</button>
                            
                        </div>);
            })}
        </div>
    )
}
