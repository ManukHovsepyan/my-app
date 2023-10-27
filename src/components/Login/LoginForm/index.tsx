import SquareButton from "components/shared/SquareButton";
import style from "./index.module.scss"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
import SquareInput from "components/shared/SquareInput";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [isPasswordShow, setIsPasswordShow] = useState(false)

	const formSubmit = (event : any) => {
		event.preventDefault()
		console.log(email, password)
	}
	const togglePasswordShow = () => {
		setIsPasswordShow(!isPasswordShow)
	}
	return(
		<form className={style.loginForm} onSubmit={(event) => formSubmit(event)}>
			<div className={style.loginFormFieldContainer}>
				<div className={style.emailContainer}>
					<label>Email</label>
					<SquareInput 
						value={email} 
						onChange={(event : any) => setEmail(event.target.value)}/>
				</div>
				<div className={style.passwordContainer}>
					<label>Password</label>
					{
						isPasswordShow ?
							<AiFillEye
								className={style.passwordHideEye} 
								onClick={() => togglePasswordShow()}/> 
							: (
							<AiFillEyeInvisible 
								className={style.passwordHideEye} 
								onClick={() => togglePasswordShow()}/>
							)
					}
					<SquareInput 
						type={isPasswordShow ? "text" : "password"} 
						value={password} 
						onChange={(event : any) => setPassword(event.target.value)} />
				</div>
				<div className={style.forgetPassword}>
					<span>Forgot your password?</span>
				</div>
				<SquareButton onClick={(event : any) => formSubmit(event)}>Login</SquareButton>
				<div className={style.signUpTitleContainer}>
					<p>
						You dont have an account <Link to={'/registration'}>Sing Up!</Link>
					</p>
				</div>
			</div>
		</form>
	)
}

export default LoginForm;