import styles from './DevelopmentCards.module.css';
import Image from 'next/image';

const DevelopmentCards = () => {
    return (
        <div className={styles.cardsContainer}>
            <h2 className='sectionLabel'>Development cards</h2>
            <p className={`textInstruction ${styles.InstText}`}>Prestige at left · Gem bonus at right · Cost below</p>
            <ul className={styles.cards}>
                
                <li className={styles.cardsLevel}>
                    <ul className={styles.level}>
                        <li className={styles.tier}>
                            <p className={styles.tierLabel}>Tier</p>
                            <p className={styles.tierNumber}>III</p>
                            <p className={styles.tierAmount}>16</p>
                        </li>
                        <li className={styles.card} style={{
                            backgroundImage: `url("/cards/1.png")`}}>
                            <p className={styles.cardsPoints}>4</p>
                            <div className={styles.cardsBonus}>
                                <svg width='19' height='19'><use href='/sprite.svg#icon-Gemstone'/></svg>
                            </div>
                            <ul className={styles.cardsPrice}>
                                <li className={styles.white}><svg width='13' height='13' className='gem--white'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                 <li className={styles.blue}><svg width='13' height='13' className='gem--blue'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                  <li className={styles.green}><svg width='13' height='13' className='gem--green'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                   <li className={styles.red}><svg width='13' height='13' className='gem--red'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                    <li className={styles.black}><svg width='13' height='13' className='gem--black'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                            </ul>
                            <svg width='12' height='12' className={styles.plusIcon}><use href='sprite.svg#icon-plus'/></svg>
                        </li>
                        <li className={styles.card} style={{
                            backgroundImage: `url("/cards/1.png")`}}>
                            <p className={styles.cardsPoints}>4</p>
                            <div className={styles.cardsBonus}>
                                <svg width='19' height='19'><use href='/sprite.svg#icon-Gemstone'/></svg>
                            </div>
                            <ul className={styles.cardsPrice}>
                                <li className={styles.white}><svg width='13' height='13' className='gem--white'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                 <li className={styles.blue}><svg width='13' height='13' className='gem--blue'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                  <li className={styles.green}><svg width='13' height='13' className='gem--green'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                   <li className={styles.red}><svg width='13' height='13' className='gem--red'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                    <li className={styles.black}><svg width='13' height='13' className='gem--black'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                            </ul>
                            <svg width='12' height='12' className={styles.plusIcon}><use href='sprite.svg#icon-plus'/></svg>
                        </li>
                        <li className={styles.card} style={{
                            backgroundImage: `url("/cards/1.png")`}}>
                            <p className={styles.cardsPoints}>4</p>
                            <div className={styles.cardsBonus}>
                                <svg width='19' height='19'><use href='/sprite.svg#icon-Gemstone'/></svg>
                            </div>
                            <ul className={styles.cardsPrice}>
                                <li className={styles.white}><svg width='13' height='13' className='gem--white'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                 <li className={styles.blue}><svg width='13' height='13' className='gem--blue'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                  <li className={styles.green}><svg width='13' height='13' className='gem--green'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                   <li className={styles.red}><svg width='13' height='13' className='gem--red'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                    <li className={styles.black}><svg width='13' height='13' className='gem--black'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                            </ul>
                            <svg width='12' height='12' className={styles.plusIcon}><use href='sprite.svg#icon-plus'/></svg>
                        </li>
                        <li className={styles.card} style={{
                            backgroundImage: `url("/cards/1.png")`}}>
                            <p className={styles.cardsPoints}>4</p>
                            <div className={styles.cardsBonus}>
                                <svg width='19' height='19'><use href='/sprite.svg#icon-Gemstone'/></svg>
                            </div>
                            <ul className={styles.cardsPrice}>
                                <li className={styles.white}><svg width='13' height='13' className='gem--white'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                 <li className={styles.blue}><svg width='13' height='13' className='gem--blue'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                  <li className={styles.green}><svg width='13' height='13' className='gem--green'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                   <li className={styles.red}><svg width='13' height='13' className='gem--red'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                    <li className={styles.black}><svg width='13' height='13' className='gem--black'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                            </ul>
                            <svg width='12' height='12' className={styles.plusIcon}><use href='sprite.svg#icon-plus'/></svg>
                        </li>
                    </ul>   
                </li>

                 <li className={styles.cardsLevel}>
                    <ul className={styles.level}>
                        <li className={styles.tier}>
                            <p className={styles.tierLabel}>Tier</p>
                            <p className={styles.tierNumber}>II</p>
                            <p className={styles.tierAmount}>16</p>
                        </li>
                        <li className={styles.card} style={{
                            backgroundImage: `url("/cards/1.png")`}}>
                            <p className={styles.cardsPoints}>4</p>
                            <div className={styles.cardsBonus}>
                                <svg width='19' height='19'><use href='/sprite.svg#icon-Gemstone'/></svg>
                            </div>
                            <ul className={styles.cardsPrice}>
                                <li className={styles.white}><svg width='13' height='13' className='gem--white'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                 <li className={styles.blue}><svg width='13' height='13' className='gem--blue'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                  <li className={styles.green}><svg width='13' height='13' className='gem--green'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                   <li className={styles.red}><svg width='13' height='13' className='gem--red'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                    <li className={styles.black}><svg width='13' height='13' className='gem--black'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                            </ul>
                            <svg width='12' height='12' className={styles.plusIcon}><use href='sprite.svg#icon-plus'/></svg>
                        </li>
                        <li className={styles.card} style={{
                            backgroundImage: `url("/cards/1.png")`}}>
                            <p className={styles.cardsPoints}>4</p>
                            <div className={styles.cardsBonus}>
                                <svg width='19' height='19'><use href='/sprite.svg#icon-Gemstone'/></svg>
                            </div>
                            <ul className={styles.cardsPrice}>
                                <li className={styles.white}><svg width='13' height='13' className='gem--white'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                 <li className={styles.blue}><svg width='13' height='13' className='gem--blue'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                  <li className={styles.green}><svg width='13' height='13' className='gem--green'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                   <li className={styles.red}><svg width='13' height='13' className='gem--red'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                    <li className={styles.black}><svg width='13' height='13' className='gem--black'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                            </ul>
                            <svg width='12' height='12' className={styles.plusIcon}><use href='sprite.svg#icon-plus'/></svg>
                        </li>
                        <li className={styles.card} style={{
                            backgroundImage: `url("/cards/1.png")`}}>
                            <p className={styles.cardsPoints}>4</p>
                            <div className={styles.cardsBonus}>
                                <svg width='19' height='19'><use href='/sprite.svg#icon-Gemstone'/></svg>
                            </div>
                            <ul className={styles.cardsPrice}>
                                <li className={styles.white}><svg width='13' height='13' className='gem--white'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                 <li className={styles.blue}><svg width='13' height='13' className='gem--blue'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                  <li className={styles.green}><svg width='13' height='13' className='gem--green'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                   <li className={styles.red}><svg width='13' height='13' className='gem--red'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                    <li className={styles.black}><svg width='13' height='13' className='gem--black'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                            </ul>
                            <svg width='12' height='12' className={styles.plusIcon}><use href='sprite.svg#icon-plus'/></svg>
                        </li>
                        <li className={styles.card} style={{
                            backgroundImage: `url("/cards/1.png")`}}>
                            <p className={styles.cardsPoints}>4</p>
                            <div className={styles.cardsBonus}>
                                <svg width='19' height='19'><use href='/sprite.svg#icon-Gemstone'/></svg>
                            </div>
                            <ul className={styles.cardsPrice}>
                                <li className={styles.white}><svg width='13' height='13' className='gem--white'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                 <li className={styles.blue}><svg width='13' height='13' className='gem--blue'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                  <li className={styles.green}><svg width='13' height='13' className='gem--green'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                   <li className={styles.red}><svg width='13' height='13' className='gem--red'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                    <li className={styles.black}><svg width='13' height='13' className='gem--black'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                            </ul>
                            <svg width='12' height='12' className={styles.plusIcon}><use href='sprite.svg#icon-plus'/></svg>
                        </li>
                    </ul>   
                </li>

                 <li className={styles.cardsLevel}>
                    <ul className={styles.level}>
                        <li className={styles.tier}>
                            <p className={styles.tierLabel}>Tier</p>
                            <p className={styles.tierNumber}>I</p>
                            <p className={styles.tierAmount}>16</p>
                        </li>
                        <li className={styles.card} style={{
                            backgroundImage: `url("/cards/1.png")`}}>
                            <p className={styles.cardsPoints}>4</p>
                            <div className={styles.cardsBonus}>
                                <svg width='19' height='19'><use href='/sprite.svg#icon-Gemstone'/></svg>
                            </div>
                            <ul className={styles.cardsPrice}>
                                <li className={styles.white}><svg width='13' height='13' className='gem--white'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                 <li className={styles.blue}><svg width='13' height='13' className='gem--blue'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                  <li className={styles.green}><svg width='13' height='13' className='gem--green'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                   <li className={styles.red}><svg width='13' height='13' className='gem--red'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                    <li className={styles.black}><svg width='13' height='13' className='gem--black'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                            </ul>
                            <svg width='12' height='12' className={styles.plusIcon}><use href='sprite.svg#icon-plus'/></svg>
                        </li>
                        <li className={styles.card} style={{
                            backgroundImage: `url("/cards/1.png")`}}>
                            <p className={styles.cardsPoints}>4</p>
                            <div className={styles.cardsBonus}>
                                <svg width='19' height='19'><use href='/sprite.svg#icon-Gemstone'/></svg>
                            </div>
                            <ul className={styles.cardsPrice}>
                                <li className={styles.white}><svg width='13' height='13' className='gem--white'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                 <li className={styles.blue}><svg width='13' height='13' className='gem--blue'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                  <li className={styles.green}><svg width='13' height='13' className='gem--green'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                   <li className={styles.red}><svg width='13' height='13' className='gem--red'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                    <li className={styles.black}><svg width='13' height='13' className='gem--black'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                            </ul>
                            <svg width='12' height='12' className={styles.plusIcon}><use href='sprite.svg#icon-plus'/></svg>
                        </li>
                        <li className={styles.card} style={{
                            backgroundImage: `url("/cards/1.png")`}}>
                            <p className={styles.cardsPoints}>4</p>
                            <div className={styles.cardsBonus}>
                                <svg width='19' height='19'><use href='/sprite.svg#icon-Gemstone'/></svg>
                            </div>
                            <ul className={styles.cardsPrice}>
                                <li className={styles.white}><svg width='13' height='13' className='gem--white'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                 <li className={styles.blue}><svg width='13' height='13' className='gem--blue'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                  <li className={styles.green}><svg width='13' height='13' className='gem--green'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                   <li className={styles.red}><svg width='13' height='13' className='gem--red'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                    <li className={styles.black}><svg width='13' height='13' className='gem--black'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                            </ul>
                            <svg width='12' height='12' className={styles.plusIcon}><use href='sprite.svg#icon-plus'/></svg>
                        </li>
                        <li className={styles.card} style={{
                            backgroundImage: `url("/cards/1.png")`}}>
                            <p className={styles.cardsPoints}>4</p>
                            <div className={styles.cardsBonus}>
                                <svg width='19' height='19'><use href='/sprite.svg#icon-Gemstone'/></svg>
                            </div>
                            <ul className={styles.cardsPrice}>
                                <li className={styles.white}><svg width='13' height='13' className='gem--white'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                 <li className={styles.blue}><svg width='13' height='13' className='gem--blue'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                  <li className={styles.green}><svg width='13' height='13' className='gem--green'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                   <li className={styles.red}><svg width='13' height='13' className='gem--red'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                                    <li className={styles.black}><svg width='13' height='13' className='gem--black'><use href='/sprite.svg#icon-Gemstone'/></svg><p>2</p></li>
                            </ul>
                            <svg width='12' height='12' className={styles.plusIcon}><use href='sprite.svg#icon-plus'/></svg>
                        </li>
                    </ul>   
                </li>

            </ul>
            
        </div>
    )
}

export default DevelopmentCards;