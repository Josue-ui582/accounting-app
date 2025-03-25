import React from 'react'
import { Check } from 'lucide-react';
import { Button } from '@heroui/button';

type Props = {}

export default function TarificationCard({}: Props) {
  return (
    <div className='rounded-lg md:w-[400px] w-[300px] flex flex-col gap-5 border border-gray-300 p-4'>
      <h5 className='font-bold'>Standar</h5>
      <p className='md:text-3xl text-2xl font-bold'>70000 f<span className='text-gray-700 text-xs'>/mois</span></p>
      <ul>
        <li className='flex gap-2'>
          <Check className='text-xs' /> <span>Rapports de base</span>
        </li>
        <li className='flex gap-2'>
          <Check className='text-xs' /> <span>Jusqu'à 100 factures</span>
        </li>
        <li className='flex gap-2'>
          <Check className='text-xs' /> <span>2 membres de l'équipe</span>
        </li>
      </ul>
      <Button className='rounded-lg p-2 bg-gray-100 cursor-pointer'>Commencer</Button>
    </div>
  )
}