import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Dados from '../components/Dados'
import About from '../components/AboutUs'
import Services from '../components/Services'
import Clients from '../components/Clients'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Responsive Test</title>
        <meta name="Responsive Test" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Dados />
      <About />
      <Services />
      <Clients />
    </div>
  )
}

export default Home
