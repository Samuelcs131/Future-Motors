import About from '../components/home/About'
import HeadPage from '../components/HeadPage'
import Landing from '../components/home/Landing'
import Menu from '../components/Menu'
import Imagery from '../components/home/Imagery'
import Intro from '../components/home/Intro'
import Cards from '../components/home/Cards'
import Publicity from '../components/home/Publicity'
import Footer from '../components/Footer'

export default function Home() {
  return ( 
    <>
    <HeadPage titlePage={'Future Motors - Eletric Vehicle'} />
    <Menu/>
    <Landing/>
    <About/>
    <Imagery/>
    <Intro/>
    <Cards/>
    <Publicity/>
    <Footer/>
    </>
  )
}
