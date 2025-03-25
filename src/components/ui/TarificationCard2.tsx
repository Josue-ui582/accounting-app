import React from 'react'
import { Check } from 'lucide-react';
import { Button } from '@heroui/button';


export default function TarificationCard2() {
  return (
    <div className='rounded-lg md:w-[400px] w-[300px] flex flex-col gap-5 border border-gray-300 p-4 bg-gray-100'>
          <div className='flex justify-between'>
            <h5 className='font-bold'>Professionel</h5>
            <p className='bg-blue-600 p-1 rounded-full text-white text-xs'>Populaire</p>
          </div>
          <p className='md:text-3xl text-2xl font-bold'>100000 f<span className='text-gray-700 text-xs'>/mois</span></p>
          <ul>
            <li className='flex gap-2'>
              <Check className='text-xs' /> <span>Rapports avancés</span>
            </li>
            <li className='flex gap-2'>
              <Check className='text-xs' /> <span>Factures illimitées</span>
            </li>
            <li className='flex gap-2'>
              <Check className='text-xs' /> <span>5 membres de l'équipe</span>
            </li>
            <li className='flex gap-2'>
              <Check className='text-xs' /> <span>Accès API</span>
            </li>
          </ul>
          <Button className='rounded-lg p-2 bg-blue-600 hover:bg-blue-500 cursor-pointer text-white'>Commencer</Button>
    </div>
  )
}