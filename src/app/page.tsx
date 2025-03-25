import React from 'react'
import NavBar from '@/components/NavBar'
import Header from '@/components/Header'
import ManageFinance from '@/components/ManageFinance'
import Testimony from '@/components/Testimony'
import Tarification from '@/components/Tarification'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <ManageFinance />
      <Testimony />
      <Tarification />
      <CallToAction />
      <Footer />
    </div>
  )
}