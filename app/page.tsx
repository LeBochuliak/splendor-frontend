import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/Logo.png"
          alt="logo"
          width={212}
          height={32}
          priority
        />
        <div className={styles.intro}>
          <h1>What’s Splendor?</h1>
          <p>
            <span>Splendor is a fast-paced and accessible strategy game </span>
            in which you play a wealthy Renaissance merchant striving for
            prestige. You use your resources to acquire mines, means of
            transportation, and artisans that allow you to transform raw stones
            into magnificent jewels. With simple rules, tactical choices, and
            iconic components, Splendor has become a modern classic, perfect for
          </p>
          <Link href="/game-duel" className={styles.button}>
            Game
          </Link>
        </div>
      </main>
    </div>
  );
}
