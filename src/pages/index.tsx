import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Menu from '../components/Menu'
import Hours from '../components/Hours'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>AtayCafe</title>
        <meta name="description" content="AtayCofe — fresh local food. Reserve a table or view our menu." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-white text-gray-900" id="top">
        <Navbar />
      </div>
    </>
  )
}
