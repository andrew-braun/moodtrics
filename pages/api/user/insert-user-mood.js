import {
	connectToDatabase,
	queryDatabase,
} from "../../../helpers/database/postgres-functions"

export default async function handler(req, res) {
	const pool = connectToDatabase()
	const { user_id, x_axis, y_axis } = req.body

	const insertMoodQuery = `
        INSERT INTO user_moods (user_id, x_axis, y_axis)
        VALUES (${user_id}, ${x_axis}, ${y_axis})
		`

	let response = await queryDatabase(insertMoodQuery, pool)
	let data = response.results

	res.status(201).json({ message: "Successfully inserted mood", data: data })
}
