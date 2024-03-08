import { WalletsItems } from "../../database/models/WalletItems"
export interface IWalletItemsRepository{

    createItem(data:WalletsItems):Promise<WalletsItems>
    getItemsById(itemId:string):Promise<WalletsItems>
    getAllItems(WalletId:string):Promise<WalletsItems[]>
    deleteItem(itemId:string):Promise<WalletsItems>
}