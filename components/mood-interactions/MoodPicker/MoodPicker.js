import { Fragment, useState } from "react"
import MoodPlane from "./MoodPlane/MoodPlane"
import SelectedMood from "./SelectedMood/SelectedMood"
import Button from "../../ui/Button/Button"
import styles from "./mood-picker.module.css"

export default function MoodPicker(props) {
	const { handleMoodSelect, x_axis, y_axis } = props

	return (
		<Fragment>
			<div className={styles.moodPlaneContainer} onClick={handleMoodSelect}>
				<MoodPlane />
			</div>
			<div className={styles.selectedMoodContainer}>
				<SelectedMood x_axis={x_axis} y_axis={y_axis} />
			</div>
			<div className={styles.submitButtonContainer}>
				<Button type="submit">Set Mood</Button>
			</div>
		</Fragment>
	)
}
