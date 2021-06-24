import MainNav from "../MainNav/MainNav"
import Logo from "../Logo/Logo"
import styles from "./main-header.module.css"

export default function MainHeader(props) {
	return (
		<header className={styles.mainHeader}>
			<Logo />
			<MainNav />
		</header>
	)
}
