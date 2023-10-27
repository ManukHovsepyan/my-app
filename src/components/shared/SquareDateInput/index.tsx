import style from "./index.module.scss"

const SquareDateInput = ({...rest}) => {
	return (
		<input {...rest} className={style.dateInput}/>
	)
}

export default SquareDateInput;