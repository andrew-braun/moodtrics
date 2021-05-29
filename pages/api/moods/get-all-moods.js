import {
	connectToDatabase,
	queryDatabase,
} from "../../../helpers/database/postgres-functions"

export default async function handler(req, res) {
	const pool = connectToDatabase()

	const getAllMoodsQuery = `
		SELECT mood, mood_rating, color
		FROM moods
		`

	let response = await queryDatabase(getAllMoodsQuery, pool)
	let data = response.results

	res
		.status(201)
		.json({ message: "Successfully fetched list of moods", data: data })
}
