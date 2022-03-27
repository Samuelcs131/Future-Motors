import Link from "next/link";
import { useContext } from "react";
import { DataContext } from "../store/GlobalState";
import Cookie from 'js-cookie'

const Menu = () => {
    const {state, dispatch} = useContext(DataContext)
    const {auth} = state

    const handleLogout = () => {
        Cookie.remove('refreshtoken', {path: 'api/auth/accessToken'})
        localStorage.removeItem('firstLogin')
        dispatch({type: 'AUTH', payload: {} })
        dispatch({type: 'NOTIFY', payload: {success: 'Logged out!'} })
        
    }

    const accountMenu = (name) => {
        return(
            <Link passHref href='/login'><a className="item-menu-account">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{name}</span>
                </a></Link>
        )
    }

     return ( 
        <nav id="menu">
            <div className="container">
            <Link passHref href="/">
                <svg className="logo-menu" viewBox="0 0 50 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.8228 0H0V45L15.8228 32.3596V0ZM50 0H27.8481L18.3544 12.6405H40.5063L50 0Z" fill="black"/>
                </svg>
            </Link> 

            <div className="group-item">
                <Link passHref href='/cart'><a className="item-menu-card">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="quantity-itens">6</span> 
                    <span>Cart</span>
                </a></Link>
                {
                    Object.keys(auth).length === 0 
                    ? accountMenu('Account') : accountMenu(`${auth.user.firstName}`)
                }
            </div>
            </div>
        </nav>
     );
}
 
export default Menu;