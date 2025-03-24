import React from 'react'

type Props = {
    title : string,
    icon : string,
    content : string
}

export default function FinaceCard({title, icon, content}: Props) {
  return (
    <div className='flex flex-col gap-4 justify-start items-start rounded-lg shadow-[0_0_0_0.5px_rgba(0,0,0,0.5)] border-b-cyan-200 w-[400px] p-4'>
        <div className='p-1 rounded-lg bg-gray-300'>
            <img src={icon} alt={icon} />
        </div>
        <h4 className='text-lg font-bold'>{title}</h4>
        <p className='text-gray-800'>{content}</p>
    </div>
  )
}