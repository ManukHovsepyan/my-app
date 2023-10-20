import { useState } from "react";
import style from "./index.module.scss";
import { CallbackSkeletonType } from "../../../../../helpers/helpers";

interface Props {
	callBack: CallbackSkeletonType
}

const MenuIcon = ({
	callBack
}: Props) => {

  const [isOpened, setIsOpened] = useState<boolean>(false)

	const toggleBurger = () => {
		setIsOpened(!isOpened)
		if (callBack) callBack()
	}

	return (
		<div onClick={toggleBurger} className={`${style.burgerIcon} ${isOpened ? style.burgerIconOpened : ''}`}>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	);
};

export default MenuIcon;