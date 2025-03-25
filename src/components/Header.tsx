import React from 'react'
import { Button } from '@heroui/button'
import { Play } from 'lucide-react';

type Props = {}

export default function Header({}: Props) {
  return (
    <div className='flex md:flex-row flex-col justify-center items-center md:px-10 px-2 bg-gray-100 overflow-hidden gap-6 pt-8'>
        <div className='flex flex-col md:gap-4 gap-8 overflow-hidden'>
            <p className='font-bold md:text-4xl text-3xl md:text-left text-center'>Simplifiez votre <br /> comptabilité grâce à <br /> l'automatisation intelligente</p>
            <p className='text-gray-800 md:text-left text-center'>Optimisez vos opérations financières grâce à notre logiciel <br /> de comptabilité intelligent en ligne. Gagnez du temps, réduisez les erreurs et prenez de meilleures décisions.</p>
            <div className='flex md:justify-start md:items-start justify-center items-center gap-1'>
                <Button className='md:p-2 p-1 rounded-lg bg-blue-600 text-white text-sm cursor-pointer hover:bg-blue-500 sm:text-normal'>
                    Commencer l'essaie <br /> gratuit de 14 jours
                </Button>
                <Button className="flex gap-4 justify-center items-center md:p-2 p-1 rounded-lg border border-gray-300 cursor-pointer hover:bg-white text-sm sm:text-normal">
                    <span>Regarder la <br /> demo</span>
                    <span><Play /></span>
                </Button>
            </div>
        </div>
        <div><img src="account-image.png" alt="account image" /></div>
    </div>
  )
}