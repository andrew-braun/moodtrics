import {
	connectToDatabase,
	queryDatabase,
} from "../../../helpers/database/postgres-functions"

export default async function handler(req, res) {
	const client = connectToDatabase()

	client.connect()

	const setUserMoodsQuery = `
		INSERT INTO user_moods(user_id, mood_id)
			VALUES(0, 2)
	`

	const response = queryDatabase(setUserMoodsQuery, client)

	res.status(201).json({ message: "It worked!" })
}
