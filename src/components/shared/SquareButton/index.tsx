import style from "./index.module.scss"

const SquareButton  = ({children, className, ...rest} : any) => {
	return (
		<button className={`${style.sqrBtn} ${className}`} {...rest}>
			{children}
		</button>
	)
}

export default SquareButton