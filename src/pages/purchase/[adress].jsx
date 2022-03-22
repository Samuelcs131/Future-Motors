import NumberFormat from "react-number-format";
import { useState, useEffect } from "react";
import HeadPage from "../../components/HeadPage";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import { CardCarImageRounded } from "../../styles/style";
import Countries from "../../../public/Countries.json";
import Link from "next/link";

const Address = () => {
    return (<>
        <HeadPage titlePage={'Car Payment - Future Motors'}/>
        <Menu/>
        <section id="carpay" className="container">
        {/* INFO ADDRESS */}
        <div className="card-address">
            <h1>Address</h1>
            <div className="inputBox-address">
                <label htmlFor="card-number">First name</label>
                <input type="text" name=""   />
            </div>
            <div className="inputBox-address">
                <label htmlFor="card-number">Last name</label>
                <input type="text" name="" />
            </div>
            <div className="inputBox-address">
                <label htmlFor="card-number">Address</label>
                <input type="text" name=""  />
            </div>
            <div className="inputBox-address">
                <label htmlFor="card-number">City</label>
                <input type="text" name="" />
            </div>
            <div className="inputBox-address">
                <label htmlFor="card-number">Country</label>
                <div className="inputBox-address-select">
                    <select >
                        <option value="0">Selecionar</option>
                            {Countries.length !== 0 ?
                            (Countries.map( (country, index)=>{ return(
                                <option key={index} value={index}>{country.name}</option>
                            )} ))
                            :
                            ('')
                        }
                    </select>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                </div>
            </div>
            <div className="inputBox-address">
                <label htmlFor="card-number">Postal code</label> 
                <NumberFormat id="card-number" name="cardNumber" format="##########" mask=" " className="card-number-input" />
            </div>

            <Link href="/purchase/cardpayment/123">
                <a><button className="btn-continue">Continue</button></a>
            </Link>
        </div>

        {/* INFO CAR */}
        <div className="card-car">
            <div className="container-card-car">
                <div className="info-car">
                    <CardCarImageRounded image="/img/cars/model-s-3.png"/>
                    <h4>Model 3</h4>
                    <p>Model 3 Long Range</p>
                    <p>Color: BRANCO SUMMIT</p>
                </div>
                <div className="card-price">
                    <hr />
                    <div className="separation-info">
                        <p>Car</p><span>$50.000</span></div>
                    <div className="separation-info">
                        <p>freight</p><span>free</span></div>
                    <hr />
                    <div className="separation-info">
                        <p>Total</p><span>$50.000</span></div>
                </div>
            </div>
        </div>

            
        </section>
        <Footer/>
    </>);
}
 
export default Address;