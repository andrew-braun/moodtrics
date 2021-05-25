import {
	connectToDatabase,
	queryDatabase,
} from "../../../helpers/database/postgres-functions"

export default async function handler(req, res) {
	let client
	try {
		client = connectToDatabase()
	} catch (error) {
		res.status(500).json({ message: "Could not connect to database!" })
	}

	client.connect()

	const getAllMoodsQuery = `
		SELECT mood, mood_rating, color
		FROM moods
		`

	let response
	try {
		response = queryDatabase(getAllMoodsQuery, client)
	} catch (error) {
		res.status(500).json({ message: "Could not complete query" })
	}

	res
		.status(201)
		.json({ message: "Successfully fetched list of moods", data: response })
}
