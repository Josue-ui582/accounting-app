import React from 'react'
import { Button } from '@heroui/button'

type Props = {}

export default function CallToAction({}: Props) {
  return (
    <section className='bg-blue-600 p-12 flex flex-col gap-5 justify-center items-center mt-24'>
        <h4 className='text-white font-bold text-2xl text-center'>Prêt à transformer votre comptabilité ?</h4>
        <p className='text-gray-100 text-center text-sm'>Rejoignez des milliers d'entreprises qui font confiance à Accounting App pour leur gestion financière</p>
        <div className='flex justify-center items-center gap-2'>
            <Button className='rounded-lg p-2.5 bg-white text-blue-600 font-semibold cursor-pointer'>Démarrer l'essaie gratuit</Button>
            <Button className='rounded-lg p-2.5 text-white font-semibold border border-white cursor-pointer'>Regarder la demo</Button>
        </div>
    </section>
  )
}