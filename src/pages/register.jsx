import Link from "next/link";
import Footer from "../components/Footer";
import HeadPage from "../components/HeadPage";
import Menu from "../components/Menu";

const Register = () => {
    return ( 
        <>
        <HeadPage titlePage={'Register - Future Motors'}/>
        <Menu/>
        <div id="register">
            <div className="container-register form-default">
                    <h1>Create Account</h1>

                    <label htmlFor="country">Select Market</label>
                    <select name="country" id="country" defaultValue={0}>
                        <option value="0">Select</option>
                    </select>

                    <label htmlFor="name">First Name</label>
                    <input type="text" name="name" id="name" />
                    
                    <label htmlFor="last">Last Name</label>
                    <input type="text" name="last" id="last" />

                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />

                    <button>Create Account</button>

                    <span>OR</span>

                    <Link href="/login"><a>Sign In</a></Link>
                </div>
                <Footer/>
        </div>
        </>
     );
}
 
export default Register;