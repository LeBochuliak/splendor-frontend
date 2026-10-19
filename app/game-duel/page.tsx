import TokenBank from '@/components/TokenBank/TokenBank';
import NoblePatrons from '@/components/NoblePatrons/NoblePatrons'
import DevelopmentCards from '@/components/DevelopmentCards/DevelopmentCards'

export default function GameTable() {
  return (
    <div className="container">
      <TokenBank />
      <div className='cardsWrapper'>
        <NoblePatrons/>
        <DevelopmentCards />
      </div>
      
    </div>
  );
}
