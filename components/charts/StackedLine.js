import { Component, useState, useEffect } from "react"
import { ResponsiveLine } from "@nivo/line"
import styles from "./stacked-line.module.css"

export default function StackedLine(props) {
	const { chartData } = props
	const chartDataFormatted = chartData.map((entry) => {
		const { record_id, time_recorded, x_axis, y_axis } = entry
		console.log(time_recorded)
		const entryFormatted = {
			id: record_id,
			data: [
				{
					x: time_recorded,
					y: x_axis,
				},
			],
		}
		return entryFormatted
	})
	for (let object of chartDataFormatted) {
		console.log(object)
	}

	return (
		<div className={styles.chart}>
			<ResponsiveLine data={chartDataFormatted} />
		</div>
	)
}
