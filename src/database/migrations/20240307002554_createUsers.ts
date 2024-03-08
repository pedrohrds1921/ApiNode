
import { Knex } from "../../../node_modules/knex/types/index"


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('Users',(table)=>{
        table.uuid('id').primary()
        table.text('name').notNullable()
        table.text('email').notNullable()
        table.text('password').notNullable()
    })
    }
    
    
    export async function down(knex: Knex): Promise<void> {
        await knex.schema.dropTable('Users')
    }