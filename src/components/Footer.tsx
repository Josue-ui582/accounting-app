import React from 'react'


export default function Footer() {
  return (
    <footer className='bg-gray-900 md:p-24 px-2 py-10'>
        <div>
            <div className='mb-10'>
                <h4 className='text-white font-bold'>Accounting App</h4>
                <p className='text-gray-500 text-sm'>Rendre la comptabilité simple et efficace pour les entreprises du monde entier.</p>
            </div>
            <div className='flex md:flex-row justify-between md:justify-between items-start gap-5'>
                <ul>
                    <li className='font-bold text-white'>Product</li>
                    <li className='text-gray-500'>Factures</li>
                    <li className='text-gray-500'>Pricing</li>
                    <li className='text-gray-500'>Security</li>
                    <li className='text-gray-500'>Updates</li>
                </ul>
                <ul>
                    <li className='font-bold text-white'>Company</li>
                    <li className='text-gray-500'>About</li>
                    <li className='text-gray-500'>Careers</li>
                    <li className='text-gray-500'>Blog</li>
                    <li className='text-gray-500'>Contact</li>
                </ul>
                <ul>
                    <li className='font-bold text-white'>Legal</li>
                    <li className='text-gray-500'>Privacy</li>
                    <li className='text-gray-500'>Terms</li>
                    <li className='text-gray-500'>Security</li>
                </ul>
            </div>
        </div>
        <div className='bg-gray-500 h-[1px] w-full mt-16'></div>
        <p className='text-center text-gray-500 mt-16'>@ {new Date().getFullYear()} Accounting app. All rights reserved.</p>
    </footer>
  )
}