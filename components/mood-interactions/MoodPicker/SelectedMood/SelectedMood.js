import styles from "./selected-mood.module.css"

export default function SelectedMood(props) {
	const { x_axis, y_axis } = props
	return <div className={styles.selectedMood}>{`${x_axis}, ${y_axis}`}</div>
}
