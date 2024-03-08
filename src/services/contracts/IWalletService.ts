import { Wallet } from "../../database/models/Wallet"

export interface IWalletService{

    createWallet(title:string,amount:number,user_id?:string):Promise<Wallet>
    getWalletById(WalletId:string):Promise<Wallet>
    getWallet(user_id?:string):Promise<Wallet[]>
    deleteWallet(WalletId:string):Promise<Wallet[]>
}