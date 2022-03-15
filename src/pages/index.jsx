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

  const carros = [
    {name: 'NIO ET5',price: '$51,530',image: '/img/cars/et5-vehicle-list.png'},
    {name: 'NIO ET7',price: '$70,000',image: '/img/cars/et7.png'},
    {name: 'NIO ES8',price: '$59,463',image: '/img/cars/es8.png'},
    {name: 'NIO ES6',price: '$55,000',image: '/img/cars/es6.png'},
    {name: 'NIO EC6',price: '$54,000',image: '/img/cars/ec6.png'},
    {name: 'Canoo Lifestyle',price: '$34,000',image: '/img/cars/lifestyle.png'},
]

  return ( 
    <>
    <HeadPage titlePage={'Future Motors - Eletric Vehicle'} />
    <Menu/>
    <Landing/>
    <About/>
    <Imagery/>
    <Intro/>
    <Cards carros={carros}/>
    <Publicity/>
    <Footer/>
    </>
  )
}
