import React, { useEffect } from "react"
import HomeHeader from "components/Home/HomeHeader";
import HomeProductCategory from "components/Home/HomeProductCategory";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store/store";
import { toggleWrapperSpace } from "store/appSlice"

const Home = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(toggleWrapperSpace(false))
	}, [])
	return (
		<div>
			<HomeHeader />
			<HomeProductCategory />
		</div>
	)
}

export default Home