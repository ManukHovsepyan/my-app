// import Footer from "../Footer";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header";
import Sidebar from "../Sidebar";
import style from "./index.module.scss"
import { RootState } from "../../../store/store";
import { useAnimation } from "../../../hooks/useAnimation";
import { PortalAnimations, SidebarOptions } from "../../../models/animationOptions";
import { toggleSidebarShow } from "../../../store/appSlice";
import { debounce } from "../../../hooks/useDebounce";
import { useCallback } from "react";
import { useLocation } from "react-router-dom";

interface Props {
	children: any,
}

const Wrapper = ({ children }: Props) => {
	const wrapperSpace = useSelector((state: RootState) => state.app.wrapperSpace);
	const isSidebarVisible = useSelector((state: RootState) => state.app.isSidebarShow);
	const dispatch = useDispatch();
	const [ref, animate] = useAnimation<HTMLDivElement>(SidebarOptions);
	const [refBody, animateBody] = useAnimation<HTMLDivElement>(SidebarOptions);
	
	const animateSidebar = () => {
		animate(isSidebarVisible ? PortalAnimations.fadeIn : PortalAnimations.fadeOut, () => [
			dispatch(toggleSidebarShow()),
		]);
		animateBody(isSidebarVisible ? PortalAnimations.fromLeft : PortalAnimations.toRight)
	}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debounceSidebar = useCallback(
		debounce(animateSidebar, 200),
	[isSidebarVisible])

	return (
		<div className={style.wrapper}>
			<Sidebar ref={ref} />
			<Header callBack={debounceSidebar} />
			<div ref={refBody} className={style.wrapperBody}>
				<div className={`${wrapperSpace ? style.wrapperContent : ''}`}>
					{children}
				</div>
			</div>
			{/* <Footer /> */}
		</div>
	);
}

export default Wrapper;
