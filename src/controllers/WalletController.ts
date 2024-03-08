import { Wallet } from "../database/models/Wallet";
import { IWalletService } from "../services/contracts/IWalletService";
import { Request,Response } from "express";
export class WalletController {


    constructor(private walletService:IWalletService){}

    create=async(req:Request,res: Response)=>{
        try{
            const userId=req.session.userId
            const{title,amount}=req.body
            const Wallet =await this.walletService.createWallet(title,amount,userId)
            res.status(201).json(Wallet)
        }catch (error) {
            if (error instanceof Error) {
              res.status(400).json({ message: error.message });
          } else {
              res.status(500).json({ message: "Internal Server Error" });
          }
        }       
    }

    getAllWallets=async(req:Request,res: Response)=>{
        try{
            const userId=req.session.userId
            const Wallet =await this.walletService.getWallet(userId)
            res.status(201).json(Wallet)
        }catch (error) {
            if (error instanceof Error) {
              res.status(400).json({ message: error.message });
          } else {
              res.status(500).json({ message: "Internal Server Error" });
          }
        }       
    }

    getWalletByid=async(req:Request,res: Response)=>{
        try{
            const walletId=req.params.id
            console.log(walletId)
            const Wallet =await this.walletService.getWalletById(walletId)
            res.status(201).json(Wallet)
        }catch (error) {
            if (error instanceof Error) {
              res.status(400).json({ message: error.message });
          } else {
              res.status(500).json({ message: "Internal Server Error" });
          }
        }       
    }

    deleteWallet=async(req:Request,res: Response)=>{
        try{
            const walletId=req.params.id
            const Wallet =await this.walletService.deleteWallet(walletId)
            console.log(Wallet)
        res.status(200).json("Wallet deleted")
        }catch (error) {
            if (error instanceof Error) {
              res.status(400).json({ message: error.message });
          } else {
              res.status(500).json({ message: "Internal Server Error" });
          }
        }       
    }

}