
import { Knex } from "../../../node_modules/knex/types/index"

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('WalletsItems',(table)=>{
        table.uuid('id').primary()
        table.text('name').notNullable()
        table.decimal('price',10,2).notNullable()
        table.integer('quantity')
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
        table.uuid('wallet_id').references('id').inTable('Wallets')
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('WalletsItems')
}

