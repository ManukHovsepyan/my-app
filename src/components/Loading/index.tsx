import style from "./index.module.scss"
import logo from "assets/images/logo.jpg"
const Loading = () => {
	return (
		<div className={style.loadingWrapper}>
			<img src={logo} />
			<span className={style.loader}></span>
		</div>
	)
}

export default Loading