import {
	connectToDatabase,
	queryDatabase,
} from "../../../helpers/database/postgres-functions"

export default async function handler(req, res) {
	const pool = connectToDatabase()

	pool.connect()

	const getUserMoodsQuery = `
		SELECT mood, mood_rating, color, time_recorded 
		FROM user_moods
		INNER JOIN moods USING(mood_id)
		WHERE user_id = 0
		`
	const response = await queryDatabase(getUserMoodsQuery, pool)

	res.status(201).json({ message: response })
}
