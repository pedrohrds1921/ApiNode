import { IWalletItemsRepository } from "../repositories/contracts/IWalletItemsRepository";
import { IWalletItemsService } from "./contracts/IWalletItemsService";
import { WalletsItems } from "../database/models/WalletItems";
import { IWalletRepository } from "../repositories/contracts/IWalletRepository";
export class WalletItemService implements IWalletItemsService{


    constructor(
        private itemWalletRepo:IWalletItemsRepository,
        private walletRepo:IWalletRepository
        ){}
        

    async createItem(data: WalletsItems): Promise<WalletsItems> {
        const item= await this.itemWalletRepo.createItem(data)
        return item
    }
    
    async getAllItems(WalletId: string): Promise<WalletsItems[]> {
        const item= await this.itemWalletRepo.getAllItems(WalletId)
        return item
    }
    async getItemsById(itemId: string): Promise<WalletsItems> {
        const item= await this.itemWalletRepo.getItemsById(itemId)
        return item
    }
    
    async deleteItem(itemId: string): Promise<WalletsItems> {
        const item= await this.itemWalletRepo.deleteItem(itemId)
        return item
    }

}