import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.outerwrapper}>
      <main className={styles.main}>
        <Link href="/quiz">
          <button className={styles.startBtn}>Starta Quiz!</button>
        </Link>
      </main>
    </div>
  )
}
