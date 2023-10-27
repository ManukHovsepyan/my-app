import RegistrationForm from "components/Registration/RegistrationForm"
import style from "./index.module.scss"
import image from "assets/images/123.jpg"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { toggleWrapperSpace } from "store/appSlice"

const Registration = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(toggleWrapperSpace(false))

		return () => {
			dispatch(toggleWrapperSpace(true));
		};
	}, [])
	return (
		<div className={style.registrationPageWrapper}>
			<div className={style.registrationFormWrapper}>
				<div className={style.registrationFormContainer}>
					<h1 className={style.SignIn}>Sign Up</h1>
					<RegistrationForm />
				</div>
				<div className={style.registrationImageContainer}>
					<img src={image} />
				</div>
			</div>
		</div>
	)
}

export default Registration