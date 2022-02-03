import Link from "next/link";

const Footer = () => {
    return ( 
        <footer id="footer" className="container">

            
            <div className="container-down">
                <div className="btn-link">
                    <a>Privacy Policy</a>
                    <a>Terms of Use</a>
                    <a>Do Not Sell My Personal Information</a>
                    <a>EU Residents</a>
                    <a>Legal</a>
                    <a>Site Map</a>
                </div>
                <span>© 2022 Future. All right reserved.</span>
            </div>
        </footer>
     );
}
 
export default Footer;