import  express  from "express";
import mongoose from "mongoose";
import routes from "./routes";
const app = express();

//fazer um novo banco no MONGODB
mongoose.connect('mongodb://localhost/firstapi')


//para transformar o body em json
app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
    res.send("Ola")
})

//portar que a api vai rodar 
app.listen(3000, () =>{
    console.log('Server is listening');
});