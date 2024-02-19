import mongoose from "mongoose";
import bcrpt from 'bcrypt'

const User = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowecase: true,
    },

    password: {
        type: String,
        required: true,
        select: false
    },

    // toda vez que um usuario for criado, o campo cratedAt vai ser alimentado com as novas informaçoes
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

// criptografar a senha 
User.pre('save', async function(next) {
    const hashedPassword = await bcrpt.hash(this.password, 12)// fazer 12 passos
    this.password = hashedPassword
    next();
});

export default mongoose.model("User", User);