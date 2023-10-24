import logo from "assets/images/logo.jpg"
import style from './index.module.scss'
import { Link } from "react-router-dom";

const HeaderMiddle = () => {
	return (
		<div className={style.headerMiddle}>
			<Link to="/">
				<img alt="logo" className={style.logo} src={logo} />
			</Link>
		</div>
	);
};

export default HeaderMiddle;