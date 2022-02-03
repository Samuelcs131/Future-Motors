import Link from "next/link";

const About = () => {
    return ( 
        <section id="about" className="container">
            <h1 className="title-section">We Are Future</h1>
            <p>Future Motors is a collective initiative by EV industry leaders to streamline and reinvent the automotive acquisition experience.</p>

            <div className="group-brands-companies">
                <img src="/img/companies/Tesla.svg" alt="" />
                <img src="/img/companies/Lucid.svg" alt="" />
                <img src="/img/companies/Canoo.svg" alt="" />
                <img src="/img/companies/Nio.svg" alt="" />
            </div>

            <Link href="/"><a className="view-more">
                See all members
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.987671 13L6.98767 7L0.987671 1" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                </svg> 
            </a></Link>
        </section>
     );
}
 
export default About;