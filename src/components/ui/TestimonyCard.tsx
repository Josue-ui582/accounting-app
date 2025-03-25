import React from 'react'

type Props = {
    name : string,
    job : string,
    testimony : string
}

export default function TestimonyCard({name, job, testimony}: Props) {
  return (
    <div className='flex flex-col gap-5 items-center justify-center p-4 rounded-lg md:w-[400px] w-[300px] bg-white'>
        <h4 className='font-bold'>{name}</h4>
        <p className='text-gray-800'>{job}</p>
        <p className='text-gray-800'>{testimony}</p>
    </div>
  )
}