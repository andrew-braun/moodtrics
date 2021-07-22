export async function fetchUserMoodHistory(user_id, startDate, endDate) {
	let userMoodHistory = {}
	try {
		const response = await fetch(
			"http://localhost:3000/api/user/get-user-mood-history"
		)
		const data = await response.json()
		userMoodHistory = data
	} catch (error) {
		console.log(error)
	}
	console.log(userMoodHistory)
	return userMoodHistory
}

export async function insertUserMood(moodObject) {
	// Mood object must contain user_id, x_axis, y_axis
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
	} catch (error) {
		console.log(error)
	}
}
