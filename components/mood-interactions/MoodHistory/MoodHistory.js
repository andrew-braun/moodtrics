import Line from "../../charts/Line"
import TimeSeries from "../../charts/TimeSeries/TimeSeries"
import styles from "./mood-history.module.css"

export default function MoodHistory(props) {
	const userMoodHistory = props.userMoodHistory.results
	const userMoodHistoryChartData = userMoodHistory.map((entry) => {
		let { record_id, time_recorded, x_axis, y_axis } = entry

		const timeDateObj = new Date(time_recorded)

		let strippedEntry = {
			record_id: record_id,
			time_recorded: timeDateObj,
			x_axis: x_axis,
			y_axis: y_axis,
		}
		return strippedEntry
	})

	console.log(userMoodHistoryChartData)
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
			<div className={styles.userMoodHistoryChart}>
				<TimeSeries chartData={userMoodHistoryChartData} />
			</div>
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
