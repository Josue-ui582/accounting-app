import React from 'react'
import TestimonyCard from './ui/TestimonyCard'

type Props = {}

export default function Testimony({}: Props) {
  return (
    <section className='flex flex-col justify-center items-center mt-24 gap-8 md:px-10 px-2 overflow-hidden bg-gray-100 p-5'>
        <h1 className='font-bold text-2xl text-center'>Plusieurs entreprises au Bénin nous font confiance</h1>
        <div className='flex md:flex-row flex-col gap-5 items-center justify-center'>
            <TestimonyCard
                name='Michael Roberts'
                job='CFO, TechStart Inc'
                testimony="AccountPro a transformé notre façon de gérer nos finances. Les fonctionnalités d'automatisation nous ont fait gagner un temps précieux."
            />

            <TestimonyCard
                name='Sarah Chen'
                job='Owner, Design Studio'
                testimony="Les fonctionnalités de reporting sont incroyables. Je peux prendre de meilleures décisions commerciales grâce à des informations en temps réel."
            />

            <TestimonyCard
                name='David Wilson'
                job='Founder, GrowthMax'
                testimony="Le meilleur logiciel de comptabilité que nous ayons utilisé. Le support client est exceptionnel et les fonctionnalités sont complètes."
            />
        </div>
    </section>
  )
}