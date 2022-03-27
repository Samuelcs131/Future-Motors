import Link from "next/link";
import HeadPage from '../components/HeadPage'
import { DataContext } from '../store/GlobalState'
import { postData } from "../utils/fetchData";
import { useState, useContext, useEffect } from "react";
import { useRouter } from 'next/router'
import Cookie from 'js-cookie'


const LogIn = () => {

    const [dataForm, setDataForm] = useState({email: "", password: ""})

    const {state, dispatch} = useContext(DataContext)

    const {auth} = state

    const router = useRouter()

    const handleDataForm = (event) => {
        const {name, value} = event.target
        setDataForm({... dataForm, [name]:value})
        
        dispatch({type: 'NOTIFY', payload: {} })
    }

    const SubmitForm = async () => {
        
        dispatch({type: 'NOTIFY', payload: {loading: true} })

        const res = await postData('auth/login', dataForm)

        if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})
        
        dispatch({type: 'NOTIFY', payload: {success: res.msg}})
        dispatch({type: 'AUTH', payload: {
            token: res.access_token,
            user: res.user
        }})

        console.log(res)

        Cookie.set('refreshtoken', res.refresh_token,{
            path: 'api/auth/accessToken',
            expires: 1
        })

        localStorage.setItem('firstlogin', true)
    }

    useEffect(()=>{
        if(Object.keys(auth).length !== 0) { router.push('/') }
    }, [auth])

    return (
        <>
        <HeadPage titlePage={'Login - Future Motors'}/> 
        <div id="login">
            <div className="container-login form-default">
                <h1>Sign In</h1>

                <label htmlFor="email">Email Adress</label>
                <input type="email" name="email" id="email" onChange={handleDataForm} />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={handleDataForm}/>

                <button onClick={()=>SubmitForm()}>Sign In</button>

                <span>OR</span>

                <Link href="/register"><a>Create Account</a></Link>
            </div>
             
        </div>
        </>
     );
}
 
export default LogIn;