import React from 'react'

export default function Education(props) {
    const { info, onEdit, onDelete } = props;
    return (
        <div className='w-full'>
        <h2 className='font-semibold text-2xl border-b-2'>
            Education
        </h2>
            {info.map((education) => {
                return (<div key={education.id}>
                            <h4><span className='text-xl text-medium'>
                            {education.school}
                            </span>
                            <span className='flex float-right'>
                            {education.date}
                            </span></h4>
                            <h6>{education.degree}</h6>
                            <button className='w-2/4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
                             onClick={() => {
                                onEdit(education.id)}}
                                >Edit</button>
                            <button className='w-2/4 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded'
                             onClick={() => {
                                onDelete(education.id)}}
                                >Delete</button>
                        </div>);
            })}
        </div>
    )
}
