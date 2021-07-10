import styles from "./button.module.css"

export default function Button(props) {
	const { type, onClick } = props

	const buttonStyles = `${styles.button}
		 					${styles[type]}`

	return (
		<button className={buttonStyles} onClick={onClick}>
			{props.children}
		</button>
	)
}
