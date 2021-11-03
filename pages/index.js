import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import Footer from '../components/footer'
import Navbar from '../components/Navbar'
import ShopNow from '../components/Shop'
import Styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
<Card />
<ShopNow />
    </div>
  )
}
