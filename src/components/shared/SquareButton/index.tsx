import style from "./index.module.scss"

const SquareButton  = ({children} : any) => {
	return (
		<button className={style.sqrBtn}>
			{children}
		</button>
	)
}

export default SquareButton