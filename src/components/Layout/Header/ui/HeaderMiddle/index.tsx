import logo from "assets/images/logo.jpg"
import style from './index.module.scss'

const HeaderMiddle = () => {
	return (
		<div className={style.headerMiddle}>
			<img alt="logo" className={style.logo} src={logo} />
		</div>
	);
};

export default HeaderMiddle;