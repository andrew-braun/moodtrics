import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Moodtrics</title>
				<meta name="description" content="A mood-sharing app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href="https://nextjs.org">Moodtrics</a>
				</h1>
			</main>
		</div>
	)
}
