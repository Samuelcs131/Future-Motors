import connectDB from "../../../database/connectDB";
import Users from "../../../models/userModel"
import bcrypt from 'bcrypt'
import {createAccessToken, createRefreshToken} from '../../../utils/generateToken'

connectDB()

export default async (req, res) => {
    switch(req.method){
        case "POST":
            await login(req, res)
            break;
    }
}

const login = async (req, res) => {
    try {
        const {email, password} = req.body

        // VERIFICA SE O EMAIL EXISTE
        const user = await Users.findOne({ email })
        if(!user) return res.status(400).json({err: 'This user does not exist.'})

        // VERIFICA SE A SENHA ESTA CORRETA
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return res.status(400).json({err: 'Incorrect password'})

        // 
        const access_token = createAccessToken({id: user._id})
        const refresh_token = createRefreshToken({id: user._id})

        res.json({
            msg: 'Login success',
            refresh_token,
            access_token,
            user: { firstName: user.firstName, lastName: user.lastName , email: user.email}
        })

    } catch(error){
        return res.status(500).json({error: error.message})
    }
}