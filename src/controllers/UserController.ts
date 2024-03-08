
import { Request,Response } from "express";
import { IUserService } from "../services/contracts/IUserService";


export class UserController{
    constructor(private userService:IUserService){}
      create=async(req:Request,res:Response)=>{
        const {name,email,password}=req.body

          try{
            const user = await this.userService.createUser(name, email, password);
            res.status(201).json({message:'Create'});

          }catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(500).json({ message: "Internal Server Error" });
            }
        }
      }
      getAllUsers= async (req:Request,res:Response)=> {
        try {
          const users = await this.userService.getAllUsers();
          res.json(users);
        } catch (error) {
          if (error instanceof Error) {
              res.status(400).json({ message: error.message });
          } else {
              res.status(500).json({ message: "Internal Server Error" });
          }
      }
      }
      getUserById=async(req: Request, res: Response)=> {
        const userId = String(req.params.id);
        try {
          const user = await this.userService.getUserById(userId);
            res.json(user);
          } catch (error) {
            if (error instanceof Error) {
              res.status(400).json({ message: error.message });
          } else {
              res.status(500).json({ message: "Internal Server Error" });
          }
        }
      }
      deleteUser=async(req: Request, res: Response) =>{
        const userId = String(req.params.id);
        try {
          await this.userService.deleteUser(userId);
          res.json({ message: 'User deleted successfully' });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
      sessionUser= async (req: Request, res: Response)=>{
        try{
          const {email,password}=req.body
          const User= await this.userService.sessionUser(email,password)
          req.session.userId=User.id
    
          res.status(200).json({message:'Login Realizado'})

        }catch (error) {
          if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: "Internal Server Error" });
        }
      }
      }
    
}