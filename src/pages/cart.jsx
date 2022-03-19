import HeadPage from "../components/HeadPage";
import Menu from "../components/Menu";
import DataCars from "../../public/DataCars.json"
import { CardCarImage } from "../styles/style";


 
const Cart = () => {
    return ( 
        <>
            <HeadPage titlePage={'Cart - Future Motors'}></HeadPage>
            <Menu/>
            <section id="cart" className="container">
                <div className="cart-title">
                    <h2>Your Cart</h2>
                    <span>You have {2} cars in your cart</span>
                </div>

            {DataCars.length !== 0 ? ( DataCars.map( car =>{return(
                <div className="card-car">
                        <div className="head-card-car">
                            <span>April 14</span>
                        </div>
                    <hr />
                    <div className="container-card-car">
                        <div className="container-image-and-info">
                            <CardCarImage image={car.images.model}/>
                        
                            <div className="info-car-group">
                                <h1>{car.model}</h1>
                                <p>{car.versions[1].name}</p>
                                <p>Color: {car.color[0].name}</p>
                                <span className="value-car">${car.versions[0].price}</span>
                            </div>
                        </div>
                        <div className="btn-group">
                            <button className="btn-remove">Remove</button>
                            <button className="btn-finalize">Finalize</button>
                        </div>
                    </div>
                </div>
            )}) 
            )
            : 
            (<h1>Vazio</h1>)}

            </section>
        </>
     );
}

export default Cart;