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
				<div className={`${styles.point}`} key={`${x}-${y}`}>
					<span className={styles.pointCoordinates}>{`${x}, ${y}`}</span>
				</div>
			)
	}
	return filledQuadrant
}

export default quadrantGenerator
