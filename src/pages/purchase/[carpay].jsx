import NumberFormat from "react-number-format";
import { useState, useEffect } from "react";
import HeadPage from "../../components/HeadPage";
import Menu from "../../components/Menu";


const CarPay = () => {

    const [dataCard, setDataCard] = useState({cardNumber: '', cardHolder: '', expirationDate: '', cardCVV: ''});

    function handleDataFormCard(value){
        setDataCard( data => {
          return ( {...data, [value.target.name]: value.target.value,})
        })
    }

    // 
    useEffect(()=>{

        document.querySelector('.card-cvv-input').onfocus = () => {
            document.querySelector('.front-card').style.transform = 'perspective(1000px) rotateY(-180deg)';
            document.querySelector('.back-card').style.transform = 'perspective(1000px) rotateY(0deg)'; 
        }
        document.querySelector('.card-cvv-input').onblur = () => {
            document.querySelector('.front-card').style.transform = 'perspective(1000px) rotateY(0deg)';
            document.querySelector('.back-card').style.transform = 'perspective(1000px) rotateY(180deg)'; 
        }

    })

    return (<>
        <HeadPage titlePage={'Car Payment - Future Motors'}/>
        <Menu/>

        <section id="carpay" className="container">
            <div style={{display: 'flex', flexDirection: 'column',alignItems: 'center', maxWidth: '500px'}}>
                <div className="card-container">
                    {/* FRONT CARD */}
                    <div className="front-card">
                        <div className="image-container">
                            <div className="chip-card"></div>
                            <img src="/img/cardCredit/visa.svg" alt="visa"/>
                        </div>
                        <div className="card-number-box">
                            {dataCard.cardNumber !== '' ? dataCard.cardNumber : '#### #### #### ####'}
                        </div>
                        <div className="container-card-info">
                            <div className="card-info">
                                <span>card holder</span>
                                <div className="card-holder-name">
                                {dataCard.cardHolder !== '' ? dataCard.cardHolder : 'Full Name'}
                                </div>
                            </div>
                            <div className="card-info">
                                <span>expires</span>
                                <div className="expiration-card">
                                    <span className="expiration-month">{dataCard.expirationDate !== '' ? dataCard.expirationDate : 'MM/YY'}</span> 
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BACK CARD */}
                    <div className="back-card">
                        <div className="stripe"></div>
                        <div className="card-info-cvv">
                            <span>cvv</span>
                            <div className="cvv-box">{dataCard.cardCVV !== '' ? dataCard.cardCVV : '000'}</div>
                            <img src="/img/cardCredit/visa.svg" alt="visa" />
                        </div>
                    </div>
                </div>

                <div className="form-card">
                    <div className="inputBox">
                        <label htmlFor="card-number">Card number</label>
                        <NumberFormat id="card-number" name="cardNumber" format="#### #### #### ####" mask=" " className="card-number-input" placeholder="0000 0000 0000 0000" onChange={handleDataFormCard} />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="card-holder">Card holder</label>
                        <input type="text" id="card-holder" className="card-holder-input" name="cardHolder" placeholder="SAMUEL CLAUDINO SILVA" onChange={handleDataFormCard}/>
                    </div>

                    <div className="container-date-and-cvv">
                        <div className="inputBox">
                            <label htmlFor="expiration-date">Expiration date</label>
                            <NumberFormat id="expiration-date" format="##/##" mask=" " placeholder="19/22" name="expirationDate" onChange={handleDataFormCard} />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="card-cvv">cvv</label>
                            <NumberFormat id="card-cvv" className="card-cvv-input" format="###" name="cardCVV" placeholder="123" onChange={handleDataFormCard} />
                        </div>
                    </div> 

                    <button className="btn-finalize">Finalize</button>
                </div>
            </div>
        </section>
    </>);
}
 
export default CarPay;