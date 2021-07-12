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

export async function fetchUserMoodHistory(user_id, startDate, endDate) {
	const pool = await connectToDatabase()

	const moodHistoryQuery = `
        SELECT time_recorded, x_axis, y_axis
        FROM moods
		WHERE user_id = ${user_id};
        `

	let response = await queryDatabase(moodHistoryQuery, pool)
	let data = await response.results
	console.log(data)
	return data
}
