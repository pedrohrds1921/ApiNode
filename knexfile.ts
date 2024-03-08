import { Knex } from "knex"

export const settings: Knex.Config={
    client:'sqlite3',
    connection:{
        filename:'./database/db.db'
    },
    useNullAsDefault:true,
    migrations:{
        extension:'ts',
        directory:'./src/database/migrations'
    }
}
export default settings