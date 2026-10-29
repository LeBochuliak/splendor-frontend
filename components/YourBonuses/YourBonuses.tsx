import styles from './YourBonuses.module.css'

const YourBonuses = () => {
    return (
        <div className={styles.bonusesContainer}>
            <div className={styles.developmentBonuses}> 
                <h2 className='sectionLabel'>Development bonuses</h2>
                <ul className={styles.bonusesList}>
                    <li><svg width='18' height='18' className='gem--white'><use href='sprite.svg#icon-Gemstone'/></svg>3</li>
                    <li><svg width='18' height='18' className='gem--blue'><use href='sprite.svg#icon-Gemstone'/></svg>2</li>
                    <li><svg width='18' height='18' className='gem--green'><use href='sprite.svg#icon-Gemstone'/></svg>1</li>
                    <li><svg width='18' height='18' className='gem--red'><use href='sprite.svg#icon-Gemstone'/></svg>4</li>
                    <li><svg width='18' height='18' className='gem--black'><use href='sprite.svg#icon-Gemstone'/></svg>5</li>
                </ul>
                <p className={styles.text}>Permanent discounts on every purchase.</p>
            </div>
        </div>
    )
}

export default YourBonuses;