import styles from "./mood-history.module.css"

export default function MoodHistory(props) {
	const userMoodHistory = props.userMoodHistory.results
	const userMoodHistoryTable = userMoodHistory.map((entry) => {
		let fullDate = new Date(entry.time_recorded)

		let simplifiedDate =
			fullDate.getFullYear() +
			"/" +
			(fullDate.getMonth() + 1) +
			"/" +
			fullDate.getDate()

		return (
			<tr key={entry.time_recorded}>
				<td>{simplifiedDate}</td>
				<td>{entry.x_axis}</td>
				<td>{entry.y_axis}</td>
			</tr>
		)
	})

	return (
		<section className={styles.moodHistorySection}>
			<table className={styles.moodHistoryTable}>
				<thead>
					<tr>
						<th>Date</th>
						<th>Affect</th>
						<th>Energy</th>
					</tr>
					{userMoodHistoryTable}
				</thead>
			</table>
		</section>
	)
}
