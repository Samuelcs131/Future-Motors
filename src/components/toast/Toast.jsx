import Image from "next/image";
import { useEffect, useState } from "react";
import { IconToast, ProgressToast, ToastContainer } from "./toast-style";

/* {msg, handleShow, type} */
const Toast = ({msg, handleShow, type}) => {
      
    let color;
    let icon;
    const [showToast, setShowToast] = useState(true);

    // SELECT COLORS
    switch(type){
        case 'Success': color = '#07bc0c'; break;
        case 'Warning': color = '#f1c40f'; break;
        case 'Error': color = '#e74c3c'; break;
    }

    // CLOSE TOAST
    function closeToast(){
        setShowToast(false)
        const time = setTimeout(()=>handleShow(), 500)
        return ()=> clearInterval(time)
    }
    
    useEffect(()=>{
        const time = setTimeout( ()=> { closeToast(); console.log('close')}, 5000 )
        return ()=> clearInterval(time)
    })

    return (
        <>
           <ToastContainer id="toast" showToast={showToast} >
                <div className="toast-content">
                        <IconToast color={color}>
                            <Image src={`/img/icon/${type}.svg`} width={20} height={20}/>
                        </IconToast>
                    <div className="message">
                        <span className="text text-info">{msg.msg}</span>
                    </div>


                </div>

                <span className="icon-toast-close" onClick={()=>closeToast()}>
                            <svg className="icon-close-toast" viewBox="0 0 24 15" width="15" height="15" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </span>
               <ProgressToast color={color}/>
           </ToastContainer>
        </>
     );
}
 
export default Toast;