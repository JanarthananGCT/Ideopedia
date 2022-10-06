import Head from 'next/head'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ideopedia</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h2>Landing Page</h2>
      </div>


    </div>
  )
}
