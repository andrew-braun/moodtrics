import styles from "./mood-button.module.css"

export default function MoodButton(props) {
	const { text, color, selectedMood, moodSelectHandler } = props
	const id = text.toLowerCase().replace(" ", "-")

	return (
		<button
			className={`${styles.moodButton} ${
				selectedMood === id ? styles.active : ""
			}`}
			id={id}
			style={{ background: color }}
			onClick={moodSelectHandler}
		>
			<div className={styles.moodButtonText}>{text}</div>
		</button>
	)
}
