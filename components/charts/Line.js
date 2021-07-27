import { Component, useState, useEffect } from "react"
import { ResponsiveLine } from "@nivo/line"
import { ResponsiveBar } from "@nivo/bar"
import styles from "./line.module.css"

export default function Line(props) {
	const { chartData } = props
	const chartDataFormatted = chartData.map((entry) => {
		const { record_id, time_recorded, x_axis, y_axis } = entry
		console.log(time_recorded)
		const x_axisFormatted = {
			x: String(time_recorded),
			y: x_axis.toString(),
		}
		return x_axisFormatted
	})

	const affectData = [
		{
			id: "Affect",
			data: [...chartDataFormatted],
		},
	]

	console.log(affectData)
	// for (let object of chartDataFormatted) {
	// 	console.log(object)
	// }

	const data = [
		{
			id: "Test",
			data: [
				{ x: "7-17-2021", y: "-5" },
				{ x: "8-17-2021", y: "8" },
				{ x: "10-17-2021", y: "-4" },
			],
		},
	]

	console.log(data)
	return (
		<div className={styles.chart}>
			<h2>Chart</h2>

			<ResponsiveLine
				data={affectData}
				margin={{ top: 100, right: 100, bottom: 100, left: 100 }}
				xScale={{
					format: "%m-%d-%Y",
					type: "time",
					useUTC: false,
					precision: "day",
				}}
				xFormat="time:%m-%d-%Y"
				curve="monotoneX"
				axisTop={null}
				axisRight={null}
				axisBottom={{
					tickValues: "every day",
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					format: "%b %d",
					legend: "Time",
					legendOffset: 36,
					legendPosition: "middle",
				}}
				axisLeft={{
					tickValues: [
						-10, -9, -8, -7, -6, -5, -4, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
						10,
					],
					max: 10,
					min: -10,
					tickSize: 5,
					tickPadding: 10,
					tickRotation: 0,
					format: ".2",
					legend: "Affect",
					legendOffset: -40,
					legendPosition: "middle",
				}}
				enableGridX={false}
				colors={{ scheme: "nivo" }}
				lineWidth={1}
				pointSize={4}
				pointColor={{ theme: "background" }}
				pointBorderWidth={1}
				pointBorderColor={{ from: "serieColor" }}
				enablePointLabel={false}
				pointLabel="y"
				pointLabelYOffset={-12}
				useMesh={true}
				// gridXValues={[0, 20, 40, 60, 80, 100, 120]}
				gridYValues={[-10, -5, 0, 5, 10]}
			/>
		</div>
	)
}
