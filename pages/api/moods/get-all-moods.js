import {
	connectToDatabase,
	queryDatabase,
} from "../../../helpers/database/postgres-functions"
import { Pool } from "pg"

export default async function handler(req, res) {
	const pool = new Pool({
		connectionString: process.env.HEROKU_CONNECTION_URL,
		ssl: {
			rejectUnauthorized: false,
		},
	})

	const getAllMoodsQuery = `
		SELECT mood, mood_rating, color
		FROM moods
		`

	let response

	try {
		const client = await pool.connect()
		const result = await client.query("SELECT * FROM moods")
		const results = { results: result ? result.rows : null }
		response = results
		client.release()
	} catch (err) {
		console.error(err)
		res.send("Error " + err)
	}

	res
		.status(201)
		.json({ message: "Successfully fetched list of moods", data: response })
}

// import {
// 	connectToDatabase,
// 	queryDatabase,
// } from "../../../helpers/database/postgres-functions"

// export default async function handler(req, res) {
// 	let preConnect

// 	try {
// 		preConnect = await connectToDatabase()
// 	} catch (error) {
// 		res.status(500).json({ message: "Could not connect to database!" })
// 	}

// 	let client = await preConnect.connect()

// 	const getAllMoodsQuery = `
// 		SELECT mood, mood_rating, color
// 		FROM moods
// 		`

// 	let response
// 	try {
// 		response = await queryDatabase(getAllMoodsQuery, client)
// 	} catch (error) {
// 		res.status(500).json({ message: "Could not complete query" })
// 	}

// 	res
// 		.status(201)
// 		.json({ message: "Successfully fetched list of moods", data: response })
// }
