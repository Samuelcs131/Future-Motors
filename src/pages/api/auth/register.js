import connectDB from "../../../database/connectDB";
import Users from "../../../models/userModel" 
import valid from "../../../utils/valid"
import bcrypt from 'bcrypt'

connectDB()

export default async (req, res) => {
    switch(req.method){
        case "POST":
            await register(req, res)
            break;
    }
}

const register = async (req, res) => {
    try {
        const { email,firstName, lastName, password, passwordConfirm} = req.body

        const errMsg = valid(email,firstName, lastName, password, passwordConfirm)
        if(errMsg) return res.status(400).json({err: errMsg})

        const user = await Users.findOne({ email })
        if(user) return res.status(400).json({err: 'This is email already exists.'})

        const passwordHash = await bcrypt.hash(password, 12)

        const newUser = new Users({email,firstName, lastName, password: passwordHash})

        await newUser.save()
        res.json({msg: 'Register Success!'})
    } catch(error){
        return res.status(500).json({error: error.message})
    }
}