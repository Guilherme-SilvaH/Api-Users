import { Response, Request } from "express"
import User from "../database/schemas/User"




//no controller usamos geralmente para fazer regras de negocios, por exemplo criar um novo usuario, ou verificar se ja existe

class UserController {


    async find(request: Request, response: Response){
    try{
        const users = await User.find();
        return response.json(users)
    }catch (error) {
            return response.status(500).json({
                error: "Something wrong happened, try again",
                message: error
            })
        }
    }




    async create(request: Request, response: Response) {
        const {name, email, password} = request.body


        try {
            const userExist = await User.findOne({email});

            if (userExist) {
                return response.status(400).json({
                    error: "Oooops",
                    message: "User alteready exists"
                })
            }

            const user = await User.create({
                name,
                email,
                password
            });

            return response.json(user)
            
        } catch (error) {
            return response.status(500).json({
                error: "Registration failed",
                message: error
            })
        }
    } 
}

export default new UserController