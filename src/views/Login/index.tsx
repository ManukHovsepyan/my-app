import LoginForm from "components/Login/LoginForm"
import style from "./index.module.scss"
import image from "assets/images/123.jpg"
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store/store";
import { toggleWrapperSpace } from "store/appSlice"
import { useEffect } from "react";

const Login = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(toggleWrapperSpace(false))

		return () => {
			dispatch(toggleWrapperSpace(true));
		};
	}, [])
	return (
		<div className={style.loginPageWrapper}>
			<div className={style.loginFormWrapper}>
				<div className={style.loginImageContainer}>
					<img src={image} />
				</div>
				<div className={style.loginFormContainer}>
					<h1 className={style.SignIn}>Sign In</h1>
					<LoginForm />
				</div>
			</div>
		</div>
	)
}

export default Login