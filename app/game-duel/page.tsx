"use client"

import TokenBank from '@/components/TokenBank/TokenBank';
import NoblePatrons from '@/components/NoblePatrons/NoblePatrons'
import DevelopmentCards from '@/components/DevelopmentCards/DevelopmentCards'
import Opponent from '@/components/Opponent/Opponent'
import TurnBox from '@/components/TurnBox/TurnBox'
import TableActive from '@/components/TableActive/TableActive'
import YourMerchant from '@/components/YourMerchant/YourMerchant'
import GemColection from '@/components/GemColection/GemCollection'
import YourBonuses from '@/components/YourBonuses/YourBonuses'
import YourReservedCards from '@/components/YourReservedCards/YourReservedCards'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react';
import { useGamesStore } from '@/stores/gameStore'
import type { Game } from '@/types/game'


export default function GameTable() {
  const [isModalOpen, setIsModalOpen] = useState(true)
  const { game, setGame } = useGamesStore();

  console.log('GAME', game);
  

  const onClose = () => {setIsModalOpen(false)};

  return (
    <main>
    <div className="container">
      <TokenBank />
      <div className='cardsWrapper'>
        <NoblePatrons/>
        <DevelopmentCards />
      </div>
      <div className='columnWrapper'>
        <Opponent />
        <TurnBox />
        <TableActive />
      </div>
    </div>
    <div className="footer">
      <div className='container'>
        <YourMerchant /> 
        <GemColection />
        <YourBonuses />
        <YourReservedCards />
      </div>
    </div>
    
    </main>
  );
}
