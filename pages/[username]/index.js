import { Fragment, useState } from "react"
import { fetchAllMoods } from "../../helpers/api/mood-api"
import MoodPicker from "../../components/mood-interactions/MoodPicker/MoodPicker"
import styles from "./user-profile.module.css"

export default function UserProfile(props) {
	const name = "Andrew"

	return (
		<Fragment>
			{/* <h1>The many moods of {name}</h1> */}
			<main>
				<MoodPicker />
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
