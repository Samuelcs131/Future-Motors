import Slider from 'react-slick'

const Models = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    }

    return ( 
        <div className='models-wrapper'>
                {/* <h2>Models</h2> */}

                

                <div className='container-models-car'>
   
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
 
                </div>
            </div>
     );
}
 
export default Models;