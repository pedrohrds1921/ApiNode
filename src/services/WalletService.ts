import { IWalletRepository } from "../repositories/contracts/IWalletRepository";
import { IWalletService } from "./contracts/IWalletService";
import { Wallet } from "../database/models/Wallet";
import{randomUUID} from "node:crypto"

export class WalletService implements IWalletService{

    constructor(private walletrepos:IWalletRepository){}

    createWallet=async(title:string,amount:number,user_id:string): Promise<Wallet> =>{
        const data:Wallet={
            id:randomUUID(),
            title,
            amount,
            user_id

        }
    const Wallet= await this.walletrepos.createWallet(data)

    return Wallet
    }
    
    getWallet=async(user_id?: string): Promise<Wallet[]>=> {
        const Wallet= await this.walletrepos.getWallet(user_id)
        return Wallet
    }
    getWalletById=async(WalletId: string): Promise<Wallet> =>{
        const Wallet= await this.walletrepos.getWalletById(WalletId)

        if(!Wallet){
            throw new Error('Wallet not found')
        }

        return Wallet
    }

    deleteWallet=async(WalletId: string): Promise<Wallet[]> =>{
        const Wallet= await this.walletrepos.deleteWallet(WalletId)
        console.log(Wallet)
        if(!Wallet){
            throw new Error('Wallet not found')
        }
      return Wallet
    }

}