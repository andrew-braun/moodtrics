import { useEffect, useState } from "react"
import MoodButton from "../MoodButton/MoodButton"
import styles from "./mood-grid.module.css"

export default function MoodGrid(props) {
	const { moods, selectedMood, moodSelectHandler } = props
	const [moodList, setMoodList] = useState()

	// useEffect(() => {
	// 	async function fetchAllMoods() {
	// 		const response = await fetch("/api/moods/get-all-moods")
	// 		const data = await response.json()
	// 		await setMoodList(data.data)
	// 		console.log(data.data)
	// 		return response
	// 	}
	// 	fetchAllMoods()
	// }, [])

	if (!moods || moods === undefined) {
		return "Loading..."
	}

	const moodButtons = moods.map((moodObject) => {
		const { mood, color } = moodObject
		return (
			<MoodButton
				text={mood}
				color={color}
				moodSelectHandler={moodSelectHandler}
				selectedMood={selectedMood}
				key={`${mood}-${color}`}
			/>
		)
	})

	return <div className={styles.moodGridContainer}>{moodButtons}</div>
}
