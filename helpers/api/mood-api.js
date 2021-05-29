import {
	connectToDatabase,
	queryDatabase,
} from "../database/postgres-functions"

export async function fetchAllMoods() {
	const pool = await connectToDatabase()

	const getAllMoodsQuery = `
        SELECT mood, mood_rating, color
        FROM moods
        `

	let response = await queryDatabase(getAllMoodsQuery, pool)
	let data = await response.results
	console.log(data)
	return data
}
