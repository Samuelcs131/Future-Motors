import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

const Toast = ({msg, handleShow, type}) => {
 
    const configNotify = {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        }
        
    let notify;
    
    type === 'success' ? notify = () => toast.success(msg.msg, configNotify) : notify = () => toast.error(msg.msg, configNotify);
    
    let exemplo = () => console.log('opa')

    useEffect(()=>{
        notify()
    } )

    return ( 
        <>
        {/* <h2>{msg.title}</h2>
        <h2>{msg.msg}</h2>
        <button onClick={handleShow}>x</button> */}

        {/* <button onClick={notify}>Notify!</button> */}

        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />

        </>
    );
}
 
export default Toast;