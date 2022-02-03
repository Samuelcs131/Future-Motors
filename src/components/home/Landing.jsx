import Link from "next/link";

const Landing = () => {
    return ( 
        <>
        <header id="landing"> 
            <div className="background-landing" 
            style={{background: `url('/img/main-car/lexus-lf30-gallery-1.png')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                <div className="wrapper-landing-info">
                    <span>New</span>
                    <h1>Lexus LF-30 Electrified</h1>
                    <p>Available December 24</p>

                    <div className="btn-group">
                        <Link href="/"><a><button>Pre-order</button></a></Link>
                        <Link href="/"><a><button>Details</button></a></Link>
                    </div>
                </div>
            </div>
        </header>
        </>
     );
}
 
export default Landing;