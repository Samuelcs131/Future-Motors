import Image from "next/image";
import HeadPage from "../components/HeadPage";
import Menu from "../components/Menu";
import Footer from '../components/Footer'

const Cart = () => {
    return ( 
        <>
            <HeadPage titlePage={`Car - Future Motors`}/>
            <Menu/>
            <div id="car">
                <span className="background-car">
                <Image src={'/img/cars/produto/model-s.png'} layout="responsive" width={1300} height={450}/>
                </span>

                <div className="car-info container">
                    <h1>Model 3</h1>
                    
                    <ul>
                        <li>
                            <div>491<span>km</span></div>
                            <span>Autonomia</span>
                        </li>
                        <li>
                        <div>225<span>km/h</span></div>
                            <span>Velocidade máxima</span>
                        </li>
                        <li>
                        <div>6,1<span>s</span></div>
                            <span>0-100 km/h</span>
                        </li>
                    </ul>

                    <div className="version-option">
                        <p>Versão</p>
                        <div className="item-model active">
                            <span>Model 3 entrada</span>
                            <span>$51.900</span>
                        </div>
                        <div className="item-model">
                            <span>Model 3 </span>
                            <span>$51.900</span>
                        </div>
                    </div>

                    <div className="painting-option">
                        <h1>Pintura</h1>
                        <div className="colors-group">
                            <div className="color-item active" style={{backgroundColor: `black`}}></div>
                            <div className="color-item" style={{backgroundColor: `grey`}}></div>
                            <div className="color-item" style={{backgroundColor: `blue`}}></div>
                            <div className="color-item" style={{backgroundColor: `black`}}></div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
     );
}
 
export default Cart;