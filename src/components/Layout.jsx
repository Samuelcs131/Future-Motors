import Menu from './Menu'
import Footer from './Footer'
import Notify from './Notify'

const Layout = ({children}) => {
    return (
    <>
        <Notify/>
        <Menu/>
        {children}
        <Footer/>

    </>);
}
 
export default Layout;