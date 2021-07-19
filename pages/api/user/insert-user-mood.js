import {
	connectToDatabase,
	queryDatabase,
} from "../../../helpers/database/postgres-functions"

export default async function handler(req, res) {
	const pool = connectToDatabase()

	const { moodObject } = req.body
	const { user_id, x_axis, y_axis } = moodObject

	const insertMoodQuery = `
        INSERT INTO user_moods (user_id, mood_id, x_axis, y_axis)
        VALUES (${user_id}, 1, ${x_axis}, ${y_axis})
		
		`

	let response = await queryDatabase(insertMoodQuery, pool)
	let data = response.results

	res.status(201).json({ message: "Successfully inserted mood", data: data })
}
