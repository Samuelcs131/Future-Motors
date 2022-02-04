import Link from "next/link";
import Footer from '../components/Footer'
import HeadPage from '../components/HeadPage'
import Menu from '../components/Menu'

const LogIn = () => {
    return ( 
        <>
        <HeadPage titlePage={'Login - Future Motors'}/>
        <Menu/>
        <div id="login">
            <div className="container-login form-default">
                <h1>Sign In</h1>

                <label htmlFor="email">Email Adress</label>
                <input type="email" name="email" id="email" />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />

                <button>Sign In</button>

                <span>OR</span>

                <Link href="/register"><a>Create Account</a></Link>
            </div>
            
            <Footer/>
        </div>
        </>
     );
}
 
export default LogIn;