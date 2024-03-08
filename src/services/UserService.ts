import { IUserRepository } from "../repositories/contracts/IUserRepository";
import { IUserService } from "./contracts/IUserService";
import { User } from "../database/models/User";
import { randomUUID } from "node:crypto";

export class UserService implements IUserService{
    
    constructor(private userRepository:IUserRepository){}
    getAllUsers= async(): Promise<User[]>=> {
        return await this.userRepository.getAllUsers()
    }
    getUserById= async(id: string): Promise<User | undefined>=> {
        const foundId = await this.userRepository.getUserById(id)
        if (!foundId) throw new Error("id not found")
        return foundId
    }
    createUser=async(name:string,email:string,password:string): Promise<User> =>{
        const existingUser = await this.userRepository.getUserByEmail(email);
    if (existingUser) {
        throw new Error('Email already in use!');
    }
        const data:User={
            id:randomUUID(),
            email,
            name,
            password
        }
        return await this.userRepository.createUser(data)
    }
    deleteUser=async(id: string): Promise<User[]>=> {
        return await this.userRepository.deleteUser(id)
    }
    sessionUser=async(email: string, password: string): Promise<User> =>{
        const User = await this.userRepository.getUserByEmail(email);
        if (!User) {
            throw new Error('Email and Password incorrect!');
        }
        if(User.password!==password){
            throw new Error('Email and Password incorrect!');
        }
        return User
    }
}



