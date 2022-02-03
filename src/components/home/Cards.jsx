import Link from "next/link";
import Card from "./Card";

const Cards = () => {

    const carros = [
        {name: 'NIO ET5',price: '$51,530',image: '/img/cars/et5-vehicle-list.png'},
        {name: 'NIO ET7',price: '$70,000',image: '/img/cars/et7.png'},
        {name: 'NIO ES8',price: '$59,463',image: '/img/cars/es8.png'},
        {name: 'NIO ES6',price: '$55,000',image: '/img/cars/es6.png'},
        {name: 'NIO EC6',price: '$54,000',image: '/img/cars/ec6.png'},
        {name: 'Canoo Lifestyle',price: '$34,000',image: '/img/cars/lifestyle.png'},
    ]

    return ( 
        <section id="cards" className="container">
            <div className="group-title-and-inventory">
                <h2 className="title-section-card">Order Online</h2>
                <Link href="/"><a className="view-more">
                    Browse inventory
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.987671 13L6.98767 7L0.987671 1" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg> 
                </a></Link>
            </div>

        <div className="container-cards">
            {carros.length != 0 ? (
            carros.map( (carro,id) => <Card key={id} dataCard={carro} /> )
            ) : (
            <p>Nenhum item registrado</p>
            )}
        </div>

        </section>
     );
}
 
export default Cards;