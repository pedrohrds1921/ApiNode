import { WalletsItems } from "../database/models/WalletItems";
import { IWalletItemsRepository } from "./contracts/IWalletItemsRepository";
import knex from "../database/knex";
export class WalletItemRepository implements IWalletItemsRepository{

    async createItem(data: WalletsItems): Promise<WalletsItems> {
        const [item]= await knex('WalletsItems').insert(data).returning('*')
        return item
    }
    
    async getAllItems(WalletId: string): Promise<WalletsItems[]> {
        const [items]= await knex('WalletsItems').where('wallet_id',WalletId).returning('')
        return items
    }
    async getItemsById(itemId: string): Promise<WalletsItems> {
        const [items]= await knex('WalletsItems').where('id',itemId).returning('')
        return items
    }
    
    async deleteItem(itemId: string): Promise<WalletsItems> {
        const [wallet]= await knex('WalletsItems').where('id',itemId).delete().returning('')
        return wallet
    }
}