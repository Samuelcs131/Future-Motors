import Link from "next/link";
import { useState, useContext } from "react";
import HeadPage from "../components/HeadPage";
import valid from "../utils/valid";
import { DataContext } from '../store/GlobalState'
import { postData } from "../utils/fetchData";



const Register = () => {
 

    const [dataForm, setDataForm] = useState({email: "",firstName: "", lastName: "", password: "", passwordConfirm: ""})

    const [state, dispatch] = useContext(DataContext )

    const handleDataForm = (event) => {
        const {name, value} = event.target
        setDataForm({... dataForm, [name]:value})
        
        dispatch({type: 'NOTIFY', payload: {} })
    }

    const SubmitForm = async () => {
        const errMsg = valid(dataForm.email ,dataForm.firstName , dataForm.lastName , dataForm.password , dataForm.passwordConfirm )

        if(errMsg) return dispatch({type: 'NOTIFY', payload: {error: errMsg}})
        
        dispatch({type: 'NOTIFY', payload: {loading: true} })

        const res = await postData('auth/register', dataForm)

        if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})

        console.log(res)
        
        return dispatch({type: 'NOTIFY', payload: {success: res.msg}})
    }
 

    return (
        <>
        <HeadPage titlePage={'Register - Future Motors'}/>

        <div id="register">
            <div className="container-register form-default">
                    <h1>Create Account</h1>
 
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName" onChange={handleDataForm} />
                    
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" id="lastName" onChange={handleDataForm} />

                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" onChange={handleDataForm} />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={handleDataForm} />
                    
                    <label htmlFor="passwordConfirm">Password Confirm</label>
                    <input type="password" name="passwordConfirm" id="passwordConfirm" onChange={handleDataForm} />

                    <button onClick={()=>SubmitForm()}>Create Account</button>

                    <span>OR</span>

                    <Link href="/login"><a>Sign In</a></Link>
                </div> 
        </div>
        </>
     );
}
 
export default Register;