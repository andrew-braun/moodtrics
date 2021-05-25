import { Client } from "pg"

export function connectToDatabase() {
	const client = new Client({
		connectionString: process.env.HEROKU_CONNECTION_URL,
		ssl: {
			rejectUnauthorized: false,
		},
	})

	return client
}

export function queryDatabase(query, client) {
	let response = []

	client.query(query, (err, res) => {
		if (err) throw err
		for (let row of res.rows) {
			console.log(JSON.stringify(row))
			response.push(row)
		}
		client.end()
	})

	return response
}
