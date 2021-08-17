import { Component, useState, useEffect } from "react"
import { Line } from "react-chartjs-2"
import styles from "./time-series.module.css"

export default function TimeSeries(props) {
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

	const energyObservations = chartData.map((entry) => {
		const observationObject = {
			x: entry.time_recorded.toLocaleDateString(),
			y: entry.y_axis,
		}
		return observationObject
	})
	console.log(energyObservations)

	// const affectData = [
	// 	{
	// 		id: "Affect", "Energy",
	// 		datasets: [
	//             {
	//                 label: ""
	//             }
	//             ...chartDataFormatted

	//         ],
	// 	},
	// ]

	// console.log(affectData)
	// for (let object of chartDataFormatted) {
	// 	console.log(object)
	// }

	// const testData = [
	// 	new Date(2021, 7, 17).toLocaleDateString(),
	// 	new Date(2021, 8, 18).toLocaleDateString(),
	// 	new Date(2021, 10, 19).toLocaleDateString(),
	// ]

	// const data = {
	// 	labels: testData,
	// 	datasets: [
	// 		{
	// 			label: "Score",
	// 			data: [-5, -2, -3],
	// 			fill: false,
	// 			backgroundColor: "rgb(255, 99, 132)",
	// 			borderColor: "rgba(255, 99, 132, 0.2)",
	// 		},
	// 	],
	// }

	const data = {
		datasets: [
			{
				label: "Score",
				data: energyObservations,
			},
		],
	}

	const options = {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
			xAxes: [
				{
					type: "time",
					time: {
						unit: "month",
					},
				},
			],
		},
	}

	console.log(data)
	return (
		<div className={styles.chart}>
			<h2>Chart</h2>
			<Line data={data} options={options} />
		</div>
	)
}
