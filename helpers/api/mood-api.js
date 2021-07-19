// import {
// 	connectToDatabase,
// 	queryDatabase,
// } from "../database/postgres-functions"

// export async function fetchAllMoods() {
// 	const pool = await connectToDatabase()

// 	const getAllMoodsQuery = `
//         SELECT mood, mood_rating, color
//         FROM moods
//         `

// 	let response = await queryDatabase(getAllMoodsQuery, pool)
// 	let data = await response.results
// 	// console.log(data)
// 	return data
// }

export async function fetchUserMoodHistory(user_id, startDate, endDate) {
	let userMoodHistory = {}
	try {
		const response = await fetch(
			"http://localhost:3000/api/user/get-user-mood-history"
		)
		console.log(response)
		const data = await response.json()
		userMoodHistory = data
	} catch (error) {
		console.log(error)
	}
	console.log(userMoodHistory)
	return userMoodHistory
}

export async function insertUserMood(moodObject) {
	// Mood object must contain user ID, x_axis, y_axis
	try {
		const response = await fetch(
			"http://localhost:3000/api/user/insert-user-mood",
			{
				method: "POST",
				headers: {
					"CONTENT-TYPE": "application/json",
				},
				body: JSON.stringify(moodObject),
			}
		)
		const data = await response.json()
		console.log(data)
	} catch (error) {
		console.log(error)
	}
}
