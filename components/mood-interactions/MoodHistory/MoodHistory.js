import styles from "./mood-history.module.css"

export default function MoodHistory(props) {
	return (
		<section className={styles.moodHistorySection}>
			<table>
				<thead>
					<tr>
						<th>Date</th>
						<th>Affect</th>
						<th>Energy</th>
					</tr>
				</thead>
			</table>
		</section>
	)
}
