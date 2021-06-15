import { Fragment, useState } from "react"
import { fetchAllMoods } from "../../../helpers/api/mood-api"
import MoodPlane from "../../../components/mood-interactions/MoodPlane/MoodPlane"
import styles from "./user-profile.module.css"

export default function UserProfile(props) {
	const name = "Andrew"

	return (
		<Fragment>
			<h1>The many moods of {name}</h1>
			<main>
				<MoodPlane />
			</main>
		</Fragment>
	)
}

export async function getStaticProps() {
	return {
		props: {
			allMoods: await fetchAllMoods(),
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

// export default function UserProfile(props) {
// 	const { allMoods, username } = props
// 	const [selectedMood, setSelectedMood] = useState("")

// 	console.log(props)

// 	const moodSelectHandler = (event) => {
// 		if (selectedMood === event.target.id) {
// 			setSelectedMood("")
// 			return
// 		}
// 		setSelectedMood(event.target.id)
// 	}

// 	const handleMoodSubmit = () => {
// 		try {
// 			fetch("/api/user/set-mood")
// 		} catch (error) {
// 			console.log(error)
// 		}
// 	}

// 	const handleMoodFetch = () => {
// 		try {
// 			fetch("/api/user/get-user-mood-history")
// 		} catch (error) {
// 			console.log(error)
// 		}
// 	}

// 	const handleFetchAllMoods = () => {
// 		try {
// 			fetch("/api/moods/get-all-moods")
// 		} catch (error) {
// 			console.log(error)
// 		}
// 	}

// 	const name = "Andrew"

// 	if (!allMoods) {
// 		return "Loading moods"
// 	}

// 	if (allMoods.length === 0) {
// 		return "Uh-oh, we lost our temper. Seriously, where did it go? It looks like you haven't selected any moods."
// 	}

// 	return (
// 		<Fragment>
// 			<h1>The many moods of {name}</h1>
// 			<p>Today it's... {selectedMood}</p>
// 			<main>
// 				<MoodGrid
// 					moods={allMoods}
// 					moodSelectHandler={moodSelectHandler}
// 					selectedMood={selectedMood}
// 				/>
// 				<button className={styles.moodSubmit} onClick={handleMoodSubmit}>
// 					Set Mood
// 				</button>
// 				<button className={styles.moodSubmit} onClick={handleMoodFetch}>
// 					Get Mood
// 				</button>
// 				<button className={styles.moodSubmit} onClick={handleFetchAllMoods}>
// 					Get All Moods
// 				</button>
// 			</main>
// 		</Fragment>
// 	)
// }
