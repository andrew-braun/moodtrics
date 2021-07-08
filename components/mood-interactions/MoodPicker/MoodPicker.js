import { Fragment } from "react"
import MoodPlane from "../MoodPlane/MoodPlane"
import styles from "./mood-picker.module.css"

export default function MoodPicker() {
	return (
		<Fragment>
			<MoodPlane />
			<button>Submit</button>
		</Fragment>
	)
}
