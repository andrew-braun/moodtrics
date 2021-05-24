import { Fragment, useState } from "react"
import MoodGrid from "../../../components/mood-interactions/MoodGrid/MoodGrid"
import styles from "./user-profile.module.css"

export default function UserProfile() {
	const [selectedMood, setSelectedMood] = useState("")

	const moodSelectHandler = (event) => {
		if (selectedMood === event.target.id) {
			setSelectedMood("")
			return
		}
		setSelectedMood(event.target.id)
	}

	const handleMoodSubmit = () => {
		try {
			fetch("/api/user/set-moods")
		} catch (error) {
			res.status(400).json({ mesage: error })
		}
	}

	const handleMoodFetch = () => {
		try {
			fetch("/api/user/get-moods")
		} catch (error) {
			res.status(400).json({ mesage: error })
		}
	}

	const name = "Andrew"

	// let moods = []
	const moods = [
		{ text: "Bright", color: "yellow" },
		{ text: "Cloudy", color: "blue" },
	]

	if (!moods) {
		return "Loading moods"
	}

	if (moods.length === 0) {
		return "Uh-oh, we lost our temper. Seriously, where did it go? It looks like you haven't selected any moods."
	}

	return (
		<Fragment>
			<h1>The many moods of {name}</h1>
			<p>Today it's... {selectedMood}</p>
			<main>
				<MoodGrid
					moods={moods}
					moodSelectHandler={moodSelectHandler}
					selectedMood={selectedMood}
				/>
				<button className={styles.moodSubmit} onClick={handleMoodSubmit}>
					Set Mood
				</button>
				<button className={styles.moodSubmit} onClick={handleMoodFetch}>
					Get Mood
				</button>
			</main>
		</Fragment>
	)
}
