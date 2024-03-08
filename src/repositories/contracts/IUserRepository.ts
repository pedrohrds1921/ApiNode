
import { User } from "../../database/models/User"
export interface IUserRepository{
    getAllUsers(): Promise<User[]>
    getUserById(id: string): Promise<User | undefined>
    getUserByEmail(email:string):Promise<User | undefined>
    createUser(data:User): Promise<User>
    deleteUser(id: string): Promise<User[]>
}