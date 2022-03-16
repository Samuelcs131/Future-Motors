import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 1024, min: 720 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 720, min: 550 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 550, min: 0 },
      items: 2
    }
}; 

const Models = () => {
  
    return ( 
<div className='models-wrapper'>

    <Carousel 
    autoPlay={true} 
    shouldResetAutoplay={false} // rolagem automatica
    swipeable={true} // deslize capaz
    partialVisible={true} // parcialVisível
    draggable={true} // arrastavel  
    removeArrowOnDeviceType={["tablet", "mobile"]} // remove ao atingir resolução
    ssr={true} // means to render carousel on server-side.
    keyBoardControl={true}
    infinite={true}
    arrows={false}
    className='container-models-car'
    responsive={responsive}>
   
        <a className="model-car-container">
            <div className='circle-vehicle-model'>
                <div className='imamge-vehicle' 
                style={{backgroundPosition: '-4px -5px'}}></div>
            </div>
            <h3>Cabriolet</h3>
        </a>

        <a className="model-car-container">
            <div className='circle-vehicle-model'>
                <div className='imamge-vehicle' 
                style={{backgroundPosition: '-90px -5px'}}></div>
            </div>
            <h3>Coupe</h3>
        </a> 

        <a className="model-car-container">
            <div className='circle-vehicle-model'>
                <div className='imamge-vehicle' 
                style={{backgroundPosition: '-3px -47px'}}></div>
            </div>
            <h3>SUV</h3>
        </a> 

        <a className="model-car-container">
            <div className='circle-vehicle-model'>
                <div className='imamge-vehicle' 
                style={{backgroundPosition: '-3px -90px'}}></div>
            </div>
            <h3>Hatch</h3>
        </a>

        <a className="model-car-container">
            <div className='circle-vehicle-model'>
                <div className='imamge-vehicle' 
                style={{backgroundPosition: '-175px -5px'}}></div>
            </div>
            <h3>Pick-Up</h3>
        </a>

        <a className="model-car-container">
            <div className='circle-vehicle-model'>
                <div className='imamge-vehicle' 
                style={{backgroundPosition: '-175px -90px'}}></div>
            </div>
            <h3>Sedan</h3>
        </a>

        <a className="model-car-container">
            <div className='circle-vehicle-model'>
                <div className='imamge-vehicle' 
                style={{backgroundPosition: '-3px -132px'}}></div>
            </div>
            <h3>Minivan</h3>
        </a>

        <a className="model-car-container">
            <div className='circle-vehicle-model'>
                <div className='imamge-vehicle' 
                style={{backgroundPosition: '-175px -50px'}}></div>
            </div>
            <h3>Supercar</h3>
        </a>
            
   </Carousel>

      
</div>
     );
}
 
export default Models;