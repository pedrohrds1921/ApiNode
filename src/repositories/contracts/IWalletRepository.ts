import { Wallet } from "../../database/models/Wallet"

export interface IWalletRepository{

    createWallet(data:Wallet):Promise<Wallet>
    getWalletById(WalletId:string):Promise<Wallet>
    getWallet(WalletId?:string):Promise<Wallet[]>
    deleteWallet(WalletId:string):Promise<Wallet[]>
}