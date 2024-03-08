import { Router } from "express";
import { WalletService } from "../services/WalletService";
import { WalletRepository } from "../repositories/WalletRepository";
import { WalletController } from "../controllers/WalletController";
import { sessionAuth } from "../middlewares/sessionAuth";

const walletRepository=new WalletRepository()
const walletService= new WalletService(walletRepository)
const walletController = new WalletController(walletService)

const walletRoutes= Router()


walletRoutes.use(sessionAuth)

walletRoutes.post('/',walletController.create)
walletRoutes.get('/',walletController.getAllWallets)
walletRoutes.get('/:id',walletController.getWalletByid)
walletRoutes.delete('/:id',walletController.deleteWallet)

export default walletRoutes



