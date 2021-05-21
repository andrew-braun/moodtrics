import styles from "./mood-button.module.css"

export default function MoodButton(props) {
	const { text, id, moodColor } = props
	return (
		<button
			className={styles.moodButton}
			id={id}
			style={{ background: moodColor }}
		>
			<div className={styles.moodButtonText}>{text}</div>
		</button>
	)
}
