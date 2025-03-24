import React from 'react'
import NavBar from '@/components/NavBar'
import Header from '@/components/Header'
import ManageFinance from '@/components/ManageFinance'

type Props = {}

export default function Home({}: Props) {
  return (
    <div>
      <NavBar />
      <Header />
      <ManageFinance />
    </div>
  )
}