import { useEffect, useState } from "react"
import quadrantGenerator from "../../../helpers/functions/quadrantGenerator"
import styles from "./mood-plane.module.css"

export default function MoodPlane(props) {
	const { moods, selectedMood, moodSelectHandler } = props

	/* Create four quadrants with labelled cells on a cartesian grid */
	const quadrant1Points = quadrantGenerator(1, -10, -1, 10, 1, styles)
	const quadrant2Points = quadrantGenerator(2, 1, 10, 10, 1, styles)
	const quadrant3Points = quadrantGenerator(3, 1, 10, -1, -10, styles)
	const quadrant4Points = quadrantGenerator(4, -10, -1, -1, -10, styles)

	return (
		<div className={styles.moodPlaneContainer}>
			<div className={`${styles.axisLabel} ${styles.yTopLabel}`}>
				<span>Activated</span>
			</div>
			<div className={`${styles.axisLabel} ${styles.yBottomLabel}`}>
				<span>Deactivated</span>
			</div>
			<div className={`${styles.axisLabel} ${styles.xLeftLabel}`}>
				<span>Negative</span>
			</div>
			<div className={`${styles.axisLabel} ${styles.xRightLabel}`}>
				<span>Positive</span>
			</div>
			<div className={styles.moodPlane}>
				<div className={`${styles.quadrant1} ${styles.quadrant}`}>
					{quadrant1Points}
				</div>
				<div className={`${styles.quadrant2} ${styles.quadrant}`}>
					{quadrant2Points}
				</div>
				<div className={`${styles.quadrant4} ${styles.quadrant}`}>
					{quadrant4Points}
				</div>
				<div className={`${styles.quadrant3} ${styles.quadrant}`}>
					{quadrant3Points}
				</div>
			</div>
		</div>
	)
}
