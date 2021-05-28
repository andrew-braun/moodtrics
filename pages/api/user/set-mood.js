import {
	connectToDatabase,
	queryDatabase,
} from "../../../helpers/database/postgres-functions"

export default async function handler(req, res) {
	const pool = connectToDatabase()

	pool.connect()

	const setUserMoodsQuery = `
		INSERT INTO user_moods(user_id, mood_id)
			VALUES(0, 2)
	`

	const response = await queryDatabase(setUserMoodsQuery, pool)

	res.status(201).json({ message: "It worked!", data: response })
}
