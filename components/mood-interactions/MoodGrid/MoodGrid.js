import { useEffect, useState } from "react"
import MoodButton from "../MoodButton/MoodButton"
import styles from "./mood-grid.module.css"

export default function MoodGrid(props) {
	const { moods, selectedMood, moodSelectHandler } = props
	const [moodList, setMoodList] = useState()

	useEffect(() => {
		async function fetchAllMoods() {
			const response = await fetch("/api/moods/get-all-moods")
			return response
		}
		setMoodList(fetchAllMoods().data)
	}, [])

	if (!moodList) {
		return "Loading..."
	}

	async function fetchAllMoods() {
		const response = await fetch("/api/moods/get-all-moods")
		return response
	}

	const response = fetchAllMoods()
		.then((response) => response.json())
		.then((data) => console.log(data))

	const moodButtons = moodList.map((moodObject) => {
		const { mood, color } = moodObject
		return (
			<MoodButton
				text={mood}
				color={color}
				moodSelectHandler={moodSelectHandler}
				selectedMood={selectedMood}
				key={`${text}-${color}`}
			/>
		)
	})
	return <div className={styles.moodGridContainer}>{moodButtons}</div>
}
