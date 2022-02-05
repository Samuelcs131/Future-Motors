import Image from "next/image";
import HeadPage from "../components/HeadPage";
import Menu from "../components/Menu";
import Footer from '../components/Footer'
import Slider from 'react-slick' 

const Cart = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

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

    return ( 
        <>
            <HeadPage titlePage={`Car - Future Motors`}/>
            <Menu/>
            <div id="car">
                {/* CAROUSEL CAR */}
                <span className="background-car">
                    <Slider {...settings}> 
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
                    </Slider>
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
                        <div className="item-model active">
                            <span>Model 3 entrada</span>
                            <span>$51.900</span>
                        </div> 
                        {produto.versoes.length != 0 ? (
                        produto.versoes.map( (ver,index) => {
                            return(
                                <div key={index} className="item-model">
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
                                    <div key={position} className="color-item active">
                                    <span color={`${cor.cor}`} style={{backgroundColor: `${cor.cor}`}}></span>
                                    </div> 
                                )
                            }))
                            :
                            (<p>Nenhuma cor disponivel</p>)}
                           
                        </div>
                        <p>PRETO OURO NEGRO</p>
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

                <button>Adicionar ao carrinho</button>

                </div>
                <p className="container">O prazo de entrega pode variar consoante a sua configuração e localização.</p>
            </div>
        <Footer/>
        </>
     );
}
 
export default Cart;

 