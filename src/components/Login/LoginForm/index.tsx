import SquareButton from "components/shared/SquareButton";
import style from "./index.module.scss"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
import SquareInput from "components/shared/SquareInput";
import { useState } from "react";
import { Link } from "react-router-dom";
import { validateLoginForm } from "./validation"
import { useDispatch } from "react-redux";
import { loginUser } from "store/authSlice";


const LoginForm = () => {
	const dispatch = useDispatch()
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isPasswordShow, setIsPasswordShow] = useState(false);
	const [errors, setErrors] = useState({
		email: "",
		password: ""
	})

	const formSubmit = (event : any) => {
		event.preventDefault()
		const newErrors = validateLoginForm({"email": email, "password": password})
    if (Object.values(newErrors).every((error) => !error)) {
			dispatch(loginUser({
				email,
				password
			}))
    } else {
      setErrors(newErrors);
    }
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
						{
							errors.email && 
							<span>{errors.email}</span>
						}
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
						{
							errors.password && 
							<span>{errors.password}</span>
						}
				</div>
				<div className={style.forgetPassword}>
					<span>Forgot your password?</span>
				</div>
				<SquareButton onClick={(event : any) => formSubmit(event)}>Login</SquareButton>
				<div className={style.signUpTitleContainer}>
					<p>
						Dont have an account <Link to={'/registration'}>Sing Up!</Link>
					</p>
				</div>
			</div>
		</form>
	)
}

export default LoginForm;