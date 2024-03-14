import { Pool } from 'pg';

export default async function connect(sql, values = []) {
	// const conn =  pg.createConnection({
	// 	user: process.env.DB_USER,
	// 	password: process.env.DB_PW,
	// 	host: process.env.DB_HOST,
	// 	port: process.env.DB_PORT,
	// 	database: process.env.DB_DB,
	// 	connectionLimit: 5000,
	// 	multipleStatements: false,
	// 	charset: 'utf8mb4',
	// });
	let conn;
	if (!conn) {
		conn = new Pool({
			user: process.env.POSTGRES_MAIN_USER,
			password: process.env.POSTGRES_MAIN_PW,
			host: process.env.POSTGRES_MAIN_HOST,
			port: process.env.POSTGRES_MAIN_PORT,
			database: process.env.POSTGRES_MAIN_DB_1,
		});
	}
	const connClient = conn.connect();
	return connClient;
}
