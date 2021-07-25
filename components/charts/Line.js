import { Component, useState, useEffect } from "react"
import { ResponsiveLine } from "@nivo/line"
import styles from "./line.module.css"

export default function Line(props) {
	const { chartData } = props
	const chartDataFormatted = chartData.map((entry) => {
		const { record_id, time_recorded, x_axis, y_axis } = entry
		console.log(time_recorded)
		const entryFormatted = {
			x: time_recorded,
			y: x_axis,
		}
		return entryFormatted
	})
	for (let object of chartDataFormatted) {
		console.log(object)
	}

	return (
		<div className={styles.chart}>
			<ResponsiveLine
				data={[
					{
						id: "x",
						data: { chartDataFormatted },
					},
				]}
				margin={{ top: 50, right: 160, bottom: 50, left: 60 }}
				xScale={{ format: "%Y-%m-%dT%H:%M:%S.%L%Z", type: "time" }}
				xFormat="time:%Y-%m-%dT%H:%M:%S.%L%Z"
				yScale={{ type: "linear", stacked: true, min: 0.0, max: 1.0 }}
				curve="monotoneX"
				axisTop={null}
				axisRight={{
					tickValues: [0.0, 0.2, 0.4, 0.6, 0.8, 1.0],
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					format: "0.2",
					legend: "",
					legendOffset: 0,
				}}
				axisBottom={{
					tickValues: "every 1 second",
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					format: "%S.%L",
					legend: "Time",
					legendOffset: 36,
					legendPosition: "middle",
				}}
				axisLeft={{
					tickValues: [0.0, 0.2, 0.4, 0.6, 0.8, 1.0],
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					format: ".2",
					legend: "CPU",
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
