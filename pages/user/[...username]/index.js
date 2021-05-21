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

	const name = "Andrew"
	const moods = [
		{ text: "Bright", id: "bright", color: "yellow" },
		{ text: "Cloudy", id: "cloudy", color: "blue" },
	]

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
				{/* <div className={styles.setMoodContainer}>
					<MoodButton text="Bright" id="bright" color="yellow" />
				</div>
				<div className={styles.setMoodContainer}>
					<MoodButton text="Cloudy" id="cloudy" color="blue" />
				</div> */}
			</main>
		</Fragment>
	)
}
