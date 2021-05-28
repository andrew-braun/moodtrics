import {
	connectToDatabase,
	queryDatabase,
} from "../../../helpers/database/postgres-functions"

export default async function handler(req, res) {
	const pool = connectToDatabase()

	const getAllMoodsQuery = `
		SELECT mood, mood_rating, color
		FROM moods
		`

	let response = await queryDatabase(getAllMoodsQuery, pool)
	let data = response.results

	res
		.status(201)
		.json({ message: "Successfully fetched list of moods", data: data })
}

// import {
// 	connectToDatabase,
// 	queryDatabase,
// } from "../../../helpers/database/postgres-functions"

// export default async function handler(req, res) {
// 	let preConnect

// 	try {
// 		preConnect = await connectToDatabase()
// 	} catch (error) {
// 		res.status(500).json({ message: "Could not connect to database!" })
// 	}

// 	let client = await preConnect.connect()

// 	const getAllMoodsQuery = `
// 		SELECT mood, mood_rating, color
// 		FROM moods
// 		`

// 	let response
// 	try {
// 		response = await queryDatabase(getAllMoodsQuery, client)
// 	} catch (error) {
// 		res.status(500).json({ message: "Could not complete query" })
// 	}

// 	res
// 		.status(201)
// 		.json({ message: "Successfully fetched list of moods", data: response })
// }
