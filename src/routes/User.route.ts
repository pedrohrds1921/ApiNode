import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { UserService } from "../services/UserService";
import { UserRepository } from "../repositories/UserRepository";


const userRepository=new UserRepository()
const userService=new UserService(userRepository)
const userController= new UserController(userService)

const userRoute=Router()

userRoute.get('/',userController.getAllUsers)
userRoute.get('/:id',userController.getUserById)
userRoute.post('/',userController.create)
userRoute.delete('/:id',userController.deleteUser)
userRoute.post('/session',userController.sessionUser)


export default userRoute