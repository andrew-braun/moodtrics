import {
	connectToDatabase,
	queryDatabase,
} from "../../../helpers/database/postgres-functions"

export default async function handler(req, res) {
	const pool = connectToDatabase()

	pool.connect()

	const moodHistoryQuery = `
        SELECT *
        FROM user_moods;
		`
	// 		WHERE user_id = ${user_id};
	const response = await queryDatabase(moodHistoryQuery, pool)

	res.status(201).json({ message: response })
}
