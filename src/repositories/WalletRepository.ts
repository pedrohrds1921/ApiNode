import { Wallet } from "../database/models/Wallet";
import { IWalletRepository } from "./contracts/IWalletRepository";
import knex from "../database/knex";

export class WalletRepository implements IWalletRepository{
    createWallet=async(data: Wallet): Promise<Wallet> =>{
        const [wallet]= await knex('Wallets').insert(data).returning('*')
        return wallet
    }
    getWallet=async(user_id?: string): Promise<Wallet[]>=> {
        const wallet= await knex('Wallets').where('user_id',user_id).returning('')
        return wallet
    }
    getWalletById=async(WalletId: string): Promise<Wallet> =>{
        const [wallet]= await knex('Wallets').where('id',WalletId).returning('')
        return wallet
    }
    deleteWallet=async(WalletId: string): Promise<Wallet[]> =>{
        const wallet= await knex('Wallets').where('id',WalletId).delete(['*'])
        return wallet
    }
}