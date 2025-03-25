import React from 'react'

type Props = {
    title : string,
    icon : string,
    content : string
}

export default function FinaceCard({title, icon, content}: Props) {
  return (
    <div className='flex overflow-hidden flex-col gap-4 justify-start items-start rounded-lg border border-gray-300 md:w-[400px] w-[300px] p-4'>
      <div className='p-1 rounded-lg bg-gray-300'>
          <img src={icon} alt={icon} />
      </div>
      <h4 className='md:text-lg font-bold'>{title}</h4>
      <p className='text-gray-800'>{content}</p>
    </div>
  )
}