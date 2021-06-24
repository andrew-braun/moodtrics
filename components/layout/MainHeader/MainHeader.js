import MainNav from "../MainNav/MainNav"
import styles from "./main-header.module.css"

export default function MainHeader(props) {
	return (
		<header className={styles.mainHeader}>
			<div className={styles.logo}>Moodtrics</div>
			<MainNav />
		</header>
	)
}
