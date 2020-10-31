import Head from 'next/head'
import Navbar from '../src/components/Navbar'
import Form from '../src/components/Form'
import Card from '../src/components/Card'
import cards from '../src/cards/cards'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Shortly</title>
        <link rel="icon" href="/favicon-32x32.ico" />
      </Head>
      <Navbar />

      <div className={styles.illustration}>
        <img src="/illustration-working.svg" alt="illustration"/>

        <div className={styles.illustration_info}>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights 
            on how your links are performing.
          </p>
          <button>Get Started</button>
        </div>

      </div>

      <Form />

      <div className={styles.statistics}>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our 
          advanced statistics dashboard.
        </p>

        <div className={styles.cards}>
          {
            cards.map((e, i) => {
              return <Card cards={e} key={i}/>
            })
          }
        </div>
      </div>
    </>
  )
}
