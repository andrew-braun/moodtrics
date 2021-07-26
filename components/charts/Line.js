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
			x: time_recorded,
			y: x_axis,
		}
		return x_axisFormatted
	})

	const affectData = {
		id: "Affect",
		data: chartDataFormatted,
	}

	console.log(affectData)
	// for (let object of chartDataFormatted) {
	// 	console.log(object)
	// }

	const data = [
		{
			id: "Test",
			data: [
				{ x: "7-17-2021", y: "1" },
				{ x: "8-17-2021", y: "5" },
			],
		},
	]
	return (
		<div className={styles.chart}>
			<h2>Chart</h2>

			<ResponsiveLine
				data={data}
				margin={{ top: 50, right: 160, bottom: 50, left: 60 }}
				xScale={{
					format: "%m-%d-%Y",
					type: "time",
					useUTC: false,
					precision: "day",
				}}
				xFormat="time:%m-%d-%Y"
				yScale={{ type: "log", base: 10, max: "auto" }}
				curve="monotoneX"
				axisTop={null}
				axisRight={null}
				axisBottom={{
					tickValues: "every 7 days",
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					format: "%b %d",
					legend: "Time",
					legendOffset: 36,
					legendPosition: "middle",
				}}
				axisLeft={{
					tickValues: [0, 1, 2, 3, 4, 5, 6],
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					format: "1",
					legend: "Affect",
					legendOffset: -40,
					legendPosition: "middle",
				}}
				enableGridX={false}
				colors={{ scheme: "spectral" }}
				lineWidth={1}
				pointSize={4}
				pointColor={{ theme: "background" }}
				pointBorderWidth={1}
				pointBorderColor={{ from: "serieColor" }}
				enablePointLabel={false}
				pointLabel="y"
				pointLabelYOffset={-12}
				useMesh={true}
				gridXValues={[0, 20, 40, 60, 80, 100, 120]}
				gridYValues={[-10, -5, 0, 5, 10]}
			/>
		</div>
	)
}
