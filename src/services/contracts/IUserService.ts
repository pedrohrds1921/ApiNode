import { User } from "../../database/models/User"
export interface IUserService{
    getAllUsers(): Promise<User[]>
    getUserById(id: string): Promise<User | undefined>
    createUser(name:string,email:string,password:string): Promise<User>
    deleteUser(id: string): Promise<User[]>
    sessionUser(email:string,password:string):Promise <User>
}