import style from "./index.module.scss"

const SquareInput = ({value,label, ...rest} : any) => {
	return (
		<>
			<label>{label}</label>
			<input className={style.SquareInput} value={value} {...rest} />
		</>
	)
}

export default SquareInput;