import { Client, Pool } from "pg"

export function connectToDatabase() {
	const pool = new Pool({
		connectionString: process.env.HEROKU_CONNECTION_URL,
		ssl: {
			rejectUnauthorized: false,
		},
	})

	return pool
}

export async function queryDatabase(query, pool) {
	let response

	try {
		const client = await pool.connect()
		const result = await client.query(query)
		const results = { results: result ? result.rows : null }
		response = results
		client.release()
	} catch (err) {
		console.error(err)
		res.send("Error " + err)
	}

	return response
}
