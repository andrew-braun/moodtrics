import {
	connectToDatabase,
	queryDatabase,
} from "../../../helpers/database/postgres-functions"

export default async function handler(req, res) {
	const client = connectToDatabase()

	client.connect()

	const getAllMoodsQuery = `
		SELECT mood, mood_rating, color
		FROM moods
		`

	const response = queryDatabase(getAllMoodsQuery, client)

	console.log(response)

	res.status(201).json({ message: "Successfully fetched list of moods" })
}
