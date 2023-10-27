import React, { useEffect } from "react"
import HomeHeader from "components/Home/HomeHeader";
import HomeProductCategory from "components/Home/HomeProductCategory";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store/store";
import { toggleWrapperSpace } from "store/appSlice"
import SpecialOffer from "components/shared/SpecialOfferTitle";
import img from "assets/images/aaa.jpg"

const Home = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(toggleWrapperSpace(false))

		return () => {
			dispatch(toggleWrapperSpace(true));
		};
	}, [])
	return (
		<div>
			<HomeHeader />
			<HomeProductCategory />
			<SpecialOffer img={img}/>
			<HomeProductCategory />
			<HomeProductCategory />
		</div>
	)
}

export default Home