
// criar rota com express
//importar o Router
import { Router } from "express";
import UserController from "./controller/UserController";


//Criar uma instancia igual no express
const routes = Router();


//criando a rota
routes.get("/users", UserController.find)
routes.post("/user", UserController.create);


export default routes;