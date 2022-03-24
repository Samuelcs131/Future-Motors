import { useContext } from "react";
import { DataContext } from "../store/GlobalState";
import Loading from './Loading'
import Toast from "./Toast";




const Notify = () => {
    const [state, dispatch] = useContext(DataContext)
    const { notify } = state

   
    
    return (<> 
            {/* LOADING */}
            {notify.loading && <Loading/>}
            {/* ERRO */}
            {notify.error && 
            <Toast 
            msg={{msg: notify.error}} 
            handleShow={()=> dispatch({type: 'NOTIFY', payload: {} })}
            type={'error'} />}
            {/* SUCCESS */}
            {notify.success && <Toast 
            msg={{msg: notify.success}} 
            handleShow={()=> dispatch({type: 'NOTIFY', payload: {} })}
            type={'success'} />}

            

            
    </>);
}
 
export default Notify;