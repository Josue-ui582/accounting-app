import React from 'react'
import { Check } from 'lucide-react';
import { Button } from '@heroui/button';

type Props = {}

export default function TarificationCard3({}: Props) {
  return (
    <div className='rounded-lg md:w-[400px] w-[300px] flex flex-col gap-5 border border-gray-300 p-4'>
          <h5 className='font-bold'>Entreprise</h5>
          <p className='md:text-3xl text-2xl font-bold'>200000 f<span className='text-gray-700 text-xs'>/mois</span></p>
          <ul>
            <li className='flex gap-2'>
              <Check className='text-xs' /> <span>Rapports personnalisés</span>
            </li>
            <li className='flex gap-2'>
              <Check className='text-xs' /> <span>Tout illimité</span>
            </li>
            <li className='flex gap-2'>
              <Check className='text-xs' /> <span>Soutien prioritaire</span>
            </li>
            <li className='flex gap-2'>
              <Check className='text-xs' /> <span>Intégration personnalisée</span>
            </li>
          </ul>
          <Button className='rounded-lg p-2 bg-gray-100 cursor-pointer'>Contacter le service commercial</Button>
    </div>
  )
}