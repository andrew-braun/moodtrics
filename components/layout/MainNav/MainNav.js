import Link from "next/Link"
import styles from "./main-nav.module.css"

export default function Layout(props) {
	return (
		<nav className={styles.mainNav}>
			<ul className={styles.navList}>
				<li>
					<Link href="/">Home</Link>
				</li>
			</ul>
		</nav>
	)
}
