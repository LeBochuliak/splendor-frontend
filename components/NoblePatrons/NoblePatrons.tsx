import styles from './NoblePatrons.module.css';
import Image from 'next/image';

const NoblePatrons = () => {
  return (
    <div className={styles.noblesContainer}>
      <h2 className="sectionLabel">Noble Patrons</h2>
      <p className={`textInstruction ${styles.noblesText}`}>Earn their favor with permanent bonuses</p>
      <ul className={styles.noblesList}>
        <li className={styles.nobleCard}>
            <Image src='/Patron-portrait.png' width={76} height={96} alt='Patron portrait'className={styles.portrait}/>
            
            <div className={styles.infoWrapper}>
                <p className={styles.patronTitle}>The patron</p>
                <p className={styles.patronName}>Isabella of Castile</p>
                <ul className={styles.RequiredBonuses}>
                    <li className={`${styles.bonus} visually-hidden`}><svg width='15' height='15' className='gem--white'><use href='/sprite.svg#icon-Gemstone'/></svg><p>3</p></li>
                    <li className={`${styles.bonus} visually-hidden`}><svg width='15' height='15' className='gem--blue'><use href='/sprite.svg#icon-Gemstone'/></svg><p>3</p></li>
                    <li className={styles.bonus}><svg width='15' height='15' className='gem--green'><use href='/sprite.svg#icon-Gemstone'/></svg><p>3</p></li>
                    <li className={styles.bonus}><svg width='15' height='15' className='gem--red'><use href='/sprite.svg#icon-Gemstone'/></svg><p>3</p></li>
                    <li className={styles.bonus}><svg width='15' height='15' className='gem--black'><use href='/sprite.svg#icon-Gemstone'/></svg><p>3</p></li>
                </ul>
                
            </div>
            
            <div className={styles.prestigeWrapper}>
                <svg width='15' height='15'><use href='/sprite.svg#icon-crown'/></svg> 
                <p className={styles.noblePrestige}>3</p>
            </div>
            
        </li>

        <li className={styles.nobleCard}>
            <Image src='/Patron-portrait.png' width={76} height={96} alt='Patron portrait'className={styles.portrait}/>
            
            <div className={styles.infoWrapper}>
                <p className={styles.patronTitle}>The patron</p>
                <p className={styles.patronName}>Isabella of Castile</p>
                <ul className={styles.RequiredBonuses}>
                    <li className={`${styles.bonus} visually-hidden`}><svg width='15' height='15' className='gem--white'><use href='/sprite.svg#icon-Gemstone'/></svg><p>3</p></li>
                    <li className={`${styles.bonus} visually-hidden`}><svg width='15' height='15' className='gem--blue'><use href='/sprite.svg#icon-Gemstone'/></svg><p>3</p></li>
                    <li className={styles.bonus}><svg width='15' height='15' className='gem--green'><use href='/sprite.svg#icon-Gemstone'/></svg><p>3</p></li>
                    <li className={styles.bonus}><svg width='15' height='15' className='gem--red'><use href='/sprite.svg#icon-Gemstone'/></svg><p>3</p></li>
                    <li className={styles.bonus}><svg width='15' height='15' className='gem--black'><use href='/sprite.svg#icon-Gemstone'/></svg><p>3</p></li>
                </ul>
                
            </div>
            
            <div className={styles.prestigeWrapper}>
                <svg width='15' height='15'><use href='/sprite.svg#icon-crown'/></svg> 
                <p className={styles.noblePrestige}>3</p>
            </div>
            
        </li>

        <li className={styles.nobleCard}>
            <Image src='/Patron-portrait.png' width={76} height={96} alt='Patron portrait'className={styles.portrait}/>
            
            <div className={styles.infoWrapper}>
                <p className={styles.patronTitle}>The patron</p>
                <p className={styles.patronName}>Isabella of Castile</p>
                <ul className={styles.RequiredBonuses}>
                    <li className={`${styles.bonus} visually-hidden`}><svg width='15' height='15' className='gem--white'><use href='/sprite.svg#icon-Gemstone'/></svg><p>3</p></li>
                    <li className={`${styles.bonus} visually-hidden`}><svg width='15' height='15' className='gem--blue'><use href='/sprite.svg#icon-Gemstone'/></svg><p>3</p></li>
                    <li className={styles.bonus}><svg width='15' height='15' className='gem--green'><use href='/sprite.svg#icon-Gemstone'/></svg><p>3</p></li>
                    <li className={styles.bonus}><svg width='15' height='15' className='gem--red'><use href='/sprite.svg#icon-Gemstone'/></svg><p>3</p></li>
                    <li className={styles.bonus}><svg width='15' height='15' className='gem--black'><use href='/sprite.svg#icon-Gemstone'/></svg><p>3</p></li>
                </ul>
                
            </div>
            
            <div className={styles.prestigeWrapper}>
                <svg width='15' height='15'><use href='/sprite.svg#icon-crown'/></svg> 
                <p className={styles.noblePrestige}>3</p>
            </div>
            
        </li>

      </ul>
    </div>
  );
};

export default NoblePatrons;