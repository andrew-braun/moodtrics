import MoodButton from "../MoodButton/MoodButton"
import styles from "./mood-grid.module.css"

export default function MoodGrid(props) {
	const { moods, selectedMood, moodSelectHandler } = props

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
