import express from 'express'
import routes from './routes/index'
import session from 'express-session'
import {randomUUID} from "node:crypto"
import swaggerUi from 'swagger-ui-express';
import swaggerdocs from'./apidocs/swagger.json'
import cors from 'cors'
const app= express()
app.use(cors())

app.use(session({
        secret:randomUUID(),
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
    }))
app.use(express.json())
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerdocs))
app.use(routes)


app.listen(3000,()=>{
    console.log("Server running")
})


