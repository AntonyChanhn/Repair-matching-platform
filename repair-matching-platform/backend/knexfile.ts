import { ConfigModule } from '@nestjs/config'
import type { Knex } from 'knex'
// import { config } from 'dotenv'

ConfigModule.forRoot({
	envFilePath: ['.env']
})

const Configs: { [key: string]: Knex.Config<any> } = {
	development: {
		client: 'postgresql',
		connection: {
			host: process.env.DB_HOST || 'localhost',
			database: process.env.DB_NAME,
			user: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	},
	staging: {
		client: 'postgresql',
		connection: {
			host: process.env.DB_HOST || 'localhost',
			database: 'my_db',
			user: 'username',
			password: 'password'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	},
	test: {
		client: 'postgresql',
		connection: {
			host: process.env.DB_HOST || 'localhost',
			database: process.env.DB_NAME,
			user: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	},
	production: {
		client: 'postgresql',
		connection: {
			host: process.env.DB_HOST || 'localhost',
			database: process.env.DB_NAME,
			user: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	}
}

module.exports = Configs
