'use client'

import TokenBank from '@/components/TokenBank/TokenBank';
import NoblePatrons from '@/components/NoblePatrons/NoblePatrons'
import DevelopmentCards from '@/components/DevelopmentCards/DevelopmentCards'
import Opponent from '@/components/Opponent/Opponent'
import ButtonBox from '@/components/ButtonBox/ButtonBox'
import TableActive from '@/components/TableActive/TableActive'
import YourMerchant from '@/components/YourMerchant/YourMerchant'
import GemColection from '@/components/YourGemColection/YourGemCollection'
import YourBonuses from '@/components/YourBonuses/YourBonuses'
import YourReservedCards from '@/components/YourReservedCards/YourReservedCards'
import ReturnTokens from '@/components/ReturnTokens/ReturnTokens'
import Modal from '@/components/Modal/Modal'; 
import { useModalStore } from '@/stores/modalStore';
import { useGamesStore } from '@/stores/gameStore';

export default function GameTable() {
  const setIsModalOpened = useModalStore((state) => state.setIsModalOpened);
  const { game } = useGamesStore();

  const player = game?.players.find((player) => player.id === game.currentPlayerId);

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
        < ButtonBox />
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
    {((player?.totalTokens ?? 0) > 10) && <Modal onClose={()=> setIsModalOpened(false)}><ReturnTokens/></Modal>}
    </main>
  );
}
