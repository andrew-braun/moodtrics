function quadrantGenerator(
	quadrant,
	leftXValue,
	rightXValue,
	topYValue,
	bottomYValue,
	styles
) {
	const filledQuadrant = []
	for (let y = topYValue; y >= bottomYValue; y--) {
		for (let x = leftXValue; x <= rightXValue; x++)
			filledQuadrant.push(
				<div
					className={`${styles.point}`}
					data-x_axis={x}
					data-y_axis={y}
					key={`${x}-${y}`}
				>
					<span className={styles.pointCoordinates}>{`${x}, ${y}`}</span>
				</div>
			)
	}
	return filledQuadrant
}

export default quadrantGenerator
