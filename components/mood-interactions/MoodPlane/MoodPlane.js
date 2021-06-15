import { useEffect, useState } from "react"
import styles from "./mood-plane.module.css"

export default function MoodPlane(props) {
	const { moods, selectedMood, moodSelectHandler } = props

	const quadrant1Points = quadrantGenerator(1, -10, -1, 10, 1)
	const quadrant2Points = quadrantGenerator(2, 1, 10, 10, 1)
	const quadrant3Points = quadrantGenerator(3, 1, 10, -1, -10)
	const quadrant4Points = quadrantGenerator(4, -10, -1, -1, -10)

	function quadrantGenerator(
		quadrant,
		leftXValue,
		rightXValue,
		topYValue,
		bottomYValue
	) {
		const filledQuadrant = []
		for (let y = topYValue; y >= bottomYValue; y--) {
			for (let x = leftXValue; x <= rightXValue; x++)
				filledQuadrant.push(
					<div className={`${styles.point}`} key={`${x}-${y}`}>
						{x}
					</div>
				)
		}
		return filledQuadrant
	}

	return (
		<div className={styles.moodPlaneContainer}>
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
