import { Client } from "pg"

export default async function handler(req, res) {
	const client = new Client({
		connectionString: process.env.HEROKU_CONNECTION_URL,
		ssl: {
			rejectUnauthorized: false,
		},
	})

	client.connect()

	// client.query(
	// 	"SELECT table_schema, table_name FROM information_schema.tables;",
	// 	(err, res) => {
	// 		if (err) throw err
	// 		for (let row of res.rows) {
	// 			console.log(JSON.stringify(row))
	// 		}
	// 		client.end()
	// 	}
	// )

	const setUserMoodsQuery = `
		INSERT INTO user_moods(user_id, mood_id)
			VALUES(0, 2)
	`

	client.query(setUserMoodsQuery, (err, res) => {
		if (err) throw err
		for (let row of res.rows) {
			console.log(JSON.stringify(row))
		}
		client.end()
	})

	res.status(201).json({ message: "It worked!" })
}
