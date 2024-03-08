import { Router } from "express";
import userRoute from "./User.route";
import walletRoutes from "./Wallet.routes";

const routes=Router()

routes.use('/users',userRoute)
routes.use('/wallet',walletRoutes)

export default routes