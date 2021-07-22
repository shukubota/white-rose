import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Posts from './posts/index.tsx';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>title</h1>
        <Posts />
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
