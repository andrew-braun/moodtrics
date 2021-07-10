import { Fragment } from "react"
import MoodPlane from "../MoodPlane/MoodPlane"
import Button from "../../ui/Button/Button"
import styles from "./mood-picker.module.css"

export default function MoodPicker() {
	return (
		<Fragment>
			<div className={styles.moodPlaneContainer}>
				<MoodPlane />
			</div>
			<div className={styles.submitButtonContainer}>
				<Button type="submit">Set Mood</Button>
			</div>
		</Fragment>
	)
}
