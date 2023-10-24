import style from "./index.module.scss"

const SquareButton  = ({children, className} : any) => {
	return (
		<button className={`${style.sqrBtn} ${className}`}>
			{children}
		</button>
	)
}

export default SquareButton