import HeadPage from '../components/HeadPage'
import Menu from '../components/Menu'
import Card from '../components/home/Card'
import Models from '../components/vehicles/Models'

const Vehicles = () => {

    const carros = [
        {name: 'NIO ET5',price: '$51,530',image: '/img/cars/et5-vehicle-list.png'},
        {name: 'NIO ET7',price: '$70,000',image: '/img/cars/et7.png'},
        {name: 'NIO ES8',price: '$59,463',image: '/img/cars/es8.png'},
        {name: 'NIO ES6',price: '$55,000',image: '/img/cars/es6.png'},
        {name: 'NIO EC6',price: '$54,000',image: '/img/cars/ec6.png'},
        {name: 'Canoo Lifestyle',price: '$34,000',image: '/img/cars/lifestyle.png'},
        {name: 'NIO ET5',price: '$51,530',image: '/img/cars/et5-vehicle-list.png'},
        {name: 'NIO ET7',price: '$70,000',image: '/img/cars/et7.png'},
        {name: 'NIO ES8',price: '$59,463',image: '/img/cars/es8.png'},
        {name: 'NIO ES6',price: '$55,000',image: '/img/cars/es6.png'},
        {name: 'NIO EC6',price: '$54,000',image: '/img/cars/ec6.png'},
        {name: 'Canoo Lifestyle',price: '$34,000',image: '/img/cars/lifestyle.png'},
         
    ]

    return ( 
        <>
        <HeadPage titlePage={'Vehicles'}/>
        <Menu/>

        <section id="cards" className="container" style={{paddingTop: '100px'}}>
            <div className='container-search'>
                <div className='search'>
                    <img src="/img/icon/Search.svg" alt=""/>
                    <input type="text" placeholder="Search car..."/>
                </div>

                <button>Search</button>
            </div>

            <Models/>

        <div className="container-cards">
            {carros.length != 0 ? (
            carros.map( (carro,id) => <Card key={id} dataCard={carro} /> )
            ) : (
            <p>Nenhum item registrado</p>
            )}
        </div>

        </section>

        </>
     );
}
 
export default Vehicles;