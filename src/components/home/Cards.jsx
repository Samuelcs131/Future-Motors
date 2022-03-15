import Link from "next/link";
import Card from "./Card";

const Cards = ( {carros} ) => {

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