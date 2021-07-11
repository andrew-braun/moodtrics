import styles from "./selected-mood.module.css"

export default function SelectedMood(props) {
	const { x_axis, y_axis } = props
	return (
		<div className={styles.selectedMood}>
			<div className={`${styles.axisNumber} ${styles.x_axisNumber}`}>
				<h3 className={styles.axisNumberHeading}>Affect</h3>
				<p className={styles.axisNumberText}>{x_axis}</p>
			</div>
			<div className={`${styles.axisNumber} ${styles.y_axisNumber}`}>
				<h3 className={styles.axisNumberHeading}>Energy Level</h3>
				<p className={styles.axisNumberText}>{y_axis}</p>
			</div>
		</div>
	)
}
