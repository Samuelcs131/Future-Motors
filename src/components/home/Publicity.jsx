import Image from "next/image";
import Link from "next/link";

const Publicity = () => {
    return ( 
        <section id="publicity">
 
            <div className="container-background"> 
                <div className="container">
                    <div className="group-info-publicity">
                        <h1 className="title-section">Financing & Insurance</h1>
                        <p>One intuitive platform. Cash, loan, or lease all inside your account with Future Finance. Integrate seamlessly with your insurance provider or use Future Insurance when you buy online.</p>
                        <Link href="/"><a className="view-more" >See all members<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.987671 13L6.98767 7L0.987671 1" stroke="black" strokeLinecap="round" strokeLinejoin="round"></path></svg></a></Link>
                    </div>
            </div>
                <div className="background-image"></div>
            </div>
            
            
        </section>
     );
}
 
export default Publicity;