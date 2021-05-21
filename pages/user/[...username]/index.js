import { Fragment } from "react"
import MoodButton from "../../../components/mood-interactions/MoodButton/MoodButton"
import styles from "./userprofile.module.css"

export default function UserProfile() {
	const name = "Andrew"

	return (
		<Fragment>
			<h1>The many moods of {name}</h1>
			<main>
				<div className={styles.setMoodContainer}>
					<MoodButton text="Bright" id="bright" moodColor="yellow" />
				</div>
				<div className={styles.setMoodContainer}>
					<MoodButton text="Cloudy" id="cloudy" moodColor="blue" />
				</div>
			</main>
		</Fragment>
	)
}
