import React from 'react'
import TarificationCard from './ui/TarificationCard1'
import TarificationCard2 from './ui/TarificationCard2'
import TarificationCard3 from './ui/TarificationCard3'

type Props = {}

export default function Tarification({}: Props) {
  return (
    <section className='flex flex-col justify-center items-center mt-24 gap-8 md:px-10 px-2 overflow-hidden p-5'>
        <h1 className='font-bold text-2xl text-center'>Tarification simple et transparente</h1>
        <p className='text-center text-gray-700'>Choisissez le plan qui convient le mieux à votre entreprise</p>
        <div className='flex md:flex-row flex-col gap-4'>
            <TarificationCard />
            <TarificationCard2 />
            <TarificationCard3 />
        </div>
    </section>
  )
}