import HeadPage from "../components/HeadPage";
import Menu from "../components/Menu";
import Footer from '../components/Footer'
import { useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// CONFIG CAROUSEL 
const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const Cart = () => {

    const produto = {
        modelo: 'Model 3',
        carro: {
            exterior: [ 
                {imagem: '/img/cars/produto/model-s-1.png'},
                {imagem: '/img/cars/produto/model-s-2.png'},],
            interior: {imagem: '/img/cars/produto/model-s-4.jpg'}
        },
        cor: [
            {nome: 'BRANCO SUMMIT' ,cor: '#dfe7eb'},
            {nome: 'PRATA SWITCHBLADE' ,cor: '#aeb3b7'},
            {nome: 'AZUL SEEKER' ,cor: '#1d364c'},
            {nome: 'VERMELHO CARMIM' ,cor: '#7b0003'},
            {nome: 'PRETO OURO NEGRO' ,cor: '#12150e'},
        ],
        versoes: [
            {nome:'Model 3', valor: 51900 },
            {nome:'Model 3 Long Range', valor: 58990},
            {nome:'Model 3 Performance', valor: 64990}
        ],
        desempenho: {
            autonomia: '491',
            velocidade: '225',
            aceleracao: '6,1'
        },
        descricao: 'As funcionalidades atualmente ativadas requerem uma supervisão ativa do condutor e não tornam o veículo autónomo. Algumas funções requerem sinais de mudança de direção e apresentam um alcance limitado. A ativação e utilização destas funcionalidades dependem da capacidade de obter uma fiabilidade extremamente superior à de condutores humanos, conforme demonstrado por vários milhares de milhas de experiência, bem como aprovação legal, o que poderá levar algum tempo em determinadas jurisdições. À medida que estas funcionalidades de condução autónoma evoluem, o seu automóvel será continuamente atualizado através de atualizações de software automáticas.'
    }

    /* VALORES */
    const [versionCar, setVersion] = useState()
    const [colorCar, setColorCar] = useState()
    const [finalizePurchase, setFinalizePurchase] = useState(false)

    useEffect(()=> {

        if(versionCar !== undefined && colorCar !== undefined)
        setFinalizePurchase(true)

        // OPTION VERSION CAR
        const listVersionCar = document.querySelectorAll('.item-model')
        // VALUE DEFAULT
        //listVersionCar[0].className = 'item-model active'
        for(let i = 0; i < listVersionCar.length; i++){
            listVersionCar[i].addEventListener('click', ()=> {
                let j = 0;
                while(j < listVersionCar.length){
                    listVersionCar[j++].className = 'item-model'
                }
                listVersionCar[i].className = 'item-model active'
            })
        }
        
        // OPTION COLOR CAR
        const listColorCar = document.querySelectorAll('.color-item')
        const listNameColor = document.querySelector('.name-color-option')
        // VALUE DEFAULT
        //listColorCar[0].className = 'color-item active' 
        for(let i = 0; i < listColorCar.length; i++){
            listColorCar[i].addEventListener('click', ()=> {
                let j = 0;
                while(j < listColorCar.length){
                    listColorCar[j++].className = 'color-item'
                }
                listColorCar[i].className = 'color-item active'
                listNameColor.innerHTML = produto.cor[i].nome
            })
        } 
       
    })
  

    return (
        <>
            <HeadPage titlePage={`Car - Future Motors`}/>
            <Menu/>
            <div id="car">
                {/* CAROUSEL CAR */}
                <span className="background-car">
                    
                    <Carousel  
                    draggable={true} // arrastavel 
                    arrows={true} // setas laterais
                    ssr={true} // means to render carousel on server-side.
                    infinite={true} // rolagem infinita
                    autoPlay={true} // rolagem automatica
                    autoPlaySpeed={7000} // velocidade rolagem
                    shouldResetAutoplay={false} // rolagem automatica
                    keyBoardControl={true} 
                    transitionDuration={500} // duração de rolagem
                    removeArrowOnDeviceType={["tablet", "mobile"]} // desativa botão
                    responsive={responsive}>
                        {produto.carro.exterior.length != 0 ? (
                        produto.carro.exterior.map( (car,index) => {
                        return( 
                            <div key={index} className="background-carousel"> 
                                <div className="img-background"
                                style={{background: `url('${car.imagem}') no-repeat`,backgroundSize: 'contain', backgroundPosition: 'center'}}></div>
                            </div>)
                        })) : 
                        ( <h1>Nenhuma foto</h1>)
                        }
                    </Carousel>

                </span>
                {/* CAR INFO */}
                <div className="car-info container">
                    <h1>{produto.modelo}</h1>
                    <ul>
                        <li>
                            <div>{produto.desempenho.autonomia}<span>km</span></div>
                            <span className="legend-info-car">Autonomia</span>
                        </li>
                        <li>
                        <div>{produto.desempenho.velocidade}<span>km/h</span></div>
                            <span className="legend-info-car">Velocidade máxima</span>
                        </li>
                        <li>
                        <div>{produto.desempenho.aceleracao}<span>s</span></div>
                            <span className="legend-info-car">0-100 km/h</span>
                        </li>
                    </ul>

                    {/* VERSION MODEL */}
                    <div className="version-option">
                        <p>Versão</p>
                        {produto.versoes.length != 0 ? (
                        produto.versoes.map( (ver,index) => {
                            return(
                                <div 
                                key={index}
                                onClick={()=> setVersion({nome: ver.nome, valor: ver.valor})
                                }
                                className="item-model">
                                  
                                    <span>{ver.nome}</span>
                                    <span>${ver.valor}</span>
                                </div>
                            )
                        })
                        )
                        :
                        (<p>Nenhuma versão</p>)
                        }
                    </div>

                    {/* PAINTING CAR */}
                    <div className="painting-option">
                        <h1>Pintura</h1>
                        <div className="colors-group" style={{ gridTemplateColumns: `repeat(5,minmax(20px,1fr))`}}>
                            {produto.cor.length != 0 ? 
                            (produto.cor.map( (cor, position) => {
                                return( 
                                    <div 
                                    onClick={()=>setColorCar(
                                        {nome: cor.nome,cor: cor.cor}
                                    )} 
                                    key={position} className="color-item">
                                    <span color={`${cor.cor}`} style={{backgroundColor: `${cor.cor}`}}></span>
                                    </div> 
                                )
                            }))
                            :
                            (<p>Nenhuma cor disponivel</p>)}
                           
                        </div>
                        <p className="name-color-option">{produto.cor[0].nome}</p>
                    </div>
 
                </div>
                {/* INTERIOR CAR */}
                <div className="interior-background">
                        <h1>Interior</h1>
                        <div className="img-background" style={
                        {background: `url('${produto.carro.interior.imagem}') no-repeat`, 
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed', 
                        backgroundSize: 'cover',}}></div> 
                </div>
                {/* DESCRIPTION CAR */}
                <div className="description-container container">
                    <h1>Descrição</h1>
                    <p>{produto.descricao}</p>

                {finalizePurchase === true ? 
                <button>Adicionar ao carrinho</button> :
                <button style={{background: '#b8b8b8', cursor: 'not-allowed'}}>Adicionar ao carrinho</button>
                }
                </div>
                <p className="container">O prazo de entrega pode variar consoante a sua configuração e localização.</p>
            </div>
        <Footer/> 
        </>
     );
}
 
export default Cart;