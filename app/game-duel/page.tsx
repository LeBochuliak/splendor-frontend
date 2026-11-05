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
import Modal from '@/components/Modal/Modal'
import AddPlayerForm from '@/components/AddPlayerForm/AddPlayerForm'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react';


export default function GameTable() {
  const [isModalOpen, setIsModalOpen] = useState(true)

  const fetchGame = async () => {
    const res = await axios.get('https://splendor-backend-mbjw.onrender.com/game');
    console.log(res);
    
    return res.data;
  }

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['game'],  
    queryFn: fetchGame,  
  });

  const onClose = () => {setIsModalOpen(false)};

  return (
    <>
    {isModalOpen && (
      <Modal onClose={onClose}><AddPlayerForm onClose={onClose}/></Modal>
    )}
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
    
    </>
  );
}
