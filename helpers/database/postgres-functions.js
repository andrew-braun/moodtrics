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

	const result = client.query(query, (err, res) => {
		if (err) throw err
		for (let row of res.rows) {
			response.push(row)
		}
		console.log(response)
		client.end()
	})

	return response
}
