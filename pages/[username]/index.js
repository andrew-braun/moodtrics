import { Fragment, useState } from "react"
import { fetchUserMoodHistory } from "../../helpers/api/mood-api"
import MoodPicker from "../../components/mood-interactions/MoodPicker/MoodPicker"
import MoodHistory from "../../components/mood-interactions/MoodHistory/MoodHistory"
import styles from "./user-profile.module.css"

export default function UserProfile(props) {
	const [x_axis, setX_axis] = useState("0")
	const [y_axis, setY_axis] = useState("0")

	const userMoodHistory = props.userMoodHistory

	const name = "Andrew"

	const handleMoodSelect = (event) => {
		if (
			!Array.from(event.target.classList).join("").includes("mood-plane_point")
		) {
			return
		}
		setX_axis(event.target.dataset.x_axis)
		setY_axis(event.target.dataset.y_axis)
	}

	return (
		<Fragment>
			{/* <h1>The many moods of {name}</h1> */}
			<main>
				<MoodPicker
					handleMoodSelect={handleMoodSelect}
					x_axis={x_axis}
					y_axis={y_axis}
				/>
				<MoodHistory userMoodHistory={props.userMoodHistory} />
			</main>
		</Fragment>
	)
}

export async function getStaticProps() {
	return {
		props: {
			userMoodHistory: await fetchUserMoodHistory(),
		},
	}
}

export async function getStaticPaths() {
	const paths = [{ params: { username: "andrewbraun" } }]
	return {
		paths,
		fallback: false,
	}
}
