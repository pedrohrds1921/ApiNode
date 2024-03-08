import { IUserRepository } from "./contracts/IUserRepository";

import knex from "../database/knex";
import { User } from "../database/models/User";
export class UserRepository implements IUserRepository{
    async getAllUsers(): Promise<User[]> {

    const users= await knex('Users').select('id','name','email')

    return users

    }

async getUserById(id: string): Promise<User> {
    const user= await knex('Users').where('id',id).first()
    return user
}
async getUserByEmail(email: string): Promise<User | undefined> {
    const user= await knex('Users').where('email',email).first()
    return user

}
async createUser(data: User): Promise<User> {

    const [user]= await knex('Users').insert(data).returning('*')

    return user
    
}
async deleteUser(id: string): Promise<User[]> {
    
    const user= await knex('Users').where('id',id).delete().returning('')

    return user

}



}
