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

      <div className={styles.bg_statistics}>
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
      </div>

      <div className={styles.boost}>
          <h2>Boost your links today</h2>
          <button>Get Started</button>
      </div>

      <footer className={styles.footer}>

          <div className={styles.footer_container}>
            <div className={styles.title}>
              <h2>Shortly</h2>
            </div>
            
            <div className={styles.features}>
              <h3>Features</h3>
              <a href="/">Link shortening</a>
              <a href="/">Branded Links</a>
              <a href="/">Analytics</a>
            </div>

            <div className={styles.resources}>
              <h3>Resources</h3>
              <a href="/">Blog</a>
              <a href="/">Developers</a>
              <a href="/">Support</a>
            </div>

            <div className={styles.company}>
              <h3>Company</h3>
              <a href="/">About</a>
              <a href="/">Our Team</a>
              <a href="/">Careers</a>
              <a href="/">Contact</a>
            </div>

            <div className={styles.socials}>
              <a href="/"><i className="fab fa-facebook-square"></i></a>
              <a href="/"><i className="fab fa-twitter"></i></a>
              <a href="/"><i className="fab fa-pinterest"></i></a>
              <a href="/"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

      </footer>
    </>
  )
}
