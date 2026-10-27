import TokenBank from '@/components/TokenBank/TokenBank';
import NoblePatrons from '@/components/NoblePatrons/NoblePatrons'
import DevelopmentCards from '@/components/DevelopmentCards/DevelopmentCards'
import Opponent from '@/components/Opponent/Opponent'
import TurnBox from '@/components/TurnBox/TurnBox'
import TableActive from '@/components/TableActive/TableActive'

export default function GameTable() {
  return (
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
  );
}
