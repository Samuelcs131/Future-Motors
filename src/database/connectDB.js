import mongoose from "mongoose";

const connectDB = ( ) => {
    
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, error => {
        if(error) throw error;
        console.log('Conexao falhou')
    })
}

export default connectDB