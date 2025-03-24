import React from 'react'
import FinaceCard from './ui/FinaceCard'

type Props = {}

export default function ManageFinance({}: Props) {
  return (
    <section className='flex justify-center items-center flex-col my-10 gap-8 md:px-10 px-2'>
        <h1 className='font-bold text-2xl text-center'>Tout ceux dont vous avez besoin pour gérer vos finances</h1>
        <p className='text-center text-gray-800'>Des fonctionnalités puissantes qui rendent la comptabilité simple et efficace</p>
        <div className='flex md:flex-row flex-col gap-5'>
            <FinaceCard
                title="Analyse en temps réel"
                icon="analyse.png"
                content="Obtenez des informations instantanées sur les performances de votre entreprise grâce à des outils de reporting avancés"
            />

            <FinaceCard
                title="Facturation automatisée"
                icon="facturation.png"
                content="Créez et envoyez automatiquement des factures professionnelles avec suivi des paiements"
            />

            <FinaceCard
                title="Sécurité de niveau bancaire"
                icon="security.png"
                content="Vos données financières sont protégées par des mesures de sécurité de niveau entreprise"
            />
        </div>
    </section>
  )
}