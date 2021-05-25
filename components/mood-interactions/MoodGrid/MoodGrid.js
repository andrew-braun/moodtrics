import { useEffect, useState } from "react"
import MoodButton from "../MoodButton/MoodButton"
import styles from "./mood-grid.module.css"

export default function MoodGrid(props) {
	const { moods, selectedMood, moodSelectHandler } = props
	const [moodList, setMoodList] = useState()

	useEffect(() => {
		fetch("/api/moods/get-all-moods")
			.then((response) => response.json())
			.then((data) => console.log(data))
			.then((data) => setMoodList(data))
		// async function fetchMoods() {
		// 	const response = await fetch("/api/moods/get-all-moods")
		// 	const data = await response.json()
		// 	await setMoodList(data)
		// 	console.log(data)
		// }
		// fetchMoods()
	}, [])

	if (!moodList) {
		return "Loading..."
	}

	console.log(moodList)

	const moodButtons = moods.map((mood) => {
		const { text, color } = mood
		return (
			<MoodButton
				text={text}
				color={color}
				moodSelectHandler={moodSelectHandler}
				selectedMood={selectedMood}
				key={`${text}-${color}`}
			/>
		)
	})
	return <div className={styles.moodGridContainer}>{moodButtons}</div>
}
