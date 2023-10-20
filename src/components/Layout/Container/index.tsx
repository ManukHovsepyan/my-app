import { useSelector } from "react-redux";
import style from "./index.module.scss"
import { RootState } from "store/store";

const Container = ({children} : any) => {
	const isSidebarVisible = useSelector((state: RootState) => state.app.isSidebarShow);
	
	return (
		<div 
			className={style.container} 
			{...isSidebarVisible && {style: {padding: "0 30px"}}}
		>
			{children}
		</div>
	)
}	

export default Container