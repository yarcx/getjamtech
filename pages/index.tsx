import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer/footer'
import Header from '../components/Header/header'
import MainContent from '../components/MainContent/mainContent'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Google</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"></link>
      </Head>
      <div className={` w-screen mx-auto  relative  ${styles.contentWrapper}`}>
        <div className={`p-2`} >
          <Header />
        </div>
        <div className="flex mt-16 md:mt-3 pa-2">
          <MainContent />
        </div>
        {/* footer goes under here */}
        <div className={` ${styles.footer}`}><Footer /></div>
      </div>
    </>
  )
}

export default Home
