import MainHeader from "../../components/layout/MainHeader/MainHeader"
import styles from "./layout.module.css"

export default function Layout(props) {
	return (
		<div className={styles.layoutContainer}>
			<MainHeader />
			<main>{props.children}</main>
		</div>
	)
}
