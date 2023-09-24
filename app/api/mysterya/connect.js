import mysql from 'mysql2/promise';

export default async function connect(sql, values = []) {
	const conn = await mysql.createConnection({
		user: process.env.DB_USER,
		password: process.env.DB_PW,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		database: process.env.DB_DB,
		connectionLimit: 5000,
		multipleStatements: false,
		charset: 'utf8',
	});
	conn.connect();
	const [data, fields] = await conn.execute(sql, values);
	conn.end();
	return data;
}
