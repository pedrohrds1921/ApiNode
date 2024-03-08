import { Knex } from "../../../node_modules/knex/types/index"

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('Wallets',(table)=>{
        table.uuid('id').primary()
        table.text('title').notNullable()
        table.decimal('amount',10,2).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
        table.uuid('user_id').references('id').inTable('Users')
    })
}


export async function down(knex: Knex): Promise<void> {

    await knex.schema.dropTable('Wallets')
}